// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Dosis:wght@400;600;700&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 37.5%;\n  font-family: \"Dosis\", sans-serif;\n  box-sizing: border-box;\n  /* Mobile Landscape */\n  /* Tablet */\n  /* Desktop Base */\n  /* Desktop Large */\n  /* Larger breakpoints */\n  /*\n    Responsive breakpoints\n    1920px: styles applied to screens 1920px wide and above\n    1440px: styles applied to screens 1440px wide and above\n    1280px: styles applied to screens 1280px wide and above\n    Desktop (base): styles apply to all devices unless overridden at other device breakpoints\n    Tablet: styles applied to screens 991px wide and below\n    Mobile landscape: styles applied to screens 767px wide and below\n    Mobile portrait: styles applied to screens 478px wide and below\n  */\n}\n@media only screen and (min-width: 478px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (min-width: 992px) {\n  html {\n    font-size: 56.25%;\n  }\n}\n@media only screen and (min-width: 1200px) {\n  html {\n    font-size: 62.5%;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  html {\n    font-size: 68.75%;\n  }\n}\n\n.product-menu-mobile {\n  margin: 8rem auto 0 auto;\n  width: 100%;\n  font-size: 3rem;\n  position: relative;\n}\n.product-menu-mobile__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 2rem;\n  background-color: #b3005c;\n  color: #fff;\n}\n.product-menu-mobile__head:hover {\n  cursor: pointer;\n  background-color: #cd0069;\n}\n.product-menu-mobile__categories {\n  display: flex;\n  flex-flow: column nowrap;\n  position: absolute;\n  z-index: 1;\n  background-color: #fff;\n  width: 100%;\n}\n.product-menu-mobile__categories > a {\n  font-size: 3rem;\n  text-decoration: none;\n  text-align: left;\n  padding: 2rem;\n  transition: all 0.2s;\n}\n.product-menu-mobile__categories > a:hover {\n  cursor: pointer;\n  background-color: rgb(240, 236, 236);\n  color: rgb(94, 94, 94);\n}\n\n.arrow-icon {\n  margin-top: 0.2em;\n  font-size: 1.2em;\n}\n\n.active-mobile-menu-link {\n  background-color: #b3005c;\n  color: #fff;\n}\n\n.inactive-mobile-menu-link {\n  color: #666666;\n}\n\n.hide-menu {\n  transition: all 0.5s;\n  opacity: 0;\n  transform: translateY(-130%);\n}\n\n.show-menu {\n  transition: all 0.5s;\n  transform: translateY(0%);\n  opacity: 1;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}