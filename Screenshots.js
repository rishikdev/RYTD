import data_light from "./Data/data_light.js";
import data_dark from "./Data/data_dark.js";

$(document).ready(function () {
  populate_images();
  $("#contentParent").append(image_element);
});

var image_element = "";
var css_style = "";
var viewport_height = window.innerHeight;
var viewport_width = window.innerWidth;

function populate_images() {
  var i = 0,
    j = 0;

  for (i = 0; i < data_light.length; i = i + 1) {
    set_css_style();

    if (
      (!is_mobile_device() && data_light[i].device == "MacBook") ||
      data_light[i].device == "iPad"
    ) {
      css_style = 'style="max-width : 70%"';
    }

    image_element =
      image_element +
      '<div class="d-flex justify-content-center">' +
      '<div class="card-group d-flex justify-content-center">';

    for (j = 0; j < data_light[i].carousel_elements.length; j = j + 1) {
      image_element =
        image_element +
        '<img class="center screenshot" src="' +
        data_light[i].carousel_elements[j].src +
        '?raw=true" alt="' +
        data_light[i].carousel_elements[j].alt +
        '"' +
        css_style +
        ">";
    }

    if (i < data_dark.length) {
      set_css_style();

      if (
        (!is_mobile_device() && data_dark[i].device == "MacBook") ||
        data_dark[i].device == "iPad"
      ) {
        css_style = 'style="max-width : 70%"';
      }

      for (j = 0; j < data_dark[i].carousel_elements.length; j = j + 1) {
        image_element =
          image_element +
          '<img class="center screenshot" src="' +
          data_dark[i].carousel_elements[j].src +
          '?raw=true" alt="' +
          data_dark[i].carousel_elements[j].alt +
          '"' +
          css_style +
          ">";
      }
    }

    if (i < data_light.length - 1)
      image_element = image_element + "</div>" + "</div>" + "<hr>";
    else image_element = image_element + "</div>" + "</div>";
  }
}

function is_mobile_device() {
  return viewport_height > viewport_width;
}

function set_css_style() {
  if (is_mobile_device()) {
    css_style = 'style="min-width : 80%"';
  } else {
    css_style = 'style="max-width : 20%; margin : 5%"';
  }
}
