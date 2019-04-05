import CMS from "netlify-cms";

import "../assets/css/bootstrap.min.css";
import "../assets/css/main.css";
import "../assets/css/custom.css";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import HomePagePreview from "./preview-templates/HomePagePreview";

CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("home", HomePagePreview);
