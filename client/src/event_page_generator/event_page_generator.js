/**
 *  EventPageGenerator
 *  @brief Class to generate new page(s) based on form information and unique hyperlink to Component.
 *  
 *  @author Joon You Tan  
 */

import React from "react";
import bracket_generator from ".bracket_generator"
import server_handler from ".server_handler"

// Data struct instance for the event generation page.
function FormStruct() {
    this.bracket_type = "";
    this.number_of_participants = 0;
    this.location = "";
    this,event_date = new Date();
    this.prize = [];
};


// EventPage Generator
class EventPageGenerator extends Component{
    constructor() {
        this.event_link = "";
        this.page_generated = false;

        // Create instance of callback to return link component 
        this.create_event_page = this.create_event_page.bind(this);
        this.form = FormStruct();
        this.bracket_generator = BracketGenerator();
        this.server_handler = ServerHandler("8.8.8.8");
    }

    // Sample form format and extract relevant information.
    get_form_params(form_prop) {
        var form_prop = param_struct;
        // TODO: Complete code.
        // for each parameter in the struct:
            // extract method based on relevant data type.
            // throw errors and default if any data type does not match or
            // is incompatible.
        return param_struct;
    }

    // Outputs an encoded string from given Components / whatever data structure React uses.
    encode_params(input) {
        // TODO: Complete code.
        // for each parameter that is extracted:
            // encode all params (except event_name) using serialise() [unless someone know another
            // way, my brain's too small atm for this]

        // return empty string and throw error if the parameters cannot be encoded...
        return input + 1;
    }

    // Create unique link for the event page based on form_prop:
    generate_link(form_prop) {
        // TODO: Complete code.
        // get the event_name and use it to form the end of the hyperlink,
        // then complete the rest of the hyperlink that way.

        // also somehow make sure that the page generated has symlink with said hyperlink :/
        return "";
    }

    // Main callback function to be used for any event generation
    create_event_page(form_prop) {
        // Construct the event page for said application and throw error
        // if page cannot be craeted.
        try {
            this.get_form_params(form_prop);
            this.bracket_generator.generate_bracket(this.form.bracket_type);
            this.page_generated = true;
        } catch {
            this.page_generated = false;
        } finally {
            this.encode_params(data_struct);
            this.event_link = this.generate_link();
        }
    }
}
