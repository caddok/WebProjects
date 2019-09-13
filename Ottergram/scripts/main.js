"use strict";
const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
const HIDDEN_DETAIL_CLASS = "hidden-detail";
const DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
const TINY_EFFECT_CLASS = "is-tiny";
const ESC_KEY = 27;

function setDetails(imageUrl, titleText) {
  let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute("src", imageUrl);

  let detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumbnail(thumbnail) {
  return thumbnail.getAttribute("data-image-url");
}

function titleFromThumbnail(thumbnail) {
  return thumbnail.getAttribute("data-image-title");
}

function setDetailsFromThumb(thumbnail) {
  setDetails(imageFromThumbnail(thumbnail), titleFromThumbnail(thumbnail));
}

function addThumbClickHandler(thumb) {
  thumb.addEventListener("click", function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
    showDetails();
  });
}

function getThumbnailArray() {
  let thumbs = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  return [].slice.call(thumbs);
}

function hideDetails() {
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function addKeyPressHandler() {
  document.body.addEventListener("keyup", function(event) {
    event.preventDefault();
    console.log(event.keyCode);
    if (event.keyCode === ESC_KEY) {
      hideDetails();
    }
  });
}

function showDetails() {
  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function() {
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);
}

function initializeEvents() {
  let thumbs = getThumbnailArray();
  thumbs.forEach(addThumbClickHandler);
  addKeyPressHandler();
}
initializeEvents();
