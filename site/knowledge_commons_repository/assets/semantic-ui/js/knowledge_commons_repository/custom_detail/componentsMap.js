import { RecordTitle } from "./components/RecordTitle";
import { CitationSection } from "./sections/DetailSidebarCitationSection";
import { CommunitiesBanner } from "./components/CommunitiesBanner";
import { Creatibutors } from "./components/Creatibutors";
import { Descriptions } from "./components/Descriptions";
import { FilePreview } from "./components/FilePreview";
import { PublishingDetails } from "./components/PublishingDetails";
import { SidebarDetailsSection } from "./sections/DetailSidebarDetailsSection";
import { VersionsSection } from "./sections/DetailSidebarVersionsSection";


const componentsMap = {
    "CitationSection": CitationSection,
    "CommunitiesBanner": CommunitiesBanner,
    "Creatibutors": Creatibutors,
    "Descriptions": Descriptions,
    "FilePreview": FilePreview,
    "PublishingDetails": PublishingDetails,
    "RecordTitle": RecordTitle,
    "SidebarDetailsSection": SidebarDetailsSection,
    "VersionsSection": VersionsSection,
};

export { componentsMap };