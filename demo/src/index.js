// @flow

import React from "react";
import { render } from "react-dom";
import { Form, Field } from "form-for";

import User from "./User";

import { bindFieldComponents } from "../../src";
bindFieldComponents();

type State = {
  user: any
};

class Demo extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    const user = new User();
    user.name = "John";
    user.phone = "000 999-9999";
    user.email = "john@doe.com";
    user.favoriteColor = "#ffff00";

    this.state = { user: user };
  }

  handleChange = mutator => {
    this.setState({ user: mutator() });
  };

  render() {
    return (
      <div>
        <Form for={this.state.user} onChange={this.handleChange}>
          <div>
            Name: <Field name="name" autoFocus />
          </div>
          <div>
            Phone: <Field name="phone" />
          </div>
          <div>
            Email: <Field name="email" />
          </div>
          <div>
            Access: <Field name="access" />
          </div>
          <div>
            Favorite color: <Field name="favoriteColor" />
          </div>
          <div>
            Employment: <Field name="employment" />
          </div>

          <button>Submit</button>
        </Form>

        <pre>{JSON.stringify(this.state.user, null, 2)}</pre>
      </div>
    );
  }
}

render(<Demo />, window.document.querySelector("#demo"));
