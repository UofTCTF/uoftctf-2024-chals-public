### Illusion

Category: **Forensics**

Description: "Good Luck."

We are given a packet capture file, lets open it in wireshark and see what we are working with.

Instantly we see a lot of clear-text "HTTP" traffic, we can filter by that by just typing in "http" in the filter bar on wireshark.

There seems to be a lot of connections made to a rogue ip of "52.15.122.56"

Following TCP streams doesent yield us much, but if we see the "Info" rows there seems to be constant *GET* requests to "/images?guid*"

Another big thing to note here, is the constant base64 encoded strings in the "oldcss=" tag. Once you have two of those things you can now do some searching on google for what it can be. If you struct a google query properly, you will stumble upon a C2 repository called "Trevor C2".

Since this repo is open source you can view the source code of the actual C2 and quickly verify that the way this c2 behaves is exactly what you see in the pcap.

To give a quick tldr; This speciifc Command and Control framework uses HTTP Covert channels to be stealthy. Something you cant catch easily.


``https://github.com/trustedsec/trevorc2/blob/master/trevorc2_server.py``

Lets inspect this part of the source code.


```py
SITE_PATH_QUERY = ("/images")

# THIS IS THE QUERY STRING PARAMETER USED
QUERY_STRING = ("guid=")

# THIS IS THE NAME USED IN THE COOKIE FOR THE COMMUNICATION SESSIONID
COOKIE_SESSIONID_STRING = ("sessionid")

# THIS IS THE LENGTH OF THE COMMUNICATION SESSIONID
COOKIE_SESSIONID_LENGTH = (15)

# STUB FOR DATA - THIS IS USED TO SLIP DATA INTO THE SITE, WANT TO CHANGE THIS SO ITS NOT STATIC
STUB = ("oldcss=")

# Turn to True for SSL support
SSL = False
CERT_FILE = ("")  # Your Certificate for SSL

# THIS IS OUR ENCRYPTION KEY - THIS NEEDS TO BE THE SAME ON BOTH SERVER AND CLIENT FOR APPROPRIATE DECRYPTION. RECOMMEND CHANGING THIS FROM THE DEFAULT KEY
CIPHER = ("Tr3v0rC2R0x@nd1s@w350m3#TrevorForget")
```

It would be nearly impossible to solve this challenge if i changed the cipher key. So we could only assume I used the standart configs for this c2.

From here we can write a decryption script to decrypt all the strings we found in `oldcss` tag.

```pwsh
$CIPHER = "Tr3v0rC2R0x@nd1s@w350m3#TrevorForget"

function Create-AesManagedObject($key, $IV) {
    $aesManaged = New-Object "System.Security.Cryptography.AesManaged"
    $aesManaged.Mode = [System.Security.Cryptography.CipherMode]::CBC
    $aesManaged.Padding = [System.Security.Cryptography.PaddingMode]::PKCS7
    $aesManaged.BlockSize = 128
    $aesManaged.KeySize = 256
    if ($IV) {
        if ($IV.getType().Name -eq "String") {
            $aesManaged.IV = [System.Convert]::FromBase64String($IV)
        }
        else {
            $aesManaged.IV = $IV
        }
    }
    if ($key) {
        if ($key.getType().Name -eq "String") {
            $aesManaged.Key = [System.Convert]::FromBase64String($key)
        }
        else {
            $aesManaged.Key = $key
        }
    }
    $aesManaged
}
function Create-AesKey() {
    $aesManaged = Create-AesManagedObject
    $hasher = New-Object System.Security.Cryptography.SHA256Managed
    $toHash = [System.Text.Encoding]::UTF8.GetBytes($CIPHER)
    $hashBytes = $hasher.ComputeHash($toHash)
    $final = [System.Convert]::ToBase64String($hashBytes)
    return $final
}
function Encrypt-String($key, $unencryptedString) {
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($unencryptedString)
    $aesManaged = Create-AesManagedObject $key
    $encryptor = $aesManaged.CreateEncryptor()
    $encryptedData = $encryptor.TransformFinalBlock($bytes, 0, $bytes.Length);
    $fullData = $aesManaged.IV + $encryptedData
    [System.Convert]::ToBase64String($fullData)
}
function Decrypt-String($key, $encryptedStringWithIV) {
    $bytes = [System.Convert]::FromBase64String($encryptedStringWithIV)
    $IV = $bytes[0..15]
    $aesManaged = Create-AesManagedObject $key $IV
    $decryptor = $aesManaged.CreateDecryptor();
    $unencryptedData = $decryptor.TransformFinalBlock($bytes, 16, $bytes.Length - 16);
    [System.Text.Encoding]::UTF8.GetString($unencryptedData).Trim([char]0)
}



$ENCRYPTED = 'C9XqWpYeqCIn8Dk8gCVtpdg47vm8e8peFqkfQJ6WVbUvL7ucvQ0ayWnKRBF2GI+ltFBWNMa+wawqeuvFK61RGvKVWogAqAVg4J7qmScn+HRF0QZFgEunXlAduM+16nnf'
$key = Create-AesKey
$DECRYPTED = Decrypt-String $key $ENCRYPTED
Write-Output $ENCRYPTED
Write-Output $DECRYPTED
```

One certain packet stream will contain that $ENCRYPTED string, it will also be the biggest packet size. So its only logical to use that.

Once we run this script, we should get this command. `echo "uoftctf{Tr3V0r_C2_1s_H4rd_T0_D3t3c7}" > flag.txt`

**uoftctf{Tr3V0r_C2_1s_H4rd_T0_D3t3c7}**
