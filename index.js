window.addEventListener(
  'load',
  () => {
    initScrollListener()
  },
  false
)

function initScrollListener () {
  window.addEventListener('scroll', () => {
    const skillsEl = document.getElementById('skills')
    const scrollToTop = document.getElementById('scrollTopButton')

    if (!skillsEl || !scrollToTop) {
      return
    }

    if (
      skillsEl.getBoundingClientRect().y <= 0 &&
      scrollToTop.classList.contains('opacity-0')
    ) {
      scrollToTop.classList.remove('opacity-0')
      console.log(scrollToTop.classList)
    } else if (
      skillsEl.getBoundingClientRect().y > 0 &&
      !scrollToTop.classList.contains('opacity-0')
    ) {
      scrollToTop.classList.add('opacity-0')
    }
  })
}
