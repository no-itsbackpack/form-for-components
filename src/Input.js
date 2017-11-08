// @flow

import * as React from "react";
import type { ComponentProps } from "form-for";

export type Props = {
  ref?: Function
} & ComponentProps;

export default class Input extends React.Component<Props> {
  input: ?HTMLInputElement;

  handleRef = (el: ?HTMLInputElement) => {
    this.input = el;

    if (this.props.ref) {
      this.props.ref(el);
    }
  };

  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount(this.input);
    }
  }

  render() {
    const { error, onMount, ...props } = { ...this.props };
    if (error) props["aria-invalid"] = true;

    return <input ref={this.handleRef} {...props} />;
  }
}
