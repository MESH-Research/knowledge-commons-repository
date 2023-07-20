// Part of the Knowledge Commons Repository
// Copyright (C) 2023 MESH Research
//
// based on portions of InvenioRDM
// Copyright (C) 2020-2022 CERN.
// Copyright (C) 2020-2022 Northwestern University.
// Copyright (C) 2021-2022 Graz University of Technology.
// Copyright (C) 2022-2023 KTH Royal Institute of Technology.
//
// The Knowledge Commons Repository and Invenio App RDM are both free software;
// you can redistribute them and/or modify them
// under the terms of the MIT License; see LICENSE file for more details.

import React, { createContext, useContext, useEffect,
                useLayoutEffect, useRef,
                useState } from "react";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import { i18next } from "@translations/invenio_app_rdm/i18next";
import { FieldLabel } from "react-invenio-forms";
import {
  AccessRightField,
  DescriptionsField,
  CreatibutorsField,
  DeleteButton,
  DepositFormApp,
  DepositStatusBox,
  FileUploader,
  FormFeedback,
  IdentifiersField,
  PreviewButton,
  LanguagesField,
  LicenseField,
  PublicationDateField,
  PublishButton,
  PublisherField,
  ReferencesField,
  RelatedWorksField,
  SubjectsField,
  TitlesField,
  VersionField,
  CommunityHeader,
  SaveButton,
} from "@js/invenio_rdm_records";
import { FundingField } from "@js/invenio_vocabularies";
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Icon,
  Ref,
  Step,
  Sticky,
  Transition
} from "semantic-ui-react";
import PropTypes, { object } from "prop-types";
import Overridable from "react-overridable";
import ResourceTypeField from "../metadata_fields/ResourceTypeField";
import { PIDField } from "../metadata_fields/PIDField";
import { DatesField } from "../metadata_fields/DatesField";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { CustomFieldInjector,
         CustomFieldSectionInjector,
         AbstractComponent,
         AdditionalDatesComponent,
         AdditionalDescriptionComponent,
         AdditionalTitlesComponent,
         AIComponent,
         AlternateIdentifiersComponent,
         BookTitleComponent,
         CommunitiesComponent,
         ContentWarningComponent,
         ContributorsComponent,
         CreatorsComponent,
         DateComponent,
         DoiComponent,
         FilesUploadComponent,
         FundingComponent,
         KeywordsComponent,
         LanguagesComponent,
         LicensesComponent,
         MetadataOnlyComponent,
         PreviouslyPublishedComponent,
         PublisherDoiComponent,
         PublisherComponent,
         PublicationLocationComponent,
         ReferencesComponent,
         RelatedWorksComponent,
         ResourceTypeComponent,
         SubjectsComponent,
         SubtitleComponent,
         TitleComponent,
         TotalPagesComponent,
         SeriesComponent,
         VolumeComponent,
         VersionComponent
          } from "./field_components";
import {AccessRightsComponent,
        AdminMetadataComponent,
        BookDetailComponent,
        BookVolumePagesComponent,
        CombinedDatesComponent,
        CombinedTitlesComponent,
        DeleteComponent,
        PublicationDetailsComponent,
        SubjectKeywordsComponent,
        SubmissionComponent,
        SubmitActionsComponent,
        TypeTitleComponent,
} from "./compound_field_components";
import { useFormikContext } from "formik";


// React Context to track the current form values.
// Will contain the Formik values object passed up from a
// form field.
const FormValuesContext = createContext();

const fieldComponents = {
    abstract: [AbstractComponent,
      ['metadata.description']],
    additional_dates: [AdditionalDatesComponent,
      ['metadata.dates']],
    additional_description: [AdditionalDescriptionComponent,
      ['metadata.additional_descriptions']],
    additional_titles: [AdditionalTitlesComponent,
      ['metadata.additional_titles']],
    ai: [AIComponent,
      ['custom_fields.kcr:ai_usage']],
    alternate_identifiers: [AlternateIdentifiersComponent,
      ['metadata.identifiers']],
    communities: [CommunitiesComponent,
      []],
    content_warning: [ContentWarningComponent,
      ['custom_fields.kcr:content_warning']],
    contributors: [ContributorsComponent,
      ['metadata.contributors']],
    creators: [CreatorsComponent,
      ['metadata.creators']],
    date: [DateComponent,
      ['metadata.publication_date']],
    doi: [DoiComponent,
      ['pids.doi']],
    funding: [FundingComponent,
      ['metadata.funding']],
    isbn: [null,
      ['custom_fields.imprint:imprint.isbn']],
    file_upload: [FilesUploadComponent,
      ['files']],
    keywords: [KeywordsComponent,
      ['custom_fields.kcr:user_defined_tags']],
    language: [LanguagesComponent,
      ['metadata.languages']],
    licenses: [LicensesComponent,
      ['metadata.rights']],
    metadata_only: [MetadataOnlyComponent,
      ['access.status']],
    previously_published: [PreviouslyPublishedComponent,
      []],
    publisher: [PublisherComponent,
      ['metadata.publisher']],
    publication_location: [PublicationLocationComponent,
      ['custom_fields.imprint:imprint.place']],
    related_works: [RelatedWorksComponent,
      ['metadata.related_identifiers']],
    resource_type: [ResourceTypeComponent,
      ['metadata.resource_type']],
    series: [SeriesComponent,
      ['custom_fields.kcr:book_series']],
    subjects: [SubjectsComponent,
      ['metadata.subjects']],
    subtitle: [SubtitleComponent,
      ['metadata.additional_titles']],
    title: [TitleComponent,
      ['metadata.title']],
    total_pages: [TotalPagesComponent,
      ['custom_fields.imprint:imprint.pages']],
    volume: [VolumeComponent,
      ['custom_fields.kcr:volumes']],
    version: [VersionComponent,
      ['metadata.version']],
    // below are composite field components
    access_rights: [AccessRightsComponent,
      ['access']],
    admin_metadata: [AdminMetadataComponent,
      []],
    book_detail: [BookDetailComponent,
      ['custom_fields.imprint:imprint.isbn', 'metadata.version',
       'metadata.publisher', 'custom_fields.kcr:volume',
       'custom_fields.imprint:imprint.pages', 'custom_fields.kcr:book_series']],
    book_volume_pages: [BookVolumePagesComponent,
      ['custom_fields.kcr:volume', 'custom_fields.imprint:imprint.pages']],
    combined_titles: [CombinedTitlesComponent,
      ['metadata.title', 'metadata.additional_titles']],
    combined_dates: [CombinedDatesComponent,
      ['metadata.publication_date', 'metadata.dates']],
    delete: [DeleteComponent,
      []],
    publication_detail: [PublicationDetailsComponent,
      ['custom_fields.imprint:imprint.isbn', 'metadata.version',
       'metadata.publisher', 'custom_fields.imprint:imprint.place']],
    subjects_keywords: [SubjectKeywordsComponent,
      ['metadata.subjects', 'custom_fields.kcr:user_defined_tags']],
    submission: [SubmissionComponent,
      []],
    submit_actions: [SubmitActionsComponent,
      ['access']],
    type_title: [TypeTitleComponent,
      ['metadata.title', 'metadata.resource_type']],
}

const FormPage = ({ children, id, pageNums,
                    currentFormPage, handleFormPageChange
                  }) => {

  const { values, errors, setFieldValue, initialValues } = useFormikContext();
  // console.log('atop formPage...')
  // console.log(values);
  // console.log(errors);
  const { currentValues, handleValuesChange,
          currentErrors, handleErrorsChange } = useContext(FormValuesContext);
  const currentPageIndex = pageNums.indexOf(currentFormPage);
  const nextPageIndex = currentPageIndex + 1;
  const previousPageIndex = currentPageIndex - 1;
  const nextPage = nextPageIndex < pageNums.length ? pageNums[nextPageIndex] : null;
  const previousPage = previousPageIndex >= 0 ? pageNums[previousPageIndex] : null;
  const buttonBarRef = useRef(null);

  //pass values up from Formik context to main form context
  useEffect(() => {
    if ( !!currentValues &&
      currentValues.metadata?.resource_type !== values.metadata.resource_type ) {
      handleValuesChange(values);
    }
  }, [values]
  );

  //pass errors up from Formik context to main form context
  useEffect(() => {
    if ( currentErrors !== errors ) {
      handleErrorsChange(errors);
    }
  }, [errors]
  );

  return(
    <div className="formPageWrapper" id={id} ref={buttonBarRef}>
    {/* // <Card fluid
    //   id={id}
    // >
    //   <Card.Content> */}
      <DndProvider backend={HTML5Backend}
        // options={{ rootElement: rootElement}}
      >
        {children}
        <Sticky context={buttonBarRef}
          pushing
          bottomOffset={50}
          attached="bottom"
        >
          <Container width={16}>
          {!!previousPage &&
          <Button primary
            type="button"
            content={"Back"}
            floated="left"
            onClick={handleFormPageChange}
            value={previousPage}
          />}
          {!!nextPage &&
          <Button primary
            type="button"
            content={"Continue"}
            floated="right"
            onClick={handleFormPageChange}
            value={nextPage}
          />}
        </Container>
        </Sticky>
      </DndProvider>
      {/* </Card.Content>
    </Card> */}
    </div>
  )
}

export const RDMDepositForm = ({ config, files, record, permissions, preselectedCommunity}) => {
    config = config || {};
    const [currentFormPage, setCurrentFormPage] = useState("1");
    const [currentValues, setCurrentValues] = useState({});
    const [currentErrors, setCurrentErrors] = useState({});
    const [pagesWithErrors, setPagesWithErrors] = useState([]);
    const [currentResourceType, setCurrentResourceType] = useState('textDocument-journalArticle');
    const [currentTypeExtraFields, setCurrentTypeExtraFields] = useState(config.fields_config.extras_by_type[currentResourceType]);
    const formPages = {
      '1': 'Title',
      '2': 'People',
      '3': 'Subjects',
      '4': 'Details',
      '5': 'Files',
      // '6' ,'
      '7': 'Submit',
    }
    const customFieldsUI = config.custom_fields.ui;

    const setFormPageInHistory = (value) => {
      if ( value === undefined ) {
        value = currentFormPage;
      }
      let urlParams = new URLSearchParams(window.location.search);
      if ( !urlParams.has('depositFormPage') ) {
        urlParams.append('depositFormPage', value);
      } else if ( !urlParams.depositFormPage !== value) {
        urlParams.set("depositFormPage", value);
      }
      const currentBaseURL = window.location.origin;
      const currentPath = window.location.pathname;
      const currentParams = urlParams.toString();
      const newCurrentURL = `${currentBaseURL}${currentPath}?${currentParams}`;
      window.history.pushState('fake-route', document.title, newCurrentURL);
    }

    const handleFormPageParam = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const urlFormPage = urlParams.get('depositFormPage');
      if ( !!urlFormPage ) {
        setCurrentFormPage(urlFormPage);
      }
      return urlFormPage;
    }

    useEffect(() => {
      const startingParam = handleFormPageParam();
      // Add a fake history event so that the back button does nothing if pressed once
      setFormPageInHistory(startingParam);
      // window.history.pushState('fake-route', document.title, window.history.href);
      window.addEventListener('popstate', handleFormPageParam);

      // // Here is the cleanup when this component unmounts
      return () => {
        window.removeEventListener('popstate', handleFormPageParam);
        // If we left without using the back button, aka by using a button on the page, we need to clear out that fake history event
        if (window.history.state === 'fake-route') {
          window.history.back();
        }
      }
    }, []);

    let formFeedbackRef = useRef(0);
    let sidebarRef = useRef(0);

    // TODO: Make ALL vocabulary be generated by backend.
    // Currently, some vocabulary is generated by backend and some is
    // generated by frontend here. Iteration is faster and abstractions can be
    // discovered by generating vocabulary here. Once happy with vocabularies,
    // then we can generate it in the backend.
    const vocabularies = {
      metadata: {
        ...config.vocabularies,

        creators: {
          ...config.vocabularies.creators,
          type: [
            { text: "Person", value: "personal" },
            { text: "Organization", value: "organizational" },
          ],
        },

        contributors: {
          ...config.vocabularies.contributors,
          type: [
            { text: "Person", value: "personal" },
            { text: "Organization", value: "organizational" },
          ],
        },
        identifiers: {
          ...config.vocabularies.identifiers,
        },
      },
    };

    // check if files are present
    let noFiles = false;
    if (
      !Array.isArray(files.entries) ||
      (!files.entries.length && record.is_published)
    ) {
      noFiles = true;
    }

    useLayoutEffect(() => {
      const newPageWrapper = document.getElementById(`InvenioAppRdm.Deposit.FormPage${currentFormPage}`);
      const newFirstInput = newPageWrapper.querySelectorAll('button, input')[0];
      newFirstInput.focus();
    }, [currentFormPage]
    );

    const handleFormPageChange = (event, { value }) => {
      setCurrentFormPage(value);
      setFormPageInHistory(value);
    };

    const handleValuesChange= (values) => {
      setCurrentValues(values);
      localStorage.setItem('depositFormValues', JSON.stringify(values));
      setCurrentResourceType(values.metadata.resource_type);
      setCurrentTypeExtraFields(config.fields_config.extras_by_type[values.metadata.resource_type]);
    }

    function flattenKeysDotJoined(val) {
      const keysArray = Object.keys(val);
      let newArray = []
      for ( let i=0; i<keysArray.length; i++ ) {
        const myValue = val[keysArray[i]];
        if ( typeof(myValue) === "object" &&
            !Array.isArray(myValue) && myValue !== null
        ) {
          const childKeys = flattenKeysDotJoined(val[keysArray[i]]).map(
            (k) => `${keysArray[i]}.${k}`
          );
          newArray = newArray.concat(childKeys);
        } else {
          newArray.push(keysArray[i]);
        }
      }
      return newArray;
    }
    const handleErrorsChange = (errors) => {
      if ( errors !== {} ) {
        setCurrentErrors(errors);
        let errorPages = [];
        // for each page...
        for ( let p of Object.keys(formPages) ) {
          // collect form widget slugs
          let pageFields = config.fields_config.common_fields[p];
          if ( !!currentTypeExtraFields[p] ) {
            pageFields = pageFields.concat(currentTypeExtraFields[p]);
          }
          if ( pageFields.length == 1 ) {
            pageFields = [pageFields];
          }
          // get form field label for each slug
          let pageMetaFields = pageFields.reduce((accum, curr) =>
            {accum = accum.concat(fieldComponents[curr][1]); return accum},
          []);
          // get form field labels for current errors
          const errorFields = flattenKeysDotJoined(errors);
          // add page to error pages if the two lists overlap
          if ( pageMetaFields.some(item => errorFields.includes(item)) ) {
            errorPages.push(p);
          }
        }
        setPagesWithErrors(errorPages);
      }
    }

    return (
      <FormValuesContext.Provider
        value={{ currentValues, handleValuesChange,
                 currentErrors, handleErrorsChange }}
      >
      <DepositFormApp
        config={config}
        record={record}
        preselectedCommunity={preselectedCommunity}
        files={files}
        permissions={permissions}
      >
        <Overridable
          id="InvenioAppRdm.Deposit.FormFeedback.container"
          labels={config.custom_fields.error_labels}
          fieldPath="message"
        >
          <FormFeedback
            fieldPath="message"
            labels={config.custom_fields.error_labels}
          />
        </Overridable>

        <Container id="rdm-deposit-form" className="rel-mt-1">
          <Grid className="mt-25">
            <Grid.Column mobile={16} tablet={16} computer={16}>
              <h2>
                {record.id !== null ? "Updating " : "New "}
                {record.status === "draft" ? "Draft " : "Published "}Deposit
              </h2>
              <Step.Group
                widths={formPages.length}
                className="upload-form-pager"
                fluid={true}
                // ordered={true}
                size={"small"}
              >
                {Object.keys(formPages).map((pageNum, index) => (
                  <Step
                    key={index}
                    as={Button}
                    active={currentFormPage === pageNum}
                    // icon='truck'
                    link
                    onClick={handleFormPageChange}
                    value={pageNum}
                    formnovalidate
                    className={`ui button upload-form-stepper-step page-${pageNum}
                     ${pagesWithErrors.includes(pageNum) ? "has-error" : ""}`}
                    // description='Choose your shipping options'
                    type="button"
                  >
                    {/* <Icon name='truck' /> */}
                    <Step.Content>
                      <Step.Title>{formPages[pageNum]}</Step.Title>
                      {/* <Step.Description>Choose your shipping options</Step.Description> */}
                    </Step.Content>
                  </Step>
                ))}
              </Step.Group>

              <Transition.Group
                animation="fade"
                duration={{show: 1000, hide: 20}}
              >
                {Object.keys(formPages).map((pageNum, index) => (
                  currentFormPage===pageNum && (
                    <div key={index}>
                      <FormPage
                        id={`InvenioAppRdm.Deposit.FormPage${pageNum}`}
                        pageNums={Object.keys(formPages)}
                        currentFormPage={pageNum}
                        handleFormPageChange={handleFormPageChange}
                        currentResourceType={currentResourceType}
                      >
                          {!!currentResourceType &&
                           !!currentTypeExtraFields[pageNum] ?
                           currentTypeExtraFields[pageNum].map((component_label, index) => {
                            const MyField = fieldComponents[component_label][0]
                            return (<MyField
                              key={index}
                              config={config}
                              noFiles={noFiles}
                              record={record}
                              vocabularies={vocabularies}
                              permissions={permissions}
                              // accordionStyle={accordionStyle}
                              customFieldsUI={customFieldsUI}
                              currentResourceType={currentResourceType}
                            />)
                          }) : ""
                          }
                          {config.fields_config.common_fields[pageNum].map((component_label, index) => {
                            const MyField = fieldComponents[component_label][0]
                            return (<MyField
                              key={index}
                              config={config}
                              noFiles={noFiles}
                              record={record}
                              vocabularies={vocabularies}
                              permissions={permissions}
                              // accordionStyle={accordionStyle}
                              customFieldsUI={customFieldsUI}
                              currentResourceType={currentResourceType}
                            />)
                          }
                          )}
                      </FormPage>
                    </div>
                  )
                )
                )}
                </Transition.Group>


            </Grid.Column>

          </Grid>
        </Container>
      </DepositFormApp>
    </FormValuesContext.Provider>
    );
}

RDMDepositForm.propTypes = {
  config: PropTypes.object.isRequired,
  record: PropTypes.object.isRequired,
  preselectedCommunity: PropTypes.object,
  files: PropTypes.object,
  permissions: PropTypes.object,
};

RDMDepositForm.defaultProps = {
  preselectedCommunity: undefined,
  permissions: null,
  files: null,
};

export { FormValuesContext };