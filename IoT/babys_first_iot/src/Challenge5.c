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
#include <pthread.h>

// gcc -o Challenge4 Challenge4.c -pthread

void* handleClient(void* client_socket_ptr) {
    int client_socket = *((int*)client_socket_ptr);
    char receivedData[50]; // Assuming the maximum size of received data is 50 characters

    // Send the initial message to the client
    char initialMessage[] = "Enter the command you would use to set the environment variables in U-Boot to boot the system and give you a shell using /bin/sh: ";
    send(client_socket, initialMessage, strlen(initialMessage), 0);

    // Receive data from the client
    recv(client_socket, receivedData, sizeof(receivedData), 0);

    // Check if receivedData matches the secret string
    if (strcmp(receivedData, "setenv bootargs=${bootargs} init=/bin/sh\n") == 0) {
        char successMessage[] = "Access granted! The Flag is {Uboot_Hacking}!";
        send(client_socket, successMessage, strlen(successMessage), 0);
    } else {
        char failureMessage[] = "Access denied. Try again.";
        send(client_socket, failureMessage, strlen(failureMessage), 0);
    }

    // Close the client socket
    close(client_socket);
    free(client_socket_ptr);
    return NULL;
}

int main() {
    int server_socket, client_socket;
    struct sockaddr_in server_addr, client_addr;
    socklen_t addr_len = sizeof(client_addr);
    pthread_t thread_id;

    // Create socket
    server_socket = socket(AF_INET, SOCK_STREAM, 0);
    if (server_socket == -1) {
        perror("Socket creation failed");
        exit(EXIT_FAILURE);
    }

    // Set up server address struct
    server_addr.sin_family = AF_INET;
    server_addr.sin_port = htons(9123);
    server_addr.sin_addr.s_addr = INADDR_ANY;

    // Bind the socket to the specified port
    if (bind(server_socket, (struct sockaddr*)&server_addr, sizeof(server_addr)) == -1) {
        perror("Binding failed");
        close(server_socket);
        exit(EXIT_FAILURE);
    }

    // Listen for incoming connections
    if (listen(server_socket, 5) == -1) {
        perror("Listening failed");
        close(server_socket);
        exit(EXIT_FAILURE);
    }

    printf("Server listening on port 9123...\n");

    // Accept incoming connections and handle each client in a separate thread
    while (1) {
        client_socket = accept(server_socket, (struct sockaddr*)&client_addr, &addr_len);
        if (client_socket == -1) {
            perror("Accepting connection failed");
            close(server_socket);
            exit(EXIT_FAILURE);
        }

        // Create a new socket descriptor for the thread
        int* client_socket_ptr = (int*)malloc(sizeof(int));
        *client_socket_ptr = client_socket;

        // Create a new thread to handle the client
        if (pthread_create(&thread_id, NULL, handleClient, (void*)client_socket_ptr) != 0) {
            perror("Thread creation failed");
            close(client_socket);
            free(client_socket_ptr);
            continue;
        }

        // Detach the thread to allow it to run independently
        pthread_detach(thread_id);
    }

    // Close the server socket (this part of the code will not be reached in this example)
    close(server_socket);

    return 0;
}
