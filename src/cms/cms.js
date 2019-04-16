import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import HomePagePreview from "./preview-templates/HomePagePreview";

CMS.registerPreviewTemplate("aboutpage", AboutPagePreview);
CMS.registerPreviewTemplate("homepage", HomePagePreview);
