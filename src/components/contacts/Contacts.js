import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";
class Contacts extends Component {
  render() {
    // const { contacts } = this.state;
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          // console.log(contacts);
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
