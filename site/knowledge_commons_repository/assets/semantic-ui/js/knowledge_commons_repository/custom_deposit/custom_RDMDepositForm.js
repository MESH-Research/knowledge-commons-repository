// This file is part of InvenioRDM
// Copyright (C) 2020-2022 CERN.
// Copyright (C) 2020-2022 Northwestern University.
// Copyright (C) 2021-2022 Graz University of Technology.
// Copyright (C) 2022-2023 KTH Royal Institute of Technology.
//
// Invenio App RDM is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import React, { Component, createRef, Fragment } from "react";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import { i18next } from "@translations/invenio_app_rdm/i18next";
import { AccordionField, CustomFields } from "react-invenio-forms";
import {
  AccessRightField,
  DescriptionsField,
  CreatibutorsField,
  DatesField,
  DeleteButton,
  DepositStatusBox,
  FileUploader,
  FormFeedback,
  IdentifiersField,
  PIDField,
  PreviewButton,
  LanguagesField,
  LicenseField,
  PublicationDateField,
  PublishButton,
  PublisherField,
  ReferencesField,
  RelatedWorksField,
  ResourceTypeField,
  SubjectsField,
  TitlesField,
  VersionField,
  DepositFormApp,
  CommunityHeader,
  SaveButton,
} from "@js/invenio_rdm_records";
import { FundingField } from "@js/invenio_vocabularies";
import {
  Button,
  Card,
  Container,
  Grid,
  Ref,
  Sticky,
  Transition
} from "semantic-ui-react";
import PropTypes from "prop-types";
import Overridable from "react-overridable";

const AbstractComponent = () => {
  return(<></>)
}

const AdditionalDatesComponent = () => {
  return(<></>)
}

const AdditionalDescriptionComponent = () => {
  return(<></>)
}

const AdditionalTitlesComponent = () => {
  return(<></>)
}

const AIComponent = () => {
  return(<></>)
}

const AlternateIdentifiersComponent = () => {
  return(<></>)
}

const ContentWarningComponent = () => {
  return(<></>)
}

const ContributorsComponent = () => {
  return(<></>)
}

const CreatorsComponent = () => {
  return(<></>)
}

const DateComponent = () => {
  return(<></>)
}

const DoiComponent = () => {
  return(<></>)
}

const FilesUploadComponent = ({config, noFiles, record, permissions}) => {
  return(
    <Overridable
      id="InvenioAppRdm.Deposit.AccordionFieldFiles.container"
      record={record}
      config={config}
      noFiles={noFiles}
    >
      <AccordionField
        includesPaths={["files.enabled"]}
        active
        label={i18next.t("Files")}
      >
        {noFiles && record.is_published && (
          <div className="text-align-center pb-10">
            <em>{i18next.t("The record has no files.")}</em>
          </div>
        )}
        <Overridable
          id="InvenioAppRdm.Deposit.FileUploader.container"
          record={record}
          config={config}
        >
          <FileUploader
            isDraftRecord={!record.is_published}
            quota={config.quota}
            decimalSizeDisplay={config.decimal_size_display}
            showMetadataOnlyToggle={permissions?.can_manage_files}
          />
        </Overridable>
      </AccordionField>
    </Overridable>
  )
}

const FundingComponent = () => {
  return(<></>)
}

const KeywordsComponent = () => {
  return(<></>)
}

const LanguagesComponent = () => {
  return(<></>)
}

const MetadataOnlyComponent = () => {
  return(<></>)
}

const PreviouslyPublishedComponent = () => {
  return(<></>)
}

const PublisherDoiComponent = () => {
  return(<></>)
}

const PublisherComponent = () => {
  return(<></>)
}

const PublicationLocationComponent = () => {
  return(<></>)
}

const RelatedWorksComponent = () => {
  return(<></>)
}

const ResourceTypeComponent = ({vocabularies}) => {
  return(
  <Overridable
    id="InvenioAppRdm.Deposit.ResourceTypeField.container"
    vocabularies={vocabularies}
    fieldPath="metadata.resource_type"
  >
    <ResourceTypeField
      options={vocabularies.metadata.resource_type}
      fieldPath="metadata.resource_type"
      required
    />
  </Overridable>
  )
}

const SubjectsComponent = () => {
  return(<></>)
}

const SubtitleComponent = () => {
  return(<></>)
}

const TitleComponent = () => {
  return(<></>)
}

const TotalPagesComponent = () => {
  return(<></>)
}

const SeriesTitleComponent = () => {
  return(<></>)
}

const SeriesNumberComponent = () => {
  return(<></>)
}

const TotalVolumesComponent = () => {
  return(<></>)
}

const VolumeComponent = () => {
  return(<></>)
}

const VersionComponent = () => {
  return(<></>)
}

const fieldComponents = {
    abstract: AbstractComponent,
    additional_dates: AdditionalDatesComponent,
    additional_description: AdditionalDescriptionComponent,
    additional_titles: AdditionalTitlesComponent,
    ai: AIComponent,
    alternate_identifiers: AlternateIdentifiersComponent,
    content_warning: ContentWarningComponent,
    contributors: ContributorsComponent,
    creators: CreatorsComponent,
    date: DateComponent,
    doi: DoiComponent,
    funding: FundingComponent,
    file_upload: FilesUploadComponent,
    keywords: KeywordsComponent,
    language: LanguagesComponent,
    metadata_only: MetadataOnlyComponent,
    previously_published: PreviouslyPublishedComponent,
    publisher_doi: PublisherDoiComponent,
    publisher: PublisherComponent,
    publication_location: PublicationLocationComponent,
    related_works: RelatedWorksComponent,
    resource_type: ResourceTypeComponent,
    subjects: SubjectsComponent,
    subtitle: SubtitleComponent,
    title: TitleComponent,
    total_pages: TotalPagesComponent,
    series_title: SeriesTitleComponent,
    series_number: SeriesNumberComponent,
    total_volumes: TotalVolumesComponent,
    volume: VolumeComponent,
    version: VersionComponent
}

const BookDetailComponent = ({}) => {
  return('')
}

const fieldSetComponents = {
  book_detail: BookDetailComponent
}

const FormPage = ({ children }) => {
  return(
    <Container id="rdm-deposit-form form-page-component" className="rel-mt-1">
      <Grid className="mt-25">
        <Grid.Column mobile={16} tablet={16} computer={11}>
          {children}
        </Grid.Column>
      </Grid>
      <Button primary type="button" content="Save and continue" floated="right" />
    </Container>
  )
}

export class RDMDepositForm extends Component {
  constructor(props) {
    super(props);
    this.config = props.config || {};
    const { files, record } = this.props;
    this.state = {
      currentFormPage: "page 5",
      showPage1: false
    }

    // TODO: Make ALL vocabulary be generated by backend.
    // Currently, some vocabulary is generated by backend and some is
    // generated by frontend here. Iteration is faster and abstractions can be
    // discovered by generating vocabulary here. Once happy with vocabularies,
    // then we can generate it in the backend.
    this.vocabularies = {
      metadata: {
        ...this.config.vocabularies,

        creators: {
          ...this.config.vocabularies.creators,
          type: [
            { text: "Person", value: "personal" },
            { text: "Organization", value: "organizational" },
          ],
        },

        contributors: {
          ...this.config.vocabularies.contributors,
          type: [
            { text: "Person", value: "personal" },
            { text: "Organization", value: "organizational" },
          ],
        },
        identifiers: {
          ...this.config.vocabularies.identifiers,
        },
      },
    };

    // check if files are present
    this.noFiles = false;
    if (
      !Array.isArray(files.entries) ||
      (!files.entries.length && record.is_published)
    ) {
      this.noFiles = true;
    }

    this.handleFormPageChange = this.handleFormPageChange.bind(this)
  }

  handleFormPageChange = (event) => {
    console.log(event.target.getAttribute("href"));
    this.setState({currentFormPage: event.target.value});
    event.preventDefault();
  };

  formFeedbackRef = createRef();
  sidebarRef = createRef();

  render() {
    const { record, files, permissions, preselectedCommunity } = this.props;
    const customFieldsUI = this.config.custom_fields.ui;
    const currentFormPage = this.state.currentFormPage;
    return (
      <DepositFormApp
        config={this.config}
        record={record}
        preselectedCommunity={preselectedCommunity}
        files={files}
        permissions={permissions}
      >
        <Overridable
          id="InvenioAppRdm.Deposit.FormFeedback.container"
          labels={this.config.custom_fields.error_labels}
          fieldPath="message"
        >
          <FormFeedback
            fieldPath="message"
            labels={this.config.custom_fields.error_labels}
          />
        </Overridable>

        <Overridable id="InvenioAppRdm.Deposit.CommunityHeader.container">
          <CommunityHeader imagePlaceholderLink="/static/images/square-placeholder.png" />
        </Overridable>
        <Container id="rdm-deposit-form" className="rel-mt-1">
          <div className="upload-form-pager">
            {["1", "2", "3", "4", "5"].map((pageNum) => (
              <>
              <Button
                // disabled={!draftExists || isSubmitting}
                key={`upload-form-pager-button-${pageNum}`}
                onClick={this.handleFormPageChange}
                className={`upload-form-pager-button page-${pageNum}`}
                // icon
                // loading={isSubmitting && actionState === DRAFT_DELETE_STARTED}
                labelPosition="left"
                // {...uiProps}
                content={`page ${pageNum}`}
                type="button"
                value={`page ${pageNum}`}
              />
              </>
            ))}
          </div>
        <Transition.Group
          animation="fade"
          duration={{show: 1000, hide: 20}}
        >
          {currentFormPage=='page 1' && (
            <div>
              <FormPage formPageNum={1}>
                <h3>Page 1</h3>
                <ResourceTypeComponent vocabularies={this.vocabularies} />
              </FormPage>
            </div>
          )}

          {currentFormPage=='page 5' && (
            <div>
            <FormPage formPageNum={5}>
              <h3>Page 5</h3>
              <FilesUploadComponent config={this.config}
                noFiles={this.noFiles}
                record={record}
                permissions={permissions}
              />
            </FormPage>
            </div>
          )}
          </Transition.Group>

          <Grid className="mt-25">
            <Grid.Column mobile={16} tablet={16} computer={11}>
              <Overridable
                id="InvenioAppRdm.Deposit.AccordionFieldBasicInformation.container"
                config={this.config}
                record={record}
                vocabularies={this.vocabularies}
              >
                <AccordionField
                  includesPaths={[
                    "metadata.resource_type",
                    "metadata.title",
                    "metadata.additional_titles",
                    "metadata.publication_date",
                    "metadata.creators",
                    "metadata.description",
                    "metadata.additional_descriptions",
                    "metadata.rights",
                  ]}
                  active
                  label={i18next.t("Basic information")}
                >
                  <Overridable
                    id="InvenioAppRdm.Deposit.PIDField.container"
                    config={this.config}
                    record={record}
                  >
                    <Fragment>
                      {this.config.pids.map((pid) => (
                        <Fragment key={pid.scheme}>
                          <PIDField
                            btnLabelDiscardPID={pid.btn_label_discard_pid}
                            btnLabelGetPID={pid.btn_label_get_pid}
                            canBeManaged={pid.can_be_managed}
                            canBeUnmanaged={pid.can_be_unmanaged}
                            fieldPath={`pids.${pid.scheme}`}
                            fieldLabel={pid.field_label}
                            isEditingPublishedRecord={
                              record.is_published === true // is_published is `null` at first upload
                            }
                            managedHelpText={pid.managed_help_text}
                            pidLabel={pid.pid_label}
                            pidPlaceholder={pid.pid_placeholder}
                            pidType={pid.scheme}
                            unmanagedHelpText={pid.unmanaged_help_text}
                            required
                          />
                        </Fragment>
                      ))}
                    </Fragment>
                  </Overridable>


                  <Overridable
                    id="InvenioAppRdm.Deposit.TitlesField.container"
                    vocabularies={this.vocabularies}
                    fieldPath="metadata.title"
                    record={record}
                  >
                    <TitlesField
                      options={this.vocabularies.metadata.titles}
                      fieldPath="metadata.title"
                      recordUI={record.ui}
                      required
                    />
                  </Overridable>

                  <Overridable
                    id="InvenioAppRdm.Deposit.PublicationDateField.container"
                    fieldPath="metadata.publication_date"
                  >
                    <PublicationDateField
                      required
                      fieldPath="metadata.publication_date"
                    />
                  </Overridable>

                  <Overridable
                    id="InvenioAppRdm.Deposit.CreatorsField.container"
                    vocabularies={this.vocabularies}
                    config={this.config}
                    fieldPath="metadata.creators"
                  >
                    <CreatibutorsField
                      label={i18next.t("Creators")}
                      labelIcon="user"
                      fieldPath="metadata.creators"
                      roleOptions={this.vocabularies.metadata.creators.role}
                      schema="creators"
                      autocompleteNames={this.config.autocomplete_names}
                      required
                    />
                  </Overridable>

                  <Overridable
                    id="InvenioAppRdm.Deposit.DescriptionsField.container"
                    record={record}
                    vocabularies={this.vocabularies}
                    fieldPath="metadata.description"
                  >
                    <DescriptionsField
                      fieldPath="metadata.description"
                      options={this.vocabularies.metadata.descriptions}
                      recordUI={_get(record, "ui", null)}
                      editorConfig={{
                        removePlugins: [
                          "Image",
                          "ImageCaption",
                          "ImageStyle",
                          "ImageToolbar",
                          "ImageUpload",
                          "MediaEmbed",
                          "Table",
                          "TableToolbar",
                          "TableProperties",
                          "TableCellProperties",
                        ],
                      }}
                    />
                  </Overridable>

                  <Overridable
                    id="InvenioAppRdm.Deposit.LicenseField.container"
                    fieldPath="metadata.rights"
                  >
                    <LicenseField
                      fieldPath="metadata.rights"
                      searchConfig={{
                        searchApi: {
                          axios: {
                            headers: {
                              Accept: "application/vnd.inveniordm.v1+json",
                            },
                            url: "/api/vocabularies/licenses",
                            withCredentials: false,
                          },
                        },
                        initialQueryState: {
                          filters: [["tags", "recommended"]],
                        },
                      }}
                      serializeLicenses={(result) => ({
                        title: result.title_l10n,
                        description: result.description_l10n,
                        id: result.id,
                        link: result.props.url,
                      })}
                    />
                  </Overridable>
                </AccordionField>
              </Overridable>
              <Overridable
                id="InvenioAppRdm.Deposit.AccordionFieldRecommendedInformation.container"
                vocabularies={this.vocabularies}
                config={this.config}
                record={record}
              >
                <AccordionField
                  includesPaths={[
                    "metadata.contributors",
                    "metadata.subjects",
                    "metadata.languages",
                    "metadata.dates",
                    "metadata.version",
                    "metadata.publisher",
                  ]}
                  active
                  label={i18next.t("Recommended information")}
                >
                  <Overridable
                    id="InvenioAppRdm.Deposit.ContributorsField.container"
                    fieldPath="metadata.contributors"
                    vocabularies={this.vocabularies}
                    config={this.config}
                  >
                    <CreatibutorsField
                      addButtonLabel={i18next.t("Add contributor")}
                      label={i18next.t("Contributors")}
                      labelIcon="user plus"
                      fieldPath="metadata.contributors"
                      roleOptions={this.vocabularies.metadata.contributors.role}
                      schema="contributors"
                      autocompleteNames={this.config.autocomplete_names}
                      modal={{
                        addLabel: "Add contributor",
                        editLabel: "Edit contributor",
                      }}
                    />
                  </Overridable>

                  <Overridable
                    id="InvenioAppRdm.Deposit.SubjectsField.container"
                    vocabularies={this.vocabularies}
                    fieldPath="metadata.subjects"
                    record={record}
                  >
                    <SubjectsField
                      fieldPath="metadata.subjects"
                      initialOptions={_get(record, "ui.subjects", null)}
                      limitToOptions={this.vocabularies.metadata.subjects.limit_to}
                    />
                  </Overridable>

                  <Overridable
                    id="InvenioAppRdm.Deposit.LanguagesField.container"
                    fieldPath="metadata.languages"
                    record={record}
                  >
                    <LanguagesField
                      fieldPath="metadata.languages"
                      initialOptions={_get(record, "ui.languages", []).filter(
                        (lang) => lang !== null
                      )} // needed because dumped empty record from backend gives [null]
                      serializeSuggestions={(suggestions) =>
                        suggestions.map((item) => ({
                          text: item.title_l10n,
                          value: item.id,
                          key: item.id,
                        }))
                      }
                    />
                  </Overridable>

                  <Overridable
                    id="InvenioAppRdm.Deposit.DateField.container"
                    vocabularies={this.vocabularies}
                    fieldPath="metadata.dates"
                  >
                    <DatesField
                      fieldPath="metadata.dates"
                      options={this.vocabularies.metadata.dates}
                      showEmptyValue
                    />
                  </Overridable>

                  <Overridable
                    id="InvenioAppRdm.Deposit.VersionField.container"
                    fieldPath="metadata.version"
                  >
                    <VersionField fieldPath="metadata.version" />
                  </Overridable>

                  <Overridable
                    id="InvenioAppRdm.Deposit.PublisherField.container"
                    fieldPath="metadata.publisher"
                  >
                    <PublisherField fieldPath="metadata.publisher" />
                  </Overridable>
                </AccordionField>
              </Overridable>
              <Overridable
                id="InvenioAppRdm.Deposit.AccordionFieldFunding.container"
                ui={this.accordionStyle}
              >
                <AccordionField
                  includesPaths={["metadata.funding"]}
                  active
                  label="Funding"
                  ui={this.accordionStyle}
                >
                  <Overridable
                    id="InvenioAppRdm.Deposit.FundingField.container"
                    fieldPath="metadata.funding"
                  >
                    <FundingField
                      fieldPath="metadata.funding"
                      searchConfig={{
                        searchApi: {
                          axios: {
                            headers: {
                              Accept: "application/vnd.inveniordm.v1+json",
                            },
                            url: "/api/awards",
                            withCredentials: false,
                          },
                        },
                        initialQueryState: {
                          sortBy: "bestmatch",
                          sortOrder: "asc",
                          layout: "list",
                          page: 1,
                          size: 5,
                        },
                      }}
                      label="Awards"
                      labelIcon="money bill alternate outline"
                      deserializeAward={(award) => {
                        return {
                          title: award.title_l10n,
                          number: award.number,
                          funder: award.funder ?? "",
                          id: award.id,
                          ...(award.identifiers && {
                            identifiers: award.identifiers,
                          }),
                          ...(award.acronym && { acronym: award.acronym }),
                        };
                      }}
                      deserializeFunder={(funder) => {
                        return {
                          id: funder.id,
                          name: funder.name,
                          ...(funder.title_l10n && { title: funder.title_l10n }),
                          ...(funder.pid && { pid: funder.pid }),
                          ...(funder.country && { country: funder.country }),
                          ...(funder.identifiers && {
                            identifiers: funder.identifiers,
                          }),
                        };
                      }}
                      computeFundingContents={(funding) => {
                        let headerContent,
                          descriptionContent,
                          awardOrFunder = "";

                        if (funding.funder) {
                          const funderName =
                            funding.funder?.name ??
                            funding.funder?.title ??
                            funding.funder?.id ??
                            "";
                          awardOrFunder = "funder";
                          headerContent = funderName;
                          descriptionContent = "";

                          // there cannot be an award without a funder
                          if (funding.award) {
                            awardOrFunder = "award";
                            descriptionContent = funderName;
                            headerContent = funding.award.title;
                          }
                        }

                        return { headerContent, descriptionContent, awardOrFunder };
                      }}
                    />
                  </Overridable>
                </AccordionField>
              </Overridable>
              <Overridable
                id="InvenioAppRdm.Deposit.AccordionFieldAlternateIdentifiers.container"
                vocabularies={this.vocabularies}
              >
                <AccordionField
                  includesPaths={["metadata.identifiers"]}
                  active
                  label={i18next.t("Alternate identifiers")}
                >
                  <Overridable
                    id="InvenioAppRdm.Deposit.IdentifiersField.container"
                    vocabularies={this.vocabularies}
                    fieldPath="metadata.identifiers"
                  >
                    <IdentifiersField
                      fieldPath="metadata.identifiers"
                      label={i18next.t("Alternate identifiers")}
                      labelIcon="barcode"
                      schemeOptions={this.vocabularies.metadata.identifiers.scheme}
                      showEmptyValue
                    />
                  </Overridable>
                </AccordionField>
              </Overridable>

              <Overridable
                id="InvenioAppRdm.Deposit.AccordionFieldRelatedWorks.container"
                vocabularies={this.vocabularies}
              >
                <AccordionField
                  includesPaths={["metadata.related_identifiers"]}
                  active
                  label={i18next.t("Related works")}
                >
                  <Overridable
                    id="InvenioAppRdm.Deposit.RelatedWorksField.container"
                    fieldPath="metadata.related_identifiers"
                    vocabularies={this.vocabularies}
                  >
                    <RelatedWorksField
                      fieldPath="metadata.related_identifiers"
                      options={this.vocabularies.metadata.identifiers}
                      showEmptyValue
                    />
                  </Overridable>
                </AccordionField>
              </Overridable>
              <Overridable
                id="InvenioAppRdm.Deposit.AccordionFieldReferences.container"
                vocabularies={this.vocabularies}
              >
                <AccordionField
                  includesPaths={["metadata.references"]}
                  active
                  label={i18next.t("References")}
                >
                  <Overridable
                    id="InvenioAppRdm.Deposit.ReferencesField.container"
                    fieldPath="metadata.references"
                    vocabularies={this.vocabularies}
                  >
                    <ReferencesField fieldPath="metadata.references" showEmptyValue />
                  </Overridable>
                </AccordionField>
              </Overridable>
              {!_isEmpty(customFieldsUI) && (
                <Overridable
                  id="InvenioAppRdm.Deposit.CustomFields.container"
                  customFieldsUI={customFieldsUI}
                >
                  <CustomFields
                    config={customFieldsUI}
                    templateLoaders={[
                      (widget) => import(`@templates/custom_fields/${widget}.js`),
                      (widget) =>
                        import(`@js/invenio_rdm_records/src/deposit/customFields`),
                      (widget) => import(`react-invenio-forms`),
                    ]}
                    fieldPathPrefix="custom_fields"
                  />
                </Overridable>
              )}
            </Grid.Column>
            <Ref innerRef={this.sidebarRef}>
              <Grid.Column
                mobile={16}
                tablet={16}
                computer={5}
                className="deposit-sidebar"
              >
                <Sticky context={this.sidebarRef} offset={20}>
                  <Overridable id="InvenioAppRdm.Deposit.CardDepositStatusBox.container">
                    <Card>
                      <Card.Content>
                        <DepositStatusBox />
                      </Card.Content>
                      <Card.Content>
                        <Grid relaxed>
                          <Grid.Column
                            computer={8}
                            mobile={16}
                            className="pb-0 left-btn-col"
                          >
                            <SaveButton fluid />
                          </Grid.Column>

                          <Grid.Column
                            computer={8}
                            mobile={16}
                            className="pb-0 right-btn-col"
                          >
                            <PreviewButton fluid />
                          </Grid.Column>

                          <Grid.Column width={16} className="pt-10">
                            <PublishButton fluid />
                          </Grid.Column>
                        </Grid>
                      </Card.Content>
                    </Card>
                  </Overridable>
                  <Overridable
                    id="InvenioAppRdm.Deposit.AccessRightField.container"
                    fieldPath="access"
                  >
                    <AccessRightField
                      label={i18next.t("Visibility")}
                      labelIcon="shield"
                      fieldPath="access"
                      showMetadataAccess={permissions?.can_manage_record_access}
                    />
                  </Overridable>
                  {permissions?.can_delete_draft && (
                    <Overridable
                      id="InvenioAppRdm.Deposit.CardDeleteButton.container"
                      record={record}
                    >
                      <Card>
                        <Card.Content>
                          <DeleteButton fluid />
                        </Card.Content>
                      </Card>
                    </Overridable>
                  )}
                </Sticky>
              </Grid.Column>
            </Ref>
          </Grid>
        </Container>
      </DepositFormApp>
    );
  }
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
