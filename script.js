document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (event) {
    event.preventDefault()
    const targetId = this.getAttribute('href').substring(1)
    const targetSection = document.getElementById(targetId)
    targetSection.scrollIntoView({
      behavior: 'smooth'
    })
  })
})

const animateOnScrollElements = document.querySelectorAll(".animate-on-scroll")

const scrollHandler = () => {
    animateOnScrollElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top
        const viewHeight = window.innerHeight
        if (elementPosition < viewHeight - 100) {
            element.classList.add("visible")
        }
    })
}

window.addEventListener("scroll", scrollHandler)