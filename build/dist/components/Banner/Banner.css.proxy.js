// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Dosis:wght@400;600;700&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 37.5%;\n  font-family: \"Dosis\", sans-serif;\n  box-sizing: border-box;\n  /* Mobile Landscape */\n  /* Tablet */\n  /* Desktop Base */\n  /* Desktop Large */\n  /* Larger breakpoints */\n  /*\n    Responsive breakpoints\n    1920px: styles applied to screens 1920px wide and above\n    1440px: styles applied to screens 1440px wide and above\n    1280px: styles applied to screens 1280px wide and above\n    Desktop (base): styles apply to all devices unless overridden at other device breakpoints\n    Tablet: styles applied to screens 991px wide and below\n    Mobile landscape: styles applied to screens 767px wide and below\n    Mobile portrait: styles applied to screens 478px wide and below\n  */\n}\n@media only screen and (min-width: 478px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (min-width: 992px) {\n  html {\n    font-size: 56.25%;\n  }\n}\n@media only screen and (min-width: 1200px) {\n  html {\n    font-size: 62.5%;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  html {\n    font-size: 68.75%;\n  }\n}\n\n.banner {\n  box-shadow: 0 16px 16px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  margin: 12rem auto 4rem auto;\n  position: relative;\n  /* Mobile Landscape */\n  /* Tablet */\n}\n.banner > img {\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n.banner > img:first-child {\n  opacity: 0;\n}\n.banner > img:not(:first-child) {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n@media only screen and (min-width: 478px) {\n  .banner {\n    width: 80%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .banner {\n    width: 70%;\n  }\n}\n\n.dots {\n  position: absolute;\n  bottom: 2rem;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 20%;\n  display: flex;\n  justify-content: space-between;\n}\n.dots > span {\n  width: 0.8rem;\n  height: 0.8rem;\n  border-radius: 50%;\n}\n.dots > span:hover {\n  cursor: pointer;\n  background-color: #9a9a9a;\n}\n\n.banner-active {\n  transition: all 0.5s;\n  transform: scale(1);\n  opacity: 1;\n}\n\n.banner-inactive {\n  transition: all 0.5s;\n  transform: scale(0.2);\n  opacity: 0;\n}\n\n.dots--active {\n  background-color: #ada3a3;\n}\n\n.dots--inactive {\n  background-color: #ddd9d9;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}