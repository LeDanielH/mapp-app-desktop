process.env.NODE_ENV === 'production' ? module.exports = require('./prod.js') : module.exports = require('./dev.js');
import '../sass/index.scss';
import Modal from './modal';

Modal.init();