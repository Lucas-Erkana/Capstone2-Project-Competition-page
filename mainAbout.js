const phoneMenuList = document.querySelector('.menu-sec');
const menuIcon = document.querySelector('.menu');

menuIcon.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu')) {
    phoneMenuList.style.display = 'flex';
    menuIcon.style.display = 'none';
  }
});

phoneMenuList.addEventListener('click', (e) => {
  const clicked = e.target.classList.contains('links');
  if (clicked) {
    phoneMenuList.style.display = 'none';
    menuIcon.style.display = 'flex';
  }
});