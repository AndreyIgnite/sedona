const button_parent_plus = document.querySelector("#parent-plus");
const button_parent_minus = document.querySelector("#parent-minus");
const parent_input = document.querySelector("#parents");

button_parent_plus.addEventListener("click", function(){
  if(parent_input.value < 10) {
  parent_input.value = Number(parent_input.value) + 1
  }
  else{
    parent_input.value = 10
  }
})

button_parent_minus.addEventListener("click", function(){
  if(parent_input.value > 1) {
  parent_input.value = Number(parent_input.value) - 1;
  }
  else{
    parent_input.value = 1
  }
})


const button_child_plus = document.querySelector("#child-plus");
const button_child_minus = document.querySelector("#child-minus");
const child_input = document.querySelector("#child");

button_child_plus.addEventListener("click", function(){
  if(child_input.value < 10) {
    child_input.value = Number(child_input.value) + 1
  }
  else{
    child_input.value = 10
  }
})

button_child_minus.addEventListener("click", function(){
  if(child_input.value > 0) {
    child_input.value = Number(child_input.value)-1
  }
  else{
    child_input.value = 0
  }
})


const search_btn = document.querySelector(".btn-search")
const close_btn = document.querySelector(".close")
const modal = document.querySelector(".modal-container")
search_btn.addEventListener("click", function(){
  modal.classList.remove("no-display-modal")
})
close_btn.addEventListener("click", function(){
  modal.classList.add("no-display-modal")
})


const child_info = document.querySelector(".children-info")
const black_plate = document.querySelector(".black-plate-info")
child_info.addEventListener("click", function(){
  black_plate.classList.toggle("black-plate-info-show")
})