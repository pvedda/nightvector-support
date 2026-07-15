(function () {
  "use strict";

  var config = window.NightVectorSupport || {};
  var contact = config.contact || "Support contact not configured.";
  var nodes = document.querySelectorAll("[data-support-contact]");

  nodes.forEach(function (node) {
    if (contact.indexOf("https://") === 0) {
      var link = document.createElement("a");
      link.href = contact;
      link.textContent = "Open a private-safe support request";
      link.rel = "noreferrer";
      node.replaceChildren(link);
      return;
    }
    node.textContent = contact;
  });
}());
