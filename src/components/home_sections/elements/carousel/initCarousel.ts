import EmblaCarousel, { type EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

const AUTOPLAY_SPEED_IN_SECONDS = 4;

const plugins = [
  Autoplay({
    delay: AUTOPLAY_SPEED_IN_SECONDS * 1000,
    stopOnInteraction: false,
  }),
];
const emblaNodes = document.querySelectorAll('.carousel');
const options: EmblaOptionsType = {
  align: 'start',
  loop: true,
  slidesToScroll: 'auto',
};

emblaNodes.forEach((carousel) => {
  EmblaCarousel(carousel as HTMLElement, options, plugins);
});