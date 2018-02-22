document.addEventListener("DOMContentLoaded", function (event) {

	//console.log("hello")

	//1. identify the buttons

	var buttons = document.getElementsByClassName("buttonNum");
	var screen = document.getElementById("screen");
	var operator = document.getElementsByClassName ("operator");
	var equals = document.getElementsByClassName ("equals");
	var value1 = null;
	var operators = null; 
	var value2 = null;
	//console.log(buttons);

	//2. Add a loop which will assign all the values to the event listener, then assign an event to the function 
	//which will say what will happen when the event is looping through the assigned code. The screen is then 
	//changed so that after being clicked it displays the information which is in the target's innerHTML
	for (var i = 0 ; i < buttons.length ; i++) {
		buttons[i].addEventListener("click", function(event){
			screen.innerHTML = event.target.innerHTML;
			value1 = event.target.innerHTML; 
			console.log (value1);
		});
	}

	//3. Do the exact same thing as for the number values but replace the elements with the corresponding 
	//operator (+ - * /) element
	for (var i = 0 ; i < operator.length ; i++) {
		operator[i].addEventListener("click", function(event){
			screen.innerHTML = event.target.innerHTML;
			operators = event.target.innerHTML; 
			console.log (operators);
		});
	}

	


	//4. Extra variables need to be declared which are then assigned inside the body of the code in order
	//to store the selected numbers and operator.
	//When a button is pressed it is to be stored and then the operator is then stored too but not in a loop
	
	function answer() {
  var operator = ["+", "-", "*", ".", "/"];
  for (a=0; a<op.length; a++) {
    if (i.charAt(i.length - 1) === op[a]) {
      alert("Wrong input");
      return false;
    }
  }
  x = show.value;
  x = eval(x);
  show.value = x;
  reset = true;
}
	
});