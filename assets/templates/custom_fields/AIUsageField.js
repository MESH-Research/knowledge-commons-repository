import React, { useContext, useEffect } from "react";
import { i18next } from "@translations/invenio_rdm_records/i18next";
import { getIn, useFormikContext } from "formik";
import { Form } from "semantic-ui-react";
import { BooleanCheckbox, FieldLabel } from "react-invenio-forms";
import { TextArea } from "@js/invenio_modular_deposit_form/replacement_components/TextArea";
import PropTypes from "prop-types";

const AIUsageField = ({
  fieldPath,
  label,
  icon,
  description,
  ai_used,
  ai_description,
  ...restProps
}) => {
  const { values, setFieldValue } = useFormikContext();

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
      <BooleanCheckbox
        fieldPath={`${fieldPath}.ai_used`}
        // label="Did generative AI contribute to the production of this work?"
        label={ai_used.description}
        trueLabel="Yes"
        falseLabel="No"
        // icon={ai_used.icon}
        required={false}
        description=""
        // value={values.custom_fields?.["kcr:ai_usage"]?.ai_used}
        value={getIn(values, `${fieldPath}.ai_used`, false)}
        initialValue={getIn(values, `${fieldPath}.ai_used`, false)}
      />
      {!!values.custom_fields
        ? values.custom_fields["kcr:ai_usage"]?.ai_used === true && (
          <>
            <div id="ai-usage-textbox-description" className="helptext">
              {ai_description.description || i18next.t(
                "Please provide a brief description of how generative AI contributed to the production of this work."
              )}
            </div>
            <TextArea
              fieldPath={`${fieldPath}.ai_description`}
              // label={ai_description.label}
              description={""}
              required={false}
              aria-describedby="ai-usage-textbox-description"
            />
          </>
          )
        : ""}
    </Form.Field>
  );
};

AIUsageField.propTypes = {
  fieldPath: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.string,
  description: PropTypes.string,
  ai_used: PropTypes.object,
  ai_description: PropTypes.object,
};

export default AIUsageField;
