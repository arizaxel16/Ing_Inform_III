// document.querySelectorAll(".carousel").forEach((carousel) => {
//     const items = carousel.querySelectorAll(".carousel__item");
//     const buttonsHtml = Array.from(items, () => {
//       return `<span class="carousel__button"></span>`;
//     });
  
//     carousel.insertAdjacentHTML(
//       "beforeend",
//       `
//           <div class="carousel__nav">
//               ${buttonsHtml.join("")}
//           </div>
//       `
//     );
  
//     const buttons = carousel.querySelectorAll(".carousel__button");
  
//     buttons.forEach((button, i) => {
//       button.addEventListener("click", () => {
//         items.forEach((item) =>
//           item.classList.remove("carousel__item--selected")
//         );
//         buttons.forEach((button) =>
//           button.classList.remove("carousel__button--selected")
//         );
  
//         items[i].classList.add("carousel__item--selected");
//         button.classList.add("carousel__button--selected");
//       });
//     });
  
//     items[0].classList.add("carousel__item--selected");
//     buttons[0].classList.add("carousel__button--selected");
// });

function onClickHandleSelection(index){
  document.querySelector(".carousel_btn--selected").classList.replace("carousel_btn--selected", "carousel_btn");
  document.getElementById("btn"+index).classList.replace("carousel_btn", "carousel_btn--selected");

  document.querySelector(".carousel_item--selected").classList.replace("carousel_item--selected", "carousel_item");
  document.getElementById("item"+index).classList.replace("carousel_item", "carousel_item--selected");
}

