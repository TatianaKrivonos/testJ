/*кнопка меню*/
let toggle = document.getElementById('toggle');
let menu = document.getElementById('menuList');

  toggle.addEventListener('click', menuVisible);
  function menuVisible(e) {
    e.preventDefault();
    toggle.classList.toggle('toggle--close');
    menu.classList.toggle('header-nav__wrap--open');
  };

/*show/hide content*/
let clickArea = document.querySelectorAll('.services__header');

clickArea.forEach(function(area){
  area.addEventListener('click', contentVisible);
  function contentVisible(e) {
    e.preventDefault();
    let content = area.parentNode.querySelector('.services__descr');
    content.classList.toggle('services__descr--active');
    let arrow = area.parentNode.querySelector('.services__arrow');
    arrow.classList.toggle('services__arrow--active');
  };
});

