// This file is part of Invenio-RDM-Records
// Copyright (C) 2020-2023 CERN.
// Copyright (C) 2020-2022 Northwestern University.
//
// Invenio-RDM-Records is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import PropTypes from "prop-types";
import React, { Component, useState, useEffect } from "react";
import {
  ArrayField,
  FieldLabel,
  GroupField,
  SelectField,
  TextField,
} from "react-invenio-forms";
import { Button, Form, Grid, Icon } from "semantic-ui-react";
import { i18next } from "@translations/invenio_rdm_records/i18next";
// import { emptyIdentifier } from "./initialValues";
import { FieldArray, Field, useFormikContext } from "formik";

const emptyIdentifier = {
  scheme: "",
  identifier: "",
};

const emptyURL = {
  scheme: "url",
  identifier: "",
};


/** Identifiers array component */
export const IdentifiersField = ({
  fieldPath,
  label,
  labelIcon,
  required,
  schemeOptions,
  showEmptyValue=true,
  description,
  placeholder
  }) => {
    const { values, setFieldValue } = useFormikContext();
    const [identifiersLength, setIdentifiersLength] = useState(0);
    const [haveChangedNumber, setHaveChangedNumber] = useState(false);
    const addButtonLabel = i18next.t("Add identifier");

    useEffect(() => {
      if ( !!haveChangedNumber ) {
        if ( identifiersLength < 0 ) {
          document.getElementById(`${fieldPath}.add-url-button`)?.focus();
        } else {
          document.getElementById(`${fieldPath}.${identifiersLength}.identifier`)?.focus();
        }
      }
    }, [identifiersLength]);

    useEffect(() => {
      if ( values.metadata.identifiers.length < 1 ) {
        setFieldValue(fieldPath, [emptyURL]);
      }
    }, []);

    const handleAddNew = (arrayHelpers, newItem) => {
      setHaveChangedNumber(true);
      arrayHelpers.push(newItem);
      setIdentifiersLength(identifiersLength + 1);
    }

    const handleRemove = (arrayHelpers, index) => {
      setHaveChangedNumber(true);
      arrayHelpers.remove(index);
      setIdentifiersLength(identifiersLength - 1);
    }

    return (
      <FieldArray
        name={fieldPath}
        className="invenio-array-field"
        showEmptyValue={showEmptyValue}
        render={arrayHelpers => (
          <>

            {/* <Form.Field required={required}>
              <FieldLabel htmlFor={fieldPath} icon={labelIcon} label={label} />
            </Form.Field> */}

            {values.metadata.identifiers.map(({scheme, identifier}, index) => {
              const fieldPathPrefix = `${fieldPath}.${index}`;
              const isUrl = (scheme==='url');
              const hasText = (!!identifier || identifier!=="");
              const hasScheme = (!!scheme || scheme!=="");
              return(
                <Form.Group key={index} className="identifier-item-row">
              {/* <GroupField key={index} inline> */}
                    <TextField
                      fieldPath={`${fieldPathPrefix}.identifier`}
                      label={<label><Icon name={!isUrl ? labelIcon : "linkify"} />{i18next.t(!isUrl ? "Identifier" : "URL")}</label>}
                      required={!isUrl && hasScheme}
                      id={`${fieldPathPrefix}.identifier`}
                      width={!!isUrl ? 14 : 9}
                    />
                  {schemeOptions && !isUrl && (
                      <SelectField
                        fieldPath={`${fieldPathPrefix}.scheme`}
                        id={`${fieldPathPrefix}.scheme`}
                        label={i18next.t("Scheme")}
                        options={schemeOptions}
                        optimized
                        required={!isUrl && hasText}
                        width={5}
                      />
                  )}
                {!schemeOptions && (
                    <TextField
                      fieldPath={`${fieldPathPrefix}.scheme`}
                      id={`${fieldPathPrefix}.scheme`}
                      label={i18next.t("Scheme")}
                      required
                      width={5}
                    />
                )}
                <Form.Field
                  width={2}
                >
                  <Button
                    aria-label={i18next.t("Remove field")}
                    className="close-btn"
                    icon="close"
                    onClick={() => handleRemove(arrayHelpers, index)}
                  />
                </Form.Field>
                {description && (
                  <label className="helptext mb-0">{description}</label>
                )}
              </Form.Group>
            )})}
                <Button
                  type="button"
                  onClick={() => handleAddNew(arrayHelpers, emptyURL)}
                  icon
                  className="align-self-end"
                  labelPosition="left"
                  id={`${fieldPath}.add-url-button`}
                >
                  <Icon name="add" />
                  Add URL
                </Button>
                <Button
                  type="button"
                  onClick={() => handleAddNew(arrayHelpers, emptyIdentifier)}
                  icon
                  className="align-self-end"
                  labelPosition="left"
                  id={`${fieldPath}.add-id-button`}
                >
                  <Icon name="add" />
                  Add another identifier
                </Button>
          </>
        )}
      />
    )
}

IdentifiersField.propTypes = {
  fieldPath: PropTypes.string.isRequired,
  label: PropTypes.string,
  labelIcon: PropTypes.string,
  required: PropTypes.bool,
  schemeOptions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  showEmptyValue: PropTypes.bool,
};

IdentifiersField.defaultProps = {
  label: i18next.t("Identifiers"),
  labelIcon: "barcode",
  required: false,
  schemeOptions: undefined,
  showEmptyValue: false,
};
