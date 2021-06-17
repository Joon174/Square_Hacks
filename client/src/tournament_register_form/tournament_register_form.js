import React, { Component } from "react";
import BasicTextField from "../components/text_fields/basic_text_fields.jsx";
import MultilineTextField from "../components/text_fields/multiline_text_field.jsx";

class TournamentRegisterForm extends Component {
  state = {
    tags: ["Name of Tournament", "Age", "Sex"],
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            <h3>{"Name of tournament"}</h3>
            <BasicTextField text={"Enter name of tournament"} />
          </li>

          <li>
            <h3>{"Description"}</h3>
            <MultilineTextField text={"Enter description"} rows={4} />
          </li>

          <li>
            <h3>{"Prize money"}</h3>
            <BasicTextField text={"Enter prize money"} />
          </li>

          <li>
            <h3>{"Participation fee"}</h3>
            <BasicTextField text={"Enter participation fee"} />
          </li>

          <li>
            <h3>{"Ticket price"}</h3>
            <BasicTextField text={"Enter ticket price"} />
          </li>

          <li>
            <h3>{"Location"}</h3>
            <BasicTextField text={"Adress line 1"} />
            <BasicTextField text={"Adress line 2"} />
            <BasicTextField text={"Adress line 3"} />
          </li>
        </ul>

        <button type="submit">{"Submit"}</button>
      </div>
    );
  }
}

export default TournamentRegisterForm;
