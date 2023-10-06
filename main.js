const button_parent_plus = document.querySelector("#parent-plus");
const button_parent_minus = document.querySelector("#parent-minus");
const parent_input = document.querySelector("#parents");

button_parent_plus.addEventListener("click", function(){
  if(parent_input.value < 10) {
  parent_input.value = ++parent_input.value
  }
  else{
    parent_input.value = 10
  }
})

button_parent_minus.addEventListener("click", function(){
  if(parent_input.value > 1) {
  parent_input.value = --parent_input.value
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
    child_input.value = ++child_input.value
  }
  else{
    child_input.value = 10
  }
})

button_child_minus.addEventListener("click", function(){
  if(child_input.value > 1) {
    child_input.value = --child_input.value
  }
  else{
    child_input.value = 1
  }
})


