// This file is part of Invenio-RDM-Records
// Copyright (C) 2020-2023 CERN.
// Copyright (C) 2020-2022 Northwestern University.
//
// Invenio-RDM-Records is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@js/invenio_modular_deposit_form/replacement_components/TextField";

const JournalISSNField = ({
  fieldPath, // injected by the custom field loader via the `field` config property
  issn,
  icon,
  label,
  placeholder,
  description,
  ...extraProps
}) => {
  return (
    <>
      <TextField
        fieldPath={`${fieldPath}`}
        label={label}
        placeholder={placeholder}
        icon={icon}
        {...extraProps}
      />
      {description && <label className="helptext mb-0">{description}</label>}
    </>
  );
};

JournalISSNField.propTypes = {
  fieldPath: PropTypes.string.isRequired,
  issn: PropTypes.object,
  icon: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  description: PropTypes.string,
};

export { JournalISSNField };
