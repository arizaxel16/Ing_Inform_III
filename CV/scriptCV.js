function onClickHandleSelection(index){
  document.querySelector(".carousel_btn--selected").classList.replace("carousel_btn--selected", "carousel_btn");
  document.getElementById("btn"+index).classList.replace("carousel_btn", "carousel_btn--selected");

  document.querySelector(".carousel_item--selected").classList.replace("carousel_item--selected", "carousel_item");
  document.getElementById("item"+index).classList.replace("carousel_item", "carousel_item--selected");
}

