$(document).ready(function () {
  var privacy_policy_element = "";

  privacy_policy_element =
    privacy_policy_element +
    '<div class="card bg-light">' +
    '<div class="card-header">' +
    policy.card_header +
    "</div>" +
    '<div class="card-body">' +
    '<h5 class="card-title">' +
    policy.card_title +
    "</h5>" +
    '<p class="card-text">' +
    policy.card_text +
    "</p>" +
    "</div>" +
    "</div>";

  $("#contentParent").append(privacy_policy_element);
});

const policy = {
  card_header: "Privacy Policy",
  card_title: "About Your Data",
  card_text:
    "RYTD does not read any data from your device. We do not collect any data in any form. Moreover, we do not show ads which might compromise your data.",
};
