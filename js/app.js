const card = document.querySelectorAll('.card');
const cardContent = document.querySelector('.card-content');
const modal = document.querySelectorAll('.modal-content');


/* FETCH FUNCTIONS ----------------------------------------------- */

// This function assign the .then(response => response.json())
function fetchData(url) {
	return fetch(url)
		.then(res => res.json())
}

// You call the function fetchData to call .then(res => res.json) then chain data method
fetchData('https://randomuser.me/api/?nat=us,gb&results=12')
	.then(data => generateResults(data.results))

	

/* HELPER FUNCTIONS ---------------------------------------------- */

	function generateResults(data) {
		const employees = data.map(item => `
					<div class="card">
						<img class="avatar" src="${ item.picture.large }" alt="Avatar">
						<div class="container">
							<h4 class="name">${ item.name.first}  ${ item.name.last }</h4>
							<p class="email">${ item.email }</p>
							<p class="city">${ item.location.city }</p>
						</div>
					</div>
					<div class="modal modal-more-info container">
							<h4 class="Phone">${ item.phone }</h4>
							<p class="address">${ item.address }</p>
							<p class="dob">${ item.dob }</p>
						</div> 
					</div>
			`).join('');
			cardContent.innerHTML = employees;
		}


