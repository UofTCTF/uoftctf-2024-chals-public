/*
* Copyright 2024 Aon plc
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>

#define PORT 9999
#define BUFFER_SIZE 1024

int main() {
    int sockfd, newsockfd;
    struct sockaddr_in server_addr, client_addr;
    socklen_t client_len;
    char buffer[BUFFER_SIZE];

    // Create socket
    sockfd = socket(AF_INET, SOCK_STREAM, 0);
    if (sockfd < 0) {
        perror("Error opening socket");
        exit(EXIT_FAILURE);
    }

    // Set up server address
    memset(&server_addr, 0, sizeof(server_addr));
    server_addr.sin_family = AF_INET;
    server_addr.sin_addr.s_addr = INADDR_ANY;
    server_addr.sin_port = htons(PORT);

    // Bind the socket to the server address
    if (bind(sockfd, (struct sockaddr *)&server_addr, sizeof(server_addr)) < 0) {
        perror("Error binding socket");
        close(sockfd);
        exit(EXIT_FAILURE);
    }

    // Listen for incoming connections
    if (listen(sockfd, 5) < 0) {
        perror("Error listening");
        close(sockfd);
        exit(EXIT_FAILURE);
    }

    printf("Listening on port %d...\n", PORT);

    while (1) {
        // Accept incoming connection
        client_len = sizeof(client_addr);
        newsockfd = accept(sockfd, (struct sockaddr *)&client_addr, &client_len);
        if (newsockfd < 0) {
            perror("Error accepting connection");
            close(sockfd);
            exit(EXIT_FAILURE);
        }

        // Display a prompt for the user to enter their name
        write(newsockfd, "Find the flag ", 14);

        // Read the name from the client
        int bytes_received = read(newsockfd, buffer, BUFFER_SIZE - 1);
        if (bytes_received < 0) {
            perror("Error reading from socket");
            close(newsockfd);
            continue;
        }

        // Null-terminate the received data
        buffer[bytes_received] = '\0';

        // Prepare the system command to echo the name
        char command[BUFFER_SIZE];
        snprintf(command, BUFFER_SIZE, "echo Hello, %s", buffer);

        // Execute the system command and get the output
        FILE* output = popen(command, "r");
        if (output == NULL) {
            perror("Error executing command");
            close(newsockfd);
            continue;
        }

        // Read the command output and send it back to the client
        while (fgets(buffer, BUFFER_SIZE, output) != NULL) {
            write(newsockfd, buffer, strlen(buffer));
        }

        // Close the output and new socket
        pclose(output);
        close(newsockfd);
    }

    // Close the main socket
    close(sockfd);

    return 0;
}

