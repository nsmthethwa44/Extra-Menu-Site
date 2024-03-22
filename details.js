const urlParams = new URLSearchParams(window.location.search);
const itemId = parseInt(urlParams.get('id'));

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const item = data.special.find(item => item.id === itemId);
    if (item) {
      let itemDetails = document.querySelector('.itemContainerBox');
      itemDetails.innerHTML = `
      <div class="box">
      <div class="imgBox">
          <img src="${item.poster}" alt="" class="boxImg">
      </div>
  </div>
  <div class="box">
      <div class="textBox">
          <h3 class="title">Lorem ipsum dolor sit amet.</h3>
          <h2 class="price">R45.00</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Aperiam eius adipisci aliquid in
               incidunt harum iste excepturi neque dolore omnis!</p>
               <div class="button">
                  <a href="#"><button class="btn order">Order Now<i class="fa-solid fa-arrow-right-long"></i></button></a>
               </div>
      </div>
  </div>
      `;
    }
  })
//   .catch(error => console.error('Error fetching data:', error));
//   function goBack() {
//     window.history.back();
//   }

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const item = data.popular.find(item => item.id === itemId);
    if (item) {
      let itemDetails = document.querySelector('.itemContainerBox');
      itemDetails.innerHTML = `
      <div class="box">
      <div class="imgBox">
          <img src="${item.poster}" alt="" class="boxImg">
      </div>
  </div>
  <div class="box">
      <div class="textBox">
          <h3 class="title">Lorem ipsum dolor sit amet.</h3>
          <h2 class="price">R45.00</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Aperiam eius adipisci aliquid in
               incidunt harum iste excepturi neque dolore omnis!</p>
               <div class="button">
                  <a href="#"><button class="btn order">Order Now<i class="fa-solid fa-arrow-right-long"></i></button></a>
               </div>
      </div>
  </div>
      `;
    }
  })
  .catch(error => console.error('Error fetching data:', error));
  function goBack() {
    window.history.back();
  }
