
fetch('data.json')
.then(response => response.json())
.then(data => {
  let  specialBox = document.querySelector('.specialBox');
  let specialOutPut = '';
  data.special.forEach(item => {
    specialOutPut += `
    <a href="details.html?id=${item.id}">
         <div class="box">
             <div class="boxImg">
                 <img src="${item.poster}" alt="" class="imgBox">
                </div>
                <div class="textBox">
                   <h3>${item.title}</h3>
                    <p>${item.price}</p>
                    </div>
             </div>
     </a>
    `;
  });
  specialBox.innerHTML = specialOutPut;
}
)
.catch(error => console.error('Error fetching data:', error));

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  fetch('data.json')
.then(response => response.json())
.then(data => {
  let  popularBox = document.querySelector('.popularBox');
  let popularOutPut = '';
  data.popular.forEach(item => {
    popularOutPut += `
    <a href="details.html?id=${item.id}">
         <div class="box">
             <div class="boxImg">
                 <img src="${item.poster}" alt="" class="imgBox">
                </div>
                <div class="textBox">
                   <h3>${item.title}</h3>
                    <p>${item.price}</p>
                    </div>
             </div>
     </a>
    `;
  });
  popularBox.innerHTML = popularOutPut;
}
)
.catch(error => console.error('Error fetching data:', error));

let header = document.querySelector(".header");
let arrowUp = document.querySelector(".goTop");
let menu = document.querySelector(".hamburger");
let navbar = document.querySelector(".navbar");

window.onscroll = () =>{
  menu.classList.remove("close");
  navbar.classList.remove("active")

  if (window.scrollY >2){
    arrowUp.classList.add("active");
  }else{
    arrowUp.classList.remove("active");
  }
}
menu.onclick = () =>{
  menu.classList.toggle("close");
  navbar.classList.toggle("active")
}

// when nav link is clicked add active class
// remove current active class
let navLink = document.querySelectorAll(".header .container .navbar .nav li a");
Array.from(navLink).forEach((item) => {
  item.onclick = (e) => {
    let currentNavLink = document.querySelector(".header .container .navbar .nav li a.active");
    currentNavLink.classList.remove("active");
    e.target.classList.add("active");
    navbar.classList.remove("active");
    menu.classList.remove("close");
  }
});