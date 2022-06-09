// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Dosis:wght@400;600;700&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 37.5%;\n  font-family: \"Dosis\", sans-serif;\n  box-sizing: border-box;\n  /* Mobile Landscape */\n  /* Tablet */\n  /* Desktop Base */\n  /* Desktop Large */\n  /* Larger breakpoints */\n  /*\n    Responsive breakpoints\n    1920px: styles applied to screens 1920px wide and above\n    1440px: styles applied to screens 1440px wide and above\n    1280px: styles applied to screens 1280px wide and above\n    Desktop (base): styles apply to all devices unless overridden at other device breakpoints\n    Tablet: styles applied to screens 991px wide and below\n    Mobile landscape: styles applied to screens 767px wide and below\n    Mobile portrait: styles applied to screens 478px wide and below\n  */\n}\n@media only screen and (min-width: 478px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (min-width: 992px) {\n  html {\n    font-size: 56.25%;\n  }\n}\n@media only screen and (min-width: 1200px) {\n  html {\n    font-size: 62.5%;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  html {\n    font-size: 68.75%;\n  }\n}\n\n.nav--mobile {\n  position: relative;\n  height: 100%;\n  transition: all 0.2s;\n}\n.nav--mobile:hover {\n  cursor: pointer;\n  background-color: #f2f3f4 !important;\n}\n.nav--mobile .cart-icon--mobile {\n  margin-top: 0.9em;\n  font-size: 1.5em;\n  color: #b3005c;\n  width: 3em;\n  height: 1.2em;\n  padding: 0.05rem;\n}\n\n.nav--mobile__links {\n  position: absolute;\n  top: 7rem;\n  left: 0;\n  display: flex;\n  flex-flow: column nowrap;\n  width: 100%;\n  background-color: #f2f3f4;\n}\n.nav--mobile__links > a {\n  padding: 1.5rem 0;\n  font-size: 2rem;\n  font-weight: 600;\n  text-align: center;\n  text-decoration: none;\n}\n.nav--mobile__links > a:hover {\n  cursor: pointer;\n  color: #b3005c;\n}\n\n.show-mobile-nav-menu {\n  transition: all 0.5s;\n  transform: translateY(0%);\n}\n\n.hide-mobile-nav-menu {\n  transition: all 0.5s;\n  transform: translateY(calc(-100% - 7rem));\n}\n\n.cart-size-indicator {\n  position: absolute;\n  right: 1em;\n  top: 1em;\n  width: 1.3em;\n  height: 1.3em;\n  text-align: center;\n  background-color: #b3005c;\n  color: #fff;\n  border-radius: 100%;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}