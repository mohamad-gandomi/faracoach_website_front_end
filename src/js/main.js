// Load Libs
import "./swiper.js"
import "./persian-datepicker.js"

// Load Styles
import '../scss/main.scss';

// Load Custom js
import './custom.js';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";

// Loading bootstrap with optional features
initBootstrap({
  tooltip: true,
  popover: true,
  toasts: true,
});

// Your app code
console.log(`Hello ${process.env.HELLO}`);
