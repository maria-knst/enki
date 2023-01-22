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

modalContainer.innerHTML = '<img src="./images/certificates/certificate1.png" alt="certificate">';

let index = 1;
const startCertificateIndex = 1;
const lastCertificateIndex = 9;

const getPagination = (element, number, light) => {
  for(let i = 0; i < number; i++){
    if(i === 0){
      element.innerHTML += `<div id="${!light ? 'd':''}pag${i + 1}" class="pag_item ${light ? 'about_pag_item about_pag_selected_item' : 'pag_selected_item'}"></div>`;
    }else {
      element.innerHTML += `<div id="${!light ? 'd':''}pag${i + 1}" class="pag_item ${light && 'about_pag_item'}"></div>`;
    }
  }
}

getPagination(document.getElementById('modal-pagination'),lastCertificateIndex, true);
getPagination(document.getElementById('about-pagination'),lastCertificateIndex);

arrowPrev.addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById(`pag${index}`).classList.remove('about_pag_selected_item');
  index = (index <= startCertificateIndex) ? lastCertificateIndex : --index;
  modalContainer.innerHTML = `<img src="./images/certificates/certificate${index}.png" alt="certificate">`;
  document.getElementById(`pag${index}`).classList.add('about_pag_selected_item');
});

arrowNext.addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById(`pag${index}`).classList.remove('about_pag_selected_item');
  index = (index >= lastCertificateIndex) ? startCertificateIndex : ++index;
  modalContainer.innerHTML = `<img src="./images/certificates/certificate${index}.png" alt="certificate">`;
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