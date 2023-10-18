import React from "react";
import { i18next } from "@translations/invenio_app_rdm/i18next";
import { Button } from "semantic-ui-react";
import { formatBytes } from "../util";

const EmbargoMessage = ({ record }) => {
  return (
    <div
      className={`ui ${record.ui.access_status.message_class} message file-box-message`}
    >
      <i className={`ui ${record.ui.access_status.icon} icon`}></i>
      <b>{record.ui.access_status.title_l10n}</b>
      <p>{record.ui.access_status.description_l10n}</p>
      {!!record.access.embargo.reason ? (
        <p>
          {i18next.t("Reason")}: {record.access.embargo.reason}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

const FileListTableRow = ({
  file,
  fileTabIndex,
  fullWordButtons,
  isPreview,
  previewFileUrl,
  previewTabIndex,
  setActivePreviewFile,
  setActiveTab,
  showChecksum,
  stackedRows,
  withPreview,
}) => {
  // FIXME: restrict to previewable file types
  const file_type = file.key.split(".").pop().toLowerCase();
  const previewUrlFlag = isPreview ? "&preview=1" : "";
  const downloadUrl = `${previewFileUrl.replace("/preview/", "/files/")}/${
    file.key
  }?download=1${previewUrlFlag}`;

  const handlePreviewChange = (file) => {
    setActiveTab(previewTabIndex);
    setActivePreviewFile(file);
  };

  return (
    <tr>
      <td className={`${!!stackedRows ? "fourteen" : "nine"} wide`}>
        <div>
          <a href={downloadUrl} className="filename">
            {file.key}
          </a>
        </div>
        {!!stackedRows && (
          <small className="ui text-muted">{formatBytes(file.size)}</small>
        )}
        {!!showChecksum && (
          <small className="ui text-muted font-tiny">
            {file.checksum}
            <div
              className="ui icon inline-block"
              data-tooltip={i18next.t(
                "This is the file fingerprint (checksum), which can be used to verify the file integrity."
              )}
            >
              <i className="question circle checksum icon"></i>
            </div>
          </small>
        )}
      </td>
      {!stackedRows && <td>{formatBytes(file.size)}</td>}
      <td className="right aligned">
        <span>
          {/* FIXME: restrict to previewable file types */}
          {withPreview && (
            <Button
              role="button"
              className="ui compact mini button preview-link"
              target="preview-iframe"
              data-file-key={file.key}
              size="mini"
              onClick={() => handlePreviewChange(file)}
              compact
            >
              <i className="eye icon"></i> {i18next.t("Preview")}
            </Button>
          )}
          <a
            role="button"
            className="ui compact mini button"
            href={downloadUrl}
          >
            <i className="download icon"></i>
            {!!fullWordButtons && i18next.t("Download")}
          </a>
        </span>
      </td>
    </tr>
  );
};

const FileListTable = ({
  activePreviewFile,
  fileCountToShow,
  files,
  fileTabIndex,
  fullWordButtons,
  isPreview,
  previewFileUrl,
  previewTabIndex,
  record,
  setActivePreviewFile,
  setActiveTab,
  showChecksum,
  showTableHeader,
  showTotalSize,
  stackedRows,
  withPreview,
}) => {
  const displayFiles =
    fileCountToShow > 0 ? files.slice(0, fileCountToShow) : files;
  return (
    <>
      <table className="ui striped table files fluid">
        {!!showTableHeader && (
          <thead>
            <tr>
              <th>{i18next.t("Name")}</th>
              <th>{i18next.t("Size")}</th>
              <th>
                <a
                  role="button"
                  className="ui compact mini button right floated archive-link"
                  href={record.links.archive}
                >
                  <i className="file archive icon button"></i>{" "}
                  {i18next.t("Download all")}
                </a>
              </th>
            </tr>
          </thead>
        )}
        <tbody>
          {displayFiles.map((file) => (
            <FileListTableRow
              activePreviewFile={activePreviewFile}
              key={file.key}
              file={file}
              fileTabIndex={fileTabIndex}
              fullWordButtons={fullWordButtons}
              isPreview={isPreview}
              previewFileUrl={previewFileUrl}
              previewTabIndex={previewTabIndex}
              setActivePreviewFile={setActivePreviewFile}
              setActiveTab={setActiveTab}
              showChecksum={showChecksum}
              stackedRows={stackedRows}
              withPreview={withPreview}
            />
          ))}
        </tbody>
      </table>
      {fileCountToShow > 0 && fileCountToShow < files.length && (
        <Button
          role="button"
          floated="right"
          size="mini"
          className="ui compact archive-link"
          aria-label="See more files"
          compact
          onClick={() => setActiveTab(fileTabIndex)}
        >
          <i className="file archive icon button"></i>{" "}
          {i18next.t("See more files")}
        </Button>
      )}
    </>
  );
};

const FileListBox = ({
  activePreviewFile,
  fileCountToShow = 0,
  files,
  fileTabIndex,
  fullWordButtons = true,
  isPreview,
  previewFileUrl,
  previewTabIndex,
  record,
  setActiveTab,
  setActivePreviewFile,
  showChecksum = true,
  showTableHeader = true,
  showTotalSize = true,
  stackedRows = false,
  totalFileSize,
  withPreview,
}) => {
  return (
    <div className={`ui mb-10 ${record.ui.access_status.id}`}>
      {!!showTotalSize && (
        <div className={`title ${record.ui.access_status.id}`} tabIndex="0">
          {i18next.t("Total file size")}
          <small className="text-muted">{totalFileSize}</small>
        </div>
      )}
      <div className="content pt-0">
        {record.access.files == "restricted" ? (
          <EmbargoMessage record={record} />
        ) : (
          <FileListTable
            activePreviewFile={activePreviewFile}
            previewFileUrl={previewFileUrl}
            files={files}
            fileCountToShow={fileCountToShow}
            fileTabIndex={fileTabIndex}
            fullWordButtons={fullWordButtons}
            pid={record.id}
            isPreview={isPreview}
            previewTabIndex={previewTabIndex}
            record={record}
            setActivePreviewFile={setActivePreviewFile}
            setActiveTab={setActiveTab}
            showChecksum={showChecksum}
            showTableHeader={showTableHeader}
            showTotalSize={showTotalSize}
            stackedRows={stackedRows}
            withPreview={withPreview !== undefined ? withPreview : true}
          />
        )}
      </div>
    </div>
  );
};

export { FileListBox, FileListTable, FileListTableRow, EmbargoMessage };
