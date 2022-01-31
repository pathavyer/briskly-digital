export default function initStickyNav() {
  const body = document.body;
  let lastScroll = 0;

  window.onscroll = function () {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      body.classList.remove('sUp');
      return;
    }

    if (currentScroll > lastScroll && !body.classList.contains('sDown')) {
      // down
      body.classList.remove('sUp');
      body.classList.add('sDown');
    } else if (currentScroll < lastScroll && body.classList.contains('sDown')) {
      // up
      body.classList.remove('sDown');
      body.classList.add('sUp');
    }

    lastScroll = currentScroll;
  }


}
