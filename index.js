import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    navigation: true,
    pagination: { clickable: true },
  });