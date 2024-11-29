import data_light from "./Data/data_light.js";
import download_links from "./Data/download_links.js";
import application_description from "./Data/application_description.js";

$(document).ready(function () {
  populate_carousel();
  populate_application_description();

  $("#contentParent").append(
    carousel_element + application_description_element
  );
});

let carousel_element = "";
let application_description_element = "";

function populate_carousel() {
  var i = 0,
    j = 0;
  var carousel_data = data_light;

  for (i = 0; i < carousel_data.length; i = i + 1) {
    carousel_element =
      carousel_element +
      "<div id=" +
      carousel_data[i].id +
      ' class="carousel slide" data-ride="carousel">' +
      "<h1 class=\"bg-dark text-white\" align=\"center\" style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\">" +
      carousel_data[i].device +
      "</h1>" +
      '<ol class="carousel-indicators">';

    for (j = 0; j < carousel_data[i].carousel_elements.length; j = j + 1) {
      if (j == 0)
        carousel_element =
          carousel_element +
          "<li data-target=#" +
          carousel_data[i].id +
          ' data-slide-to="' +
          j +
          '" class="active"></li>';
      else
        carousel_element =
          carousel_element +
          "<li data-target=#" +
          carousel_data[i].id +
          ' data-slide-to="' +
          j +
          '"></li>';
    }

    carousel_element =
      carousel_element + "</ol>" + '<div class="carousel-inner">';

    for (j = 0; j < carousel_data[i].carousel_elements.length; j = j + 1) {
      if (j == 0)
        carousel_element =
          carousel_element + '<div class="carousel-item active">';
      else carousel_element = carousel_element + '<div class="carousel-item">';

      carousel_element =
        carousel_element +
        '<img class="d-block w-50 ' +
        carousel_data[i].class +
        '" src="' +
        carousel_data[i].carousel_elements[j].src +
        '?raw=true" alt="' +
        carousel_data[i].carousel_elements[j].alt +
        '" style="margin: auto;">' +
        '<div class="carousel-caption bg-dark d-none d-md-block"' +
        "<h5>" +
        carousel_data[i].carousel_elements[j].header +
        "</h5>" +
        "<p>" +
        carousel_data[i].carousel_elements[j].description +
        "</p>" +
        "</div>" +
        "</div>"; // Closing tag of "<div class=\"carousel-item\">"
    }

    // Closing tag of "<div class=\"carousel-inner\">"
    carousel_element = carousel_element + "</div>";

    for (j = 1; j <= 2; j = j + 1) {
      if (j == 1)
        carousel_element =
          carousel_element +
          '<a class="carousel-control-prev" href="#' +
          carousel_data[i].id +
          '" role="button" data-slide="prev">' +
          '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
          '<span class="sr-only">Previous</span>' +
          "</a>";
      else
        carousel_element =
          carousel_element +
          '<a class="carousel-control-next" href="#' +
          carousel_data[i].id +
          '" role="button" data-slide="next">' +
          '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
          '<span class="sr-only">Next</span>' +
          "</a>";
    }

    // Closing tag of "<div id=" + data[i].id + " class=\"carousel slide\" data-ride=\"carousel\">"
    carousel_element = carousel_element + "</div>";
  }
}

function populate_application_description() {
  var i = 0,
    j = 0;
  application_description_element =
    application_description_element +
    '<div class="card bg-light">' +
    '<div class="card-header">RYTD</div>' +
    '<div class="card-body">';

  // Stopping before "What you pay" because that has a different layout
  for (i = 0; i < application_description.length - 1; i = i + 1) {
    application_description_element =
      application_description_element +
      '<h5 class="card-title">' +
      application_description[i].card_title +
      "</h5>" +
      '<p class="card-text">' +
      application_description[i].card_text +
      "</p>" +
      "<hr>";
  }

  // Appending "Where to find"
  application_description_element =
    application_description_element +
    '<h5 class="card-title">' +
    application_description[2].card_title +
    "</h5>" +
    "<center>" +
    '<img src="' +
    download_links.qr_code +
    '" style="max-width: 15rem; padding-bottom: 5%">' +
    "</center>" +
    "<center>" +
    '<a href="' +
    download_links.app_store_badge_link +
    '" target="_blank" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height: 83px;">' +
    '<img src="' +
    download_links.app_store_badge_image +
    '"  alt="Download on the App Store" style="border-radius: 13px; width: 250px; height: 83px;">' +
    "</a>" +
    "</center>";
  "</div>" + "</div>";
}
