import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import HomePagePreview from "./preview-templates/HomePagePreview";

import youtubeEditorComponent from "./editor-components/youtubeEditorComponent";

CMS.registerPreviewTemplate("aboutpage", AboutPagePreview);
CMS.registerPreviewTemplate("homepage", HomePagePreview);
CMS.registerEditorComponent(youtubeEditorComponent);
