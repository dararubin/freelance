

    // Get the modal
    var modal99 = document.getElementById('myModal99');

// Get the button that opens the modal
var btn = document.getElementById("myBtn99");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close99")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
	modal99.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal99.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal99) {
		modal99.style.display = "none";
	}
}


