var popupForm = document.querySelector(".up-window");

if (popupForm) {
  var actionButton = document.querySelector(".modal-button");
  var searchButton = popupForm.querySelector(".form-button");
  var dateIn = popupForm.querySelector(".input-focus");

  actionButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupForm.classList.toggle("show-form");
    popupForm.classList.add("show-form-animation");
    dateIn.focus();
  });

  searchButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupForm.classList.remove("show-form");
  });
}
