
// This file is part of Invenio-RDM-Records
// Copyright (C) 2020-2023 CERN.
// Copyright (C) 2020-2022 Northwestern University.
//
// Invenio-RDM-Records is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import React, { Component } from "react";

import { FieldLabel, Input } from "react-invenio-forms";
import { Divider, Grid } from "semantic-ui-react";

import PropTypes from "prop-types";

export class ImprintTitleField extends Component {
  render() {
    const {
      fieldPath, // injected by the custom field loader via the `field` config property
      title,
      label,
      description,
      placeholder,
      icon,
    } = this.props;
    return (
      <>
            <Input
              fieldPath={`${fieldPath}`}
              label={label}
              placeholder={placeholder}
            />
            {description && (
              <label className="helptext mb-0">{description}</label>
            )}
      </>
    );
  }
}

ImprintTitleField.propTypes = {
  fieldPath: PropTypes.string.isRequired,
  title: PropTypes.object.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string,
};

ImprintTitleField.defaultProps = {
  icon: undefined,
  label: undefined,
};
