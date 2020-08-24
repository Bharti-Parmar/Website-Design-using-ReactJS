import React, { Component } from "react";
import { NavHtml } from "NavHTML.js";
import { headerHtml } from "header.js";
import { sectionHtml } from "section.js";
import { contactHtml } from "contact.js";
import { footerHtml } from "footer.js";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";


class appHTML extends React.Component {
  render() {
    return (
      <NavHTML />
      <headerHTML />
      <sectionHTML />
      <contactHTML />
      <footerHTML />
    );
  }
}

export default appHTML;
