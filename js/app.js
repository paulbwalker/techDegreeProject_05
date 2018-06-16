const select = document.querySelector('.employee-list');

/* FETCH FUNCTIONS ----------------------------------------------- */

function fetchData(url) {
	return fetch(url)
		.then(res => res.json())
}

fetchData('https://randomuser.me/api/?nat=us,gb&results=12')
	.then(data => console.log(data.results))
	// 	// generateEmployees(data.results))
	// 	console.log(data.results))






/* HELPER FUNCTIONS ---------------------------------------------- */


	// const generateEmployees = (data) => {
	// 	const employees = data.map(item => `
	// 		<li class="employee-item">
	// 			<div class="container">
	// 				<h4>${ name }</h4>					
	// 				<p>${ email }</p>
	// 				<p>${ city }<p>
	// 			</div>
	// 		</li>
	// 	`);
	// 	select.innerHTML = employees;
	// }







/* EVENT LISTENERS ----------------------------------------------- */


/* MODAL --------------------------------------------------------- */

const modalCard = document.querySelectorAll('.card');
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

 	for (let i = 0; i < modalCard.length; i++) {
 		modalCard[i].style.cursor = 'pointer';
 		modalCard[i].addEventListener('click', function(event) {
			modal.style.display = "block";
 		});
 	}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");



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