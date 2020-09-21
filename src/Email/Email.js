import { render } from "@testing-library/react";
import React, { Component } from "react";

export default class Email extends React.Component {
  render() {
    return (
      <div>
        <form class="signup-form">
          <h3>Sign up to receive our newsletter!</h3>
          <div>
            <label for="first-name">First name</label>
            <input
              placeholder="First Name"
              type="text"
              name="first-name"
              id="first-name"
            />
          </div>
          <div>
            <label for="last-name">Last name</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label for="username">Email</label>
            <input type="text" name="username" id="username" />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}
