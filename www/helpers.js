const sleep = (ms) => new Promise(res => setTimeout(res, ms));
const $ = (x) => document.querySelector(x);
const $$ = (x) => document.querySelectorAll(x);
const $$$ = (x) => document.createElement(x);

