import React from 'react';


class Contact extends React.Component {
  render() {
      const { theme } = this.props;
      return (
        <div>
        <h1>Contact</h1>
        <p>This is my contact information.</p>
      </div>
      );
  }
}

export default Contact;

/*
const Contact = () => (
  <div>
    <h1>Contact</h1>
    <p>This is my contact information.</p>
  </div>
);

export default Contact;
*/