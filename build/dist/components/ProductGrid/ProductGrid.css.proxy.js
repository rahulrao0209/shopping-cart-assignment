// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Dosis:wght@400;600;700&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 37.5%;\n  font-family: \"Dosis\", sans-serif;\n  box-sizing: border-box;\n  /* Mobile Landscape */\n  /* Tablet */\n  /* Desktop Base */\n  /* Desktop Large */\n  /* Larger breakpoints */\n  /*\n    Responsive breakpoints\n    1920px: styles applied to screens 1920px wide and above\n    1440px: styles applied to screens 1440px wide and above\n    1280px: styles applied to screens 1280px wide and above\n    Desktop (base): styles apply to all devices unless overridden at other device breakpoints\n    Tablet: styles applied to screens 991px wide and below\n    Mobile landscape: styles applied to screens 767px wide and below\n    Mobile portrait: styles applied to screens 478px wide and below\n  */\n}\n@media only screen and (min-width: 478px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (min-width: 992px) {\n  html {\n    font-size: 56.25%;\n  }\n}\n@media only screen and (min-width: 1200px) {\n  html {\n    font-size: 62.5%;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  html {\n    font-size: 68.75%;\n  }\n}\n\n.product-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-auto-rows: max-content;\n  grid-gap: 1.5rem;\n  margin: 0 auto;\n  padding: 2rem;\n  width: 100%;\n  font-size: 1.5rem;\n  /* Mobile Landscape */\n  /* Tablets */\n  /* Desktop Base */\n  /* Larger Screen Sizes */\n}\n@media only screen and (min-width: 478px) {\n  .product-grid {\n    margin: 7rem auto 0 auto;\n  }\n}\n@media only screen and (min-width: 600px) {\n  .product-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media only screen and (min-width: 768px) {\n  .product-grid {\n    grid-template-columns: repeat(3, 1fr);\n    width: 80%;\n  }\n}\n@media only screen and (min-width: 992px) {\n  .product-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media only screen and (min-width: 1650px) {\n  .product-grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n\n.no-products {\n  font-size: 4rem;\n  grid-column: 1/-1;\n  text-align: center;\n  margin-top: 30vh;\n  color: #2b2b2b;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}