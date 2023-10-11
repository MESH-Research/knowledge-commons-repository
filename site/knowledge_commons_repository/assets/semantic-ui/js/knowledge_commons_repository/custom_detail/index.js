import React from "react";
import ReactDOM from "react-dom";
import DetailMainContent from "./DetailMainContent";

const detailMainDiv = document.getElementById('detail-main-content');

ReactDOM.render(
    <DetailMainContent
    community={JSON.parse(detailMainDiv.dataset.community)}
    customFieldsUi={JSON.parse(detailMainDiv.dataset.customFieldsUi)}
    downloadFileUrl={detailMainDiv.dataset.downloadFileUrl}
    externalResources={JSON.parse(detailMainDiv.dataset.externalResources)}
    files={JSON.parse(detailMainDiv.dataset.files)}
    isDraft={JSON.parse(detailMainDiv.dataset.isDraft)}
    isPreview={JSON.parse(detailMainDiv.dataset.isPreview)}
    hasPreviewableFiles={JSON.parse(detailMainDiv.dataset.hasPreviewableFiles) === 'true' ? true : false}
    iconsRor={detailMainDiv.dataset.iconsRor}
    iconsOrcid={detailMainDiv.dataset.iconsOrcid}
    iconsGnd={detailMainDiv.dataset.iconsGnd}
    iconsHcUsername={detailMainDiv.dataset.iconsHcUsername}
    landingUrls={JSON.parse(detailMainDiv.dataset.landingUrls)}
    permissions={JSON.parse(detailMainDiv.dataset.permissions)}
    previewFile={JSON.parse(detailMainDiv.dataset.previewFile)}
    record={JSON.parse(detailMainDiv.dataset.record)}
    totalFileSize={detailMainDiv.dataset.totalFileSize}
    // badge_png
    // badge_svg
    // breadcrumbs
    // current_theme_icons
    // currentMenu={JSON.parse(detailMainDiv.dataset.currentMenu)}
    // currentUser={JSON.parse(detailMainDiv.dataset.currentUser)}
    // currentUserprofile={JSON.parse(detailMainDiv.dataset.currentUserprofile)}
    // g={JSON.parse(detailMainDiv.dataset.g)}
    // jwt
    // jwt_token
    // request={JSON.parse(detailMainDiv.dataset.request)}
    // search_app_communities_config
    // search_app_communities_invitations_config
    // search_app_communities_members_config
    // search_app_communities_records_config
    // search_app_communities_requests_config
    />,
    detailMainDiv
);