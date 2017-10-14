process.env.NODE_ENV === 'production' ? module.exports = require('./prod.js') : module.exports = require('./dev.js');
import '../sass/index.scss';
import Accordion from './accordion';
import SlideOut from './slideout';

const mappAccordion = new Accordion('.accordion__header', '.accordion__panel', '.accordion__content');
mappAccordion.init();
SlideOut.init();