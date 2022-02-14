//import "core-js/stable";
import "regenerator-runtime/runtime";
import menuModalInit from "./component/modal.js";
import initStickyNav from "./component/stickyNav.js";
import initCarousel  from "./component/carousel.js";
import { Gradient } from './component/gradient.js';
import twoColsImageResize from './component/two-cols.js'

// Your scripts here
menuModalInit();
initStickyNav();
initCarousel();
twoColsImageResize();

// Gradient Mesh
const gradient = new Gradient();
gradient.initGradient('#gradient-canvas');
