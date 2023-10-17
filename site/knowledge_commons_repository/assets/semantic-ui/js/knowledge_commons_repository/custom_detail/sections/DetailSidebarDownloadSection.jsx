import React from "react";
import { i18next } from "@translations/invenio_app_rdm/i18next";
import { FileListBox } from "../components/FileList";

const SidebarDownloadSection = ({
  files,
  isPreview,
  previewFileUrl,
  record,
  setActiveTab,
  show_heading,
  tabbedSections,
  totalFileSize,
}) => {
  console.log("****SidebarDownloadSection tabbedSections", tabbedSections);
  const fileTabIndex = tabbedSections.findIndex(
    ({ section }) => section === "Files"
  );
  console.log("****SidebarDownloadSection fileTabIndex", fileTabIndex);
  return (
    <div className="sidebar-container" aria-label={i18next.t("File download")}>
      {show_heading === true && (
        <h2 className="ui medium top attached header mt-0">
          {i18next.t("Download")}
        </h2>
      )}
      <div
        id="record-details-download"
        className="ui segment bottom attached rdm-sidebar"
      >
        <FileListBox
          files={files}
          fileCountToShow={3}
          fileTabIndex={fileTabIndex}
          fullWordButtons={false}
          withPreview={false}
          isPreview={isPreview}
          previewFileUrl={previewFileUrl}
          record={record}
          setActiveTab={setActiveTab}
          showChecksum={false}
          showHeading={show_heading}
          showTableHeader={false}
          showTotalSize={false}
          stackedRows={true}
          totalFileSize={totalFileSize}
        />
      </div>
    </div>
  );
};

export { SidebarDownloadSection };
