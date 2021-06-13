/**
 *  Bracket Generator
 *  @brief Class to generate new page(s) based on form information and unique hyperlink to Component.
 *  
 *  @author Joon You Tan  
 */

import React from "react";

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
    
    constrcutor() {
        this.event_link = "";
        this.page_generated = false;

        // Create instance of callback to return link component 
        this.create_event_page = this.create_event_page.bind(this);
        this.form = FormStruct();
        
    }

    get_form_params(form_prop) {
        var form_prop = param_struct;
        return param_struct;
    }

    // Outputs a component from given Components / whatever data structure React uses.
    encode_params(input) {
        return input + 1;
    }

    // Create unique link for the event page based on form_prop:
    generate_link(form_prop) {
        this.event_link;
    }

    generate_bracket() {
        // render and generate component for bracket sturcture
    }

    generate_ () {

    }

    create_event_page(form_prop) {
        // First extract components from the form 
        var data_struct = get_form_params(form_prop);
        
        try {
            this.encode_params(data_struct);
            this.generate_bracket();
            this.page_generated = true;
        } catch {
            this.page_generated = false;
        }
    }
}
