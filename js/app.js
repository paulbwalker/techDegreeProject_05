'use strict';

const cardContent = document.querySelector('.card-content');
const card = document.querySelectorAll('.card');
const modalDisplay = document.querySelector('.modal-display');
const myModal = document.getElementById('myModal');
const modalInfo = document.getElementsByClassName('modal-info');
const modal = document.getElementsByClassName('modal');

/* FETCH FUNCTIONS ----------------------------------------------- */

// This function assign the .then(response => response.json())
function fetchData(url) {
	return fetch(url)
		.then(res => res.json())
}


/* HELPER FUNCTIONS ---------------------------------------------- */


	(function generateResults() {

    // You call the function fetchData to call .then(res => res.json) then chain data method
    fetchData('https://randomuser.me/api/?nat=us,gb&results=12')

    // .then(data => console.log(data.results))	
    .then(data => {
      const listEmployee = data.results;
      data.results.map(results => {
        cardContent.innerHTML += `
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
      const card = document.querySelectorAll('.card');
      employeeDetail(listEmployee, card);
  })
  })();  

  
  /* MODAL --------------------------------------------------------- */

// Pass through generateResults add eventListener to get modal

function employeeDetail ( listEmployee, card) {
  const generateModal = listEmployee.map(items =>  `
      <div id="myModal" class="modal">
        <div class="modal-content">        
          <div class="modal-info">
            <span class="close">&times;</span>
                <img src="${ items.picture.large }" class="modal-avatar cf" alt="Avatar">
                <div class="modal-text">
                  <h4 class="name">${ items.name.first}  ${ items.name.last }</h4>
                  <p class="email">${ items.email }</p>
                  <p class="city">${ items.location.city }</p>
                </div>
                <div class="arrow cf">
                  <span class="prev">&lt;</span>
                  <span class="next">&gt;</span>
                </div> 
                <div class="modal-more-info">
                  <h4 class="cell">${ items.cell }</h4>
                  <p class="address">${ items.location.street }, ${ items.location.state } ${ items.location.postcode }
                  </p>
                  <p class="dob">Birthday: ${ items.dob.date }</p>
                </div>
            </div>
        </div>
      </div> 
    `).join('');
    const modal = document.querySelectorAll('.modal');
    modalDisplay.innerHTML = generateModal;
    modalDetails(card);
  }



function modalDetails (card) {
  let modalCollection = [];
  for (let i = 0; i < card.length; i++) { 
    modalCollection += card;
    const closeX = modal[i].querySelector('.close');
    const ltMark = modal[i].querySelector('.prev');  
    card[i].addEventListener('click', () => {
      modal[i].style.display = 'block';
    }); 
    closeX.addEventListener('click', () => { 
      modal[i].style.display = 'none';     
    }); 
    ltMark.addEventListener('click', (e) => { 
      for(let i = 0; i < modal.length; i++) {
        console.log(modal[i]);
      }
    });
  }
}


