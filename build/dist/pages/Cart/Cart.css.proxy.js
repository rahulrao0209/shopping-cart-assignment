// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Dosis:wght@400;600;700&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 37.5%;\n  font-family: \"Dosis\", sans-serif;\n  box-sizing: border-box;\n  /* Mobile Landscape */\n  /* Tablet */\n  /* Desktop Base */\n  /* Desktop Large */\n  /* Larger breakpoints */\n  /*\n    Responsive breakpoints\n    1920px: styles applied to screens 1920px wide and above\n    1440px: styles applied to screens 1440px wide and above\n    1280px: styles applied to screens 1280px wide and above\n    Desktop (base): styles apply to all devices unless overridden at other device breakpoints\n    Tablet: styles applied to screens 991px wide and below\n    Mobile landscape: styles applied to screens 767px wide and below\n    Mobile portrait: styles applied to screens 478px wide and below\n  */\n}\n@media only screen and (min-width: 478px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (min-width: 992px) {\n  html {\n    font-size: 56.25%;\n  }\n}\n@media only screen and (min-width: 1200px) {\n  html {\n    font-size: 62.5%;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  html {\n    font-size: 68.75%;\n  }\n}\n\n.cart {\n  margin: 7rem 0 0 0;\n  min-height: calc(100vh - 7rem);\n  position: relative;\n  background-color: #f2f3f4;\n  display: flex;\n  flex-direction: column;\n}\n.cart__header {\n  font-size: 2.5rem;\n  font-weight: 600;\n  margin: 3em 0 1.5em 0;\n  padding: 1em 2em;\n  background-color: #fff;\n}\n.cart__body {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n  min-height: 100vh;\n}\n.cart__body--empty {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  min-height: 100%;\n  text-align: center;\n  width: max-content;\n}\n.cart__body--empty > h1 {\n  font-size: 4rem;\n}\n.cart__body--empty > p {\n  margin: 1.5rem 0;\n  font-size: 2.5rem;\n}\n.cart__body--empty > a {\n  margin: 1em auto 0 auto;\n  padding: 1em 1.5em;\n  width: 100%;\n  font-size: 1.8rem;\n  text-decoration: none;\n  border-radius: 4px;\n  border: none;\n  background-color: #b3005c;\n  color: #fff;\n  box-shadow: 0 16px 16px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s;\n}\n.cart__body--empty > a:hover, .cart__body--empty > a:active {\n  cursor: pointer;\n  background-color: #9a004f;\n}\n.cart__body--empty > a:active {\n  outline: none;\n  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);\n  transform: translateY(2px);\n}\n.cart__details {\n  max-width: 100rem;\n  min-width: 70rem;\n  margin: 0 auto;\n  display: flex;\n  flex-flow: column nowrap;\n}\n.cart__lowest-price-banner {\n  width: 90%;\n  margin: 2rem auto;\n}\n.cart__checkout {\n  font-size: 2.2rem;\n  text-align: center;\n  box-shadow: 0 -8px 8px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  padding: 1.2rem 0;\n  background-color: #fff;\n}\n.cart__checkout > button {\n  margin: 1em auto 0 auto;\n  padding: 1em 1.5em;\n  width: 90%;\n  border-radius: 4px;\n  border: none;\n  background-color: #b3005c;\n  color: #fff;\n  align-items: center;\n  display: flex;\n}\n.cart__checkout > button > span:nth-child(2) {\n  margin-left: auto;\n}\n.cart__checkout > button > svg {\n  width: 1.5em;\n  height: 1.5em;\n}\n.cart__checkout > button > svg > polyline {\n  stroke: #fff;\n}\n.cart__checkout > button:hover, .cart__checkout > button:active {\n  cursor: pointer;\n  background-color: #9a004f;\n}\n.cart__checkout > button:active {\n  outline: none;\n  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);\n  transform: translateY(2px);\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}