;

let menuBtn = document.querySelector('.icon-menu');
   menuBtn.addEventListener('click', function(){
      document.querySelector('.icon-menu').classList.toggle('active');
      document.querySelector('.menu__body').classList.toggle('active');
      document.querySelector('#body').classList.toggle('lock');
});

const tabsBtn = document.querySelectorAll('.menu-link');
tabsBtn.forEach(function(item){
item.addEventListener('click', function (e) {
   e.preventDefault();
   let currentBtn = item;
   tabsBtn.forEach(function (item) {
      item.classList.remove('active');
   });
   currentBtn.classList.add('active');
});   
});

