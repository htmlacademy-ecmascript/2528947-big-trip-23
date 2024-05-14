import PointModel from './model/PointModel.js';
import Presenter from './presenter/presenter.js';
const siteMainElement = document.querySelector('.trip-events');
const pointModel = new PointModel();
pointModel.init();
const presenter = new Presenter({boardContainer: siteMainElement, pointModel});
presenter.init();
