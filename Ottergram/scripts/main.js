"use strict";
const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

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
  });
}

function getThumbnailArray() {
  let thumbs = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  return [].slice.call(thumbs);
}

function initializeEvents() {
  let thumbs = getThumbnailArray();
  thumbs.forEach(addThumbClickHandler);
}
initializeEvents();
