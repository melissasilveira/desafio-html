window.onload = () => {
  const hamburgerMenu = document.querySelector('.hamburger')
  hamburgerMenu.addEventListener('click', () => {
    let hamburger = document.getElementById('menu-mobile')
    hamburger.style.display = 'block'
  })

  const hamburgerClose = document.querySelector('.hamburger-close')
  hamburgerClose.addEventListener('click', () => {
    let closeMenu = document.getElementById('menu-mobile')
    closeMenu.style.display = 'none'
  })

  const linkClose = document.querySelectorAll('.links-mobile')
  linkClose.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      let linkCloseMenu = document.getElementById('menu-mobile')
      linkCloseMenu.style.display = 'none'
    })
  })
  const form = document.querySelector('.contact-form')
  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const message = formData.get('message')
    let data = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    }
    try {
      const resp = await (
        await fetch('https://otterwise-fake-api.herokuapp.com/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(data),
        })
      ).json()
      console.log(resp)
    } catch (error) {
      console.log(error)
    }
  })
}
