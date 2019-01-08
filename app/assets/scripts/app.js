import $ from 'jquery';
import MobileMenu from './modules/mobile-menu';
import RevealOnScroll from './modules/reveal-on-scroll';

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonial'), '60%');