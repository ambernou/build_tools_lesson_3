import "../style.scss";

import { items } from "./itemsArray.js";
import { renderPage } from "./renderPageFunc.js";

const divEl = document.querySelector(".gallery_items");
renderPage(items, divEl);