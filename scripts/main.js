const activities = document.querySelectorAll(".activities_container-element");
const showMoreBut = document.getElementById("activities_show-more");

showMoreBut.addEventListener("click", (e) => {
  e.preventDefault();

  activities.forEach((item) => {
    item.classList.remove("hidden-element");
  });
  showMoreBut.classList.add("activities_show-more-hidden");
});


const modal = document.getElementById('about_icon-modal');
const showButton = document.getElementById('show-modal');

const modalContainer = document.getElementById('about-modal-container');
const closeModal = document.getElementById('close-modal');
const arrowPrev = document.getElementById('arrow-prev');
const arrowNext = document.getElementById('arrow-next');

modalContainer.innerHTML = '<img src="./images/certificates/certificate1.jpg" alt="certificate">';
let index = 1;

arrowPrev.addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById(`pag${index}`).classList.remove('about_pag_selected_item');
  if(index <= 1){
    index = 3;
  }
  else {
    index--;
  }
  modalContainer.innerHTML = `<img src="./images/certificates/certificate${index}.jpg" alt="certificate">`;
  document.getElementById(`pag${index}`).classList.add('about_pag_selected_item');
});

arrowNext.addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById(`pag${index}`).classList.remove('about_pag_selected_item');
  if(index >= 3){
    index = 1;
  }
  else {
    index++;
  }
  modalContainer.innerHTML = `<img src="./images/certificates/certificate${index}.jpg" alt="certificate">`;
  document.getElementById(`pag${index}`).classList.add('about_pag_selected_item');
});

closeModal.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('CLOSE');
  modal.classList.toggle('hidden-element');
});

showButton.addEventListener('click', (event) => {
  event.preventDefault();
  modal.classList.toggle('hidden-element');
});