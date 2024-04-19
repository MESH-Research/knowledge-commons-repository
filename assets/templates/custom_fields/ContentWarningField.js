import React, { useState } from "react";
import { i18next } from "@translations/invenio_rdm_records/i18next";
import { getIn, useFormikContext } from "formik";
import { Checkbox, Form, FormField } from "semantic-ui-react";
import { FieldLabel } from "react-invenio-forms";
import { TextArea } from "@js/invenio_modular_deposit_form/replacement_components/TextArea";

const ContentWarningField = ({
  fieldPath,
  label,
  icon,
  description = undefined,
  ...restProps
}) => {
  const { values, setFieldValue } = useFormikContext();
  const [haveWarning, setHaveWarning] = useState(!getIn(values, fieldPath, false));

  // useEffect(() => {
  //   // setFieldValue(fieldPath, { ai_used: false, ai_description: "" });
  // }, []);

  // useEffect(() => {
  //   // console.log('changed');
  //   handleValuesChange(values);
  //   // console.log(values.custom_fields);
  // }, [values]);

  return (
    <Form.Field id={fieldPath} name={fieldPath}>
      <FieldLabel htmlFor={fieldPath} icon={icon} label={label} />
      <Form.Group role="radiogroup" aria-labelledby="content-warning-toggle" className="inline">
        <label id="content-warning-toggle" className="invenio-field-label content-warning-toggle-label">{i18next.t("Do you want to add a content warning to this record?")}</label>
        <Checkbox
          radio
          label='Yes'
          name='content-warning-toggle-yes'
          onChange={(e, data) => setHaveWarning(data.checked)}
          checked={haveWarning}
        />
        <Checkbox
          radio
          label='No'
          name='content-warning-toggle-no'
          checked={!haveWarning}
          onChange={(e, data) => setHaveWarning(!data.checked)}
        />
      </Form.Group>
      {!!haveWarning && (
        <>
            <div id="content-warning-textbox-description" className="helptext">{description}</div>
            <TextArea
              fieldPath={fieldPath}
              // label={ai_description.label}
              description={""}
              required={false}
              placeholder="Enter content warning here."
              aria-describedby="content-warning-textbox-description"
            />
        </>
        )
      }
    </Form.Field>
  );
};

export default ContentWarningField;
