import React from "react";

class ContactInput extends React.Component {
    render() {
        return (
            <form className="contact-input">
                <input type="text" placeholder="Nama" />
                <input type="text" placeholder="Tag" />
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default ContactInput;