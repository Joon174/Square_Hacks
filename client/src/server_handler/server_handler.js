/**
 *  ServerHandler
 *  @brief Class to generate React Components for tournament brackets. Scope will be limited to the two brakcets in the class
 *  
 *  @author Joon You Tan  
 */

// Will generate a HTML component for the bracket specified.
class ServerHandler {
    constructor(ip_address){
        this.ip_address = ip_address;
        this.information = [];
    }

    send_request(command) {
        // TODO: Implement Logic
        // Sends a request to the backend server and returns the relevant information
    }

    recv_request(command) {
        // TODO: Implement Logic
        // Sends relevant data to the backend server based on the command given:
    }
}