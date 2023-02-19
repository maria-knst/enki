import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

const activities = document.querySelectorAll(".activities_container-element");
const activities_m = document.querySelectorAll(".activities_container-element-m");
const list_items = document.querySelectorAll(".header-menu_list-item_clicked");
const showMoreBut = document.getElementById("activities_show-more");

window.addEventListener('resize', (e) => {
  location.reload();
});

if(window.innerWidth < 1200){
  showMoreBut.innerHTML = '<img src="./images/arrow.svg" alt="arrow">';
}

showMoreBut.addEventListener("click", (e) => {
  e.preventDefault();

  activities.forEach((item) => {
    item.classList.remove("hidden-element");
  });
  activities_m.forEach((item) => {
    item.classList.remove("hidden-element");
  });

  showMoreBut.classList.add("activities_show-more-hidden");
});

list_items.forEach(item => {
  item.addEventListener('click', (ev) => {
    ev.preventDefault();
    document.getElementById('header-menu_modal').classList.add('hidden');
    document.getElementById('header-menu').classList.remove('header-menu_active');
  });
})

const modal = document.getElementById('about_icon-modal');
const showButton = document.getElementById('show-modal');

const closeModal = document.getElementById('close-modal');

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

getPagination(document.getElementById('about-pagination'),lastCertificateIndex);


closeModal.addEventListener('click', (event) => {
  event.preventDefault();
  modal.classList.toggle('hidden-element');
});

showButton.addEventListener('click', (event) => {
  event.preventDefault();
  modal.classList.toggle('hidden-element');
});

document.getElementById('header-menu').addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('header-menu_modal').classList.toggle('hidden');
  document.getElementById('header-menu').classList.toggle('header-menu_active');
});

const getTrustPage = (event) => {
  event.preventDefault();
  document.getElementById('main-content').classList.add('hidden-element');
  document.getElementById('trust-content').classList.remove('hidden-element');
};
const getAnchor = (event, anchor) => {
  event.preventDefault();
  document.getElementById('trust-content').classList.add('hidden-element');
  document.getElementById('main-content').classList.remove('hidden-element');
  switch (anchor){
    case 'about-company':
      document.getElementById('about-section').scrollIntoView();
      break;
    case 'actions':
      document.getElementById('activities-section').scrollIntoView();
      break;
    case 'contacts':
      document.getElementById('contacts').scrollIntoView();
      break;
    default:
      document.getElementById('header').scrollIntoView();
      break;
  }
}


document.querySelectorAll('.get-trust_page').forEach(item => {
  item.addEventListener('click', getTrustPage);
});
document.querySelectorAll('.get-main_page').forEach(item => {
  item.addEventListener('click', (event) => getAnchor(event));
});

document.querySelectorAll('.get-about-company_page').forEach(item => {
  item.addEventListener('click', (event) =>  getAnchor(event,'about-company'));
});
document.querySelectorAll('.get-actions_page').forEach(item => {
  item.addEventListener('click', (event) => getAnchor(event, 'actions'));
});
document.querySelectorAll('.get-footer_page').forEach(item => {
  item.addEventListener('click', (event) => getAnchor(event, 'contacts'));
});



document.getElementById('menu_item_contacts_p').addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('menu_item_contacts').classList.toggle('header-menu_list-item_active');
  document.getElementById('header_phone-group_menu_contacts').classList.toggle('hidden');

});

document.getElementById('menu_item_address_p').addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('menu_item_address').classList.toggle('header-menu_list-item_active');
  document.getElementById('header_location-group_menu').classList.toggle('hidden');

});


if(window.innerWidth <= 1200 && window.innerWidth >= 720) {
  document.getElementById('benefits-section_info-container').classList.add('benefits-swiper');
  document.getElementById('benefits-section_info-container').classList.add('swiper');
  document.getElementById('swiper-wrapper').classList.add('swiper-wrapper');
  document.querySelectorAll('.info-element').forEach(item => {
    item.classList.add('swiper-slide');
  });

}

const swiper1 = new Swiper(".benefits-swiper", {
  slidesPerView: 2,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 1000,
  },
});


const swiper2 = new Swiper(".modal-swiper", {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


