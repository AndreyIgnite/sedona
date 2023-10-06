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


