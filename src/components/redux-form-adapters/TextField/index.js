import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Input, Form, Label } from 'semantic-ui-react';

class TextField extends Component {
  static propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number,
  };

  static defaultProps = {
    label: null,
    placeholder: null,
    disabled: false,
    min: null,
    max: null,
  };

  render() {
    const {
      input,
      label,
      type,
      placeholder,
      disabled,
      min,
      max,
      meta: { touched, error },
    } = this.props;

    if (!('id' in input)) {
      input.id = `id_${input.name}`;
    }

    return (
      <Form.Field error={Boolean(touched && error)}>
        {label &&
          <label htmlFor={input.id}>{label}</label>
        }

        <Input
          {...input}
          disabled={disabled}
          type={type}
          min={min}
          max={max}
          placeholder={placeholder}
          labelPosition="right corner"
        />

        {touched && error &&
          <Label
            color={'red'}
            pointing
          >
            {error}
          </Label>
        }
      </Form.Field>
    );
  }
}

export default TextField;
