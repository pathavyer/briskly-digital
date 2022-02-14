export default function twoColsImageResize() {
  let twoCols = document.querySelectorAll('.two-cols');
  let windowWidth = window.innerWidth;
  let mobileWidth = 720;

  twoCols.forEach((el, i) => {
    const media = el.querySelector('.two-cols__media');
    const content = el.querySelector('.two-cols__content');
    let mediaHeight = media.clientHeight;
    let contentHeight = content.clientHeight;

    let resizeOnLoad = () => {
      console.log(windowWidth);

      window.addEventListener('resize', () => {
        mediaHeight = media.clientHeight;
        contentHeight = content.clientHeight;
        windowWidth = window.innerWidth;


        if (mediaHeight <= contentHeight && windowWidth > mobileWidth) {
          media.style.height = contentHeight + "px";
        } else {
          media.style.height = null;
        }
      });
    }

    resizeOnLoad();
  });

}