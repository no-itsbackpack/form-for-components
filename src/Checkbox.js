// @flow

import * as React from "react";
import type { ComponentProps } from "form-for";

export type Props = {
  checked?: boolean,
  defaultChecked?: boolean,
  ref?: Function
} & ComponentProps;

export default class Checkbox extends React.Component<Props> {
  input: ?HTMLInputElement;

  buildValueProps() {
    if (typeof this.props.checked === "undefined" && typeof this.props.value !== "undefined") {
      return { checked: !!this.props.value };
    }

    if (typeof this.props.defaultChecked === "undefined") {
      this.props.defaultChecked = !!this.props.defaultValue;
    }

    return {};
  }

  buildEventHandlers() {
    const onFocus = this.props.onFocus ? this.handleFocus : undefined;
    const onChange = this.props.onChange ? this.handleChange : undefined;
    const onBlur = this.props.onBlur ? this.handleBlur : undefined;

    return { onFocus, onChange, onBlur };
  }

  handleRef = (el: ?HTMLInputElement) => {
    this.input = el;

    if (this.props.ref) {
      this.props.ref(el);
    }
  };

  handleFocus = (event: any) => {
    // $FlowFixMe
    this.props.onFocus(event, { value: event.target.checked });
  };

  handleChange = (event: any) => {
    // $FlowFixMe
    this.props.onChange(event, { value: event.target.checked });
  };

  handleBlur = (event: any) => {
    // $FlowFixMe
    this.props.onBlur(event, { value: event.target.checked });
  };

  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount(this.input, { value: (this.input || {}).checked });
    }
  }

  render() {
    const { defaultValue, value, error, onMount, ...props } = { ...this.props };
    if (error) props['aria-invalid'] = true;

    return (
      <input
        ref={this.handleRef}
        {...this.buildValueProps()}
        {...props}
        {...this.buildEventHandlers()}
        type="checkbox"
      />
    );
  }
}
