// This file is part of Knowledge Commons Repository
// Copyright (C) 2023 MESH Research
//
// It is modified from files provided in InvenioRDM
// Copyright (C) 2021 CERN.
// Copyright (C) 2021 Graz University of Technology.
// Copyright (C) 2021 TU Wien
//
// Knowledge Commons Repository and Invenio RDM Records are both free software;
// you can redistribute them and/or modify them under the terms of the MIT
// License; see LICENSE file for more details.

import React, { useState, useEffect } from 'react';
import axios from "axios";
import _debounce from "lodash/debounce";
import PropTypes from "prop-types";
import {
  Header,
  Placeholder,
  Grid,
  Dropdown,
  Message
} from "semantic-ui-react";
import { withCancel } from "react-invenio-forms";
import { CopyButton } from "@js/invenio_app_rdm/components/CopyButton";
import { i18next } from "@translations/invenio_app_rdm/i18next";

/** Component for the citation section of the right sidebar.
 *
 * @param {object} props
 *
 * Expects the following props:
 * - record: record to display
 * - styles: list of citation styles
 * - defaultStyle: default citation style
 *
 * Renders a section with a dropdown to select the citation style
 * and the citation text.
 *
 * The citation text is generated by fetching the record's citation
 * from the REST API.
 */
const CitationSection = ({ record, citationStyles, citationStyleDefault }) => {
  const [ loading, setLoading ] = useState(true);
  const [ citation, setCitation ] = useState("");
  const [ error, setError ] = useState(null);

  useEffect(() => {
    getCitation(record, citationStyleDefault);
    return () => {
      cancellableFetchCitation.cancel();
    }
  }, []);

  const placeholderLoader = () => {
    return (
      <Placeholder>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    );
  };

  const errorMessage = (message) => {
    return <Message negative>{message}</Message>;
  };

  const fetchCitation = async (record, style) => {
    return await axios(
      `${record.links.self}?locale=${navigator.language}&style=${style}`,
      {
        headers: {
          Accept: "text/x-bibliography",
        },
      }
    );
  };

  const getCitation = async (record, style) => {
    setLoading(true);
    setCitation("");
    setError("");

    const cancellableFetchCitation = withCancel(fetchCitation(record, style));

    try {
      const response = await cancellableFetchCitation.promise;
      setLoading(false);
      setCitation(response.data);
    } catch (error) {
      if (error !== "UNMOUNTED") {
        setLoading(false);
        setCitation("");
        setError(i18next.t("An error occurred while generating the citation."));
      }
    }
  };

  const citationOptions = citationStyles.map((style) => {
    return {
      key: style[0],
      value: style[0],
      text: style[1],
    };
  });

  return (
    <div id="citation"
      className='sidebar-container'
      aria-label={i18next.t('Record citations')}
    >
      <h2 className="ui medium top attached header mt-0">{i18next.t('Citation')}</h2>
      <Grid className="segment rdm-sidebar record-citation ui segment rdm-sidebar bottom attached pr-0 pt-0">
        <Grid.Row verticalAlign="middle" className="relaxed">
          <Grid.Column
            mobile={8}
            tablet={8}
            computer={4}
            className="p-0"
            textAlign="right"
          >
            <label id="citation-style-label" className="mr-10">
              {i18next.t("Style")}
            </label>
            <Dropdown
              className="citation-dropdown"
              aria-labelledby="citation-style-label"
              defaultValue={citationStyleDefault}
              options={citationOptions}
              selection
              onChange={_debounce(
                (event, data) => getCitation(record, data.value),
                500
              )}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row verticalAlign="bottom">
          <Grid.Column computer={12} className="p-0">
            <div id="citation-text" className="wrap-overflowing-text">
              {loading ? placeholderLoader() : citation}
            </div>
          </Grid.Column>

          <Grid.Column computer={4} className="p-0" textAlign="right">
            <CopyButton text={citation} />
          </Grid.Column>
        </Grid.Row>

        {error ? errorMessage(error) : null}
      </Grid>

    </div>
  );
};


CitationSection.propTypes = {
  citationStyles: PropTypes.array.isRequired,
  record: PropTypes.object.isRequired,
  citationStyleDefault: PropTypes.string.isRequired,
};

export { CitationSection };
