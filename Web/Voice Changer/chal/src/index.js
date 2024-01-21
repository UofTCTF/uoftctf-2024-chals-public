const express = require('express');    //Express Web Server
const busboy = require('connect-busboy'); //middleware for form/file upload
const path = require('path');     //used for file path
const uuid = require("uuid").v1;
const fs = require('fs'); // interact with the file system
const {exec} = require("child_process"); // execute shell commands
const app = express(); // create express app, handles http requests
app.use(busboy({limits: {fileSize: 1e+8}})); // middleware to accept form/file upload
app.use(express.static(path.join(__dirname, 'public'))); // let users freely access the /public folder

// Main upload endpointz
app.post('/upload', function (req, res, next) {
    if (!req.busboy) {
        return res.send(400)
    }
    let formData = {};
    req.busboy.on('field', function (fieldname, val) {
        formData[fieldname] = val;
    });
    console.log("piping")
    // process the file data
    req.pipe(req.busboy);
    // handle file upload (trigger callback when done processing)
    req.busboy.on('file', function (fieldname, file, filedata) {
        const fileName = uuid() + ".ogg";
        console.log("Uploading: " + JSON.stringify(filedata));
        // write the file to the /upload folder
        let fstream = fs.createWriteStream(__dirname + '/upload/' + fileName);
        file.pipe(fstream);

        // when the file is done uploading, modify it
        fstream.on('close', function () {
            console.log("Upload Finished of " + filedata.filename);
            if (file.truncated) {
                res.statusCode = 400
                res.send("File size too big")
                return
            }
            const command = `ffmpeg -i "${__dirname + '/upload/' + fileName}" -y -af "asetrate=44100*${formData.pitch},aresample=44100,atempo=1/${formData.pitch}" "${__dirname + '/output/' + fileName}"`
            // excute the shell script to modify the audio (using ffmpeg)
            exec(command, (error, stdout, stderr) => {
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                }
                console.log(`stdout: ${stdout}`);

                // send the modified file to the user
                res.send({
                    file: '/output/' + fileName,
                    output: ['$ ' + command, stdout, stderr].join('\n')
                })
            });
        });
    });
});

// send the modified file to the user
app.get('/output/:file', (req, res) => {
    res.set('Cache-Control', 'no-store')
    res.sendFile(req.params.file, {root: path.join(__dirname, 'output')});
})

// start the server at port 3030
const server = app.listen(3030, function () {
    console.log('Listening on port %d', server.address().port);
});
