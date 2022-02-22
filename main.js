window.onload = () => {
  const hamburgerMenu = document.querySelector('.hamburger')
  hamburgerMenu.addEventListener('click', () => {
    let hamburger = document.getElementById('menu-mobile')
    hamburger.style.display = 'block'
  })
}
