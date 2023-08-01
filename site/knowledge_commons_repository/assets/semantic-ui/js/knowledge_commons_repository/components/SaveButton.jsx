// This file is part of Invenio-RDM-Records
// Copyright (C) 2020-2023 CERN.
// Copyright (C) 2020-2022 Northwestern University.
//
// Invenio-RDM-Records is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import { i18next } from "@translations/invenio_rdm_records/i18next";
import React, { useState, useContext } from "react";
import { connect } from "react-redux";
import { Button  } from "semantic-ui-react";
import {
  DepositFormSubmitActions,
  DepositFormSubmitContext,
} from "@js/invenio_rdm_records";
// import { DRAFT_SAVE_STARTED } from "../../state/types";
import { scrollTop } from "../utils";
// import { scrollTop } from "../../utils";
import _omit from "lodash/omit";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import { NoFilesModal } from "./NoFilesModal";

export const DRAFT_SAVE_STARTED = "DRAFT_SAVE_STARTED";

const SaveButtonComponent = ({ actionState=undefined,
                               handleConfirmNoFiles,
                               handleConfirmNeedsFiles,
                               sanitizeDataForSaving,
                               missingFiles,
                               hasFiles,
                               filesEnabled,
                               ...ui }) => {

  const { handleSubmit, isSubmitting } = useFormikContext();
  const { setSubmitContext } = useContext(DepositFormSubmitContext);
  const uiProps = _omit(ui, ["dispatch"]);
  const [ open, setOpen ] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleCancel = () => {
    if ( missingFiles ) {
        handleConfirmNeedsFiles();
    }
    setOpen(false);
  };

  const handleSave = (event) => {
    sanitizeDataForSaving().then(handleConfirmNoFiles()).then(() => {
        setSubmitContext(DepositFormSubmitActions.SAVE);
        handleSubmit(event);
        scrollTop();
        setOpen(false);
    });
  }

  return (
    <>
    <Button
      name="save"
      disabled={isSubmitting}
      onClick={missingFiles ? handleOpen : handleSave }
      icon="save"
      loading={isSubmitting && actionState === DRAFT_SAVE_STARTED}
      labelPosition="left"
      content={i18next.t("Save draft")}
      {...uiProps}
    />
    <NoFilesModal handleCancel={handleCancel}
        handlePositive={handleSave}
        open={open}
    />
    </>
  );
}

SaveButtonComponent.propTypes = {
  actionState: PropTypes.string,
};

const mapStateToProps = (state) => ({
  actionState: state.deposit.actionState,
});

export const SaveButton = connect(
  mapStateToProps,
  null
)(SaveButtonComponent);
