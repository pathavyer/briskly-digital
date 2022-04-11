export default function twoColsImageResize() {
  let twoCols = [...document.querySelectorAll('.two-cols')];
  let mobileWidth = 720;
  let windowWidth;
  
  twoCols.forEach((el, i) => {
    let media = el.querySelector('.two-cols__media');
    let content = el.querySelector('.two-cols__content');
    let mediaHeight;
    let contentHeight;

    let onLoadFunction = () => {
      resizeFunction();
      window.addEventListener('resize', resizeFunction);
    }

    let resizeFunction = () => {
      mediaHeight = media.clientHeight;
      contentHeight = content.clientHeight;
      windowWidth = window.innerWidth;

      if (mediaHeight < contentHeight && windowWidth > mobileWidth) {
        media.classList.add('resized');
      } else if (mediaHeight > contentHeight && windowWidth < mobileWidth) {
        media.classList.remove('resized');
      }
    }

    window.addEventListener('load', onLoadFunction);
  });
}
