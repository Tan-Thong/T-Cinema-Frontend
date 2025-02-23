export function initializeCarousel() {
  let nextDom = document.getElementById('next') as HTMLButtonElement;
  let prevDom = document.getElementById('prev') as HTMLButtonElement;
  
  let carouselDom = document.querySelector('.carousel') as HTMLElement;
  let SliderDom = carouselDom.querySelector('.carousel .list') as HTMLElement;
  let thumbnailBorderDom = document.querySelector('.carousel .thumbnail') as HTMLElement;
  let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item') as NodeListOf<HTMLElement>;
  let timeRunning: number = 1000;
  let timeAutoNext: number = 10000;

  thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

  let runTimeOut: ReturnType<typeof setTimeout>;
  let runNextAuto: ReturnType<typeof setTimeout> = setTimeout(() => {
    nextDom.click();
  }, timeAutoNext);

  function showSlider(type: 'next' | 'prev') {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item') as NodeListOf<HTMLElement>;
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item') as NodeListOf<HTMLElement>;

    if (type === 'next') {
      SliderDom.appendChild(SliderItemsDom[0]);
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      carouselDom.classList.add('next');
    } else {
      SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
      thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
      carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove('next');
      carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);
  }

  nextDom.onclick = () => showSlider('next');
  prevDom.onclick = () => showSlider('prev');
}
