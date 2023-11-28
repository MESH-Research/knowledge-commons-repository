import React from "react";
import { Segment } from "semantic-ui-react";
import { CustomFieldSectionInjector } from "@js/invenio_modular_deposit_form/field_components/CustomFieldInjector";

const CommonsLegacyInfoComponent = ({ customFieldsUI }) => {
  return (
    <CustomFieldSectionInjector
      sectionName="Commons legacy info"
      idString="HCLegacyFields"
      customFieldsUI={customFieldsUI}
    />
  );
};

export { CommonsLegacyInfoComponent };
