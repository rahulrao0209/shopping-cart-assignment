// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Dosis:wght@400;600;700&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 37.5%;\n  font-family: \"Dosis\", sans-serif;\n  box-sizing: border-box;\n  /* Mobile Landscape */\n  /* Tablet */\n  /* Desktop Base */\n  /* Desktop Large */\n  /* Larger breakpoints */\n  /*\n    Responsive breakpoints\n    1920px: styles applied to screens 1920px wide and above\n    1440px: styles applied to screens 1440px wide and above\n    1280px: styles applied to screens 1280px wide and above\n    Desktop (base): styles apply to all devices unless overridden at other device breakpoints\n    Tablet: styles applied to screens 991px wide and below\n    Mobile landscape: styles applied to screens 767px wide and below\n    Mobile portrait: styles applied to screens 478px wide and below\n  */\n}\n@media only screen and (min-width: 478px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (min-width: 992px) {\n  html {\n    font-size: 56.25%;\n  }\n}\n@media only screen and (min-width: 1200px) {\n  html {\n    font-size: 62.5%;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  html {\n    font-size: 68.75%;\n  }\n}\n\n.header {\n  font-size: 1.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 7rem;\n  padding: 0 2rem;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 2;\n  background-color: #fff;\n}\n@media only screen and (min-width: 992px) {\n  .header {\n    padding: 0 14rem;\n  }\n}\n.header__logo {\n  margin: 0.5rem 0 0 0;\n  padding: 1.5rem;\n}\n.header__logo img {\n  width: 40%;\n  min-width: 10rem;\n}\n@media only screen and (min-width: 478px) {\n  .header__logo img {\n    width: 60%;\n  }\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}