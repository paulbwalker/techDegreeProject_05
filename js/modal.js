
/* MODAL --------------------------------------------------------- */
const modalEm = document.querySelector('.modal-employee');
const myModal = document.getElementById('myModal');
const modalContent = document.querySelectorAll('.modal-content');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];


// Get the modal
var modal = document.getElementById('myModal');

// Loop over the cards and add an event handler
for (let i = 0; i < modal.length; i++) {
	modal[i].addEventListener('click', function() {
		modal.style.display = "block";
	});
}




// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}