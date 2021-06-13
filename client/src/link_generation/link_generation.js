/**
 *  Link Generator
 *  @brief Function to generate a unique QR code based on event sturcture and details defined by the business
 *  
 *  @author Joon You Tan  
 */

import React from 'react';
import QRcode from 'qrcode.react';

class LinkGenerator extends Component {
    constrcutor(form_prop) {
        super(form_prop);
        this.form = form_prop;

        // Create instance of callback to return link component 
        this.generate_link = this.generate_link.bind(this);
    }

    // Outputs a component from given Components / whatever data structure React uses.
    encode_params(input) {
        return input + 1;
    }

    static generate_link(form_prop) {

    }
}
