const card = document.querySelectorAll('.card');
const cardContent = document.querySelector('.card-content');
const modalEm = document.querySelector('.modal-employee');
const myModal = document.getElementById('myModal');



/* FETCH FUNCTIONS ----------------------------------------------- */

// This function assign the .then(response => response.json())
function fetchData(url) {
	return fetch(url)
		.then(res => res.json())
}

fetchData('https://randomuser.me/api/?nat=us,gb&results=12')
	.then(data => generateResults(data.results))
	// .then(data => console.log(data.results))	
	



/* HELPER FUNCTIONS ---------------------------------------------- */

	let employee = [];
	function generateResults(data) {
		data.forEach(function (results) {
			employee += `
				<div class="card">
					<img class="avatar" src="${ results.picture.large }" alt="Avatar">
					<div class="container">
						<h4 class="name">${ results.name.first}  ${ results.name.last }</h4>
						<p class="email">${ results.email }</p>
						<p class="city">${ results.location.city }</p>
					</div>
				</div>
			`;
		});
		cardContent.innerHTML = employee;
	}

	function generateModal(data) {
		const modalContent = data.forEach(results => `
				<div class="modal-content">
					<span class="close">&times;</span>
					<div class="card">
						<img class="avatar" src="${ results.picture.large }" alt="Avatar">
						<div class="container">
							<h4 class="name">${ results.name.first}  ${ results.name.last }</h4>
							<p class="email">${ results.email }</p>
							<p class="city">${ results.location.city }</p>
						</div>
					</div>
					<div class="modal-more-info container">
						<h4 class="Phone">${ results.phone }</h4>
						<p class="address">${ results.address }</p>
						<p class="dob">${ results.dob }</p>
					</div> 
				</div>
			`);
			myModal.innerHTML = modalContent;
		}

/* MODAL --------------------------------------------------------- */


// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");



// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}