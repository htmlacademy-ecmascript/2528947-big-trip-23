import Presenter from './presenter/presenter.js';
import PointModel from '../model/PointModel.js';
const siteMainElement = document.querySelector('.trip-events');
const pointModel = new PointModel();
pointModel.init();
const presenter = new Presenter({boardContainer: siteMainElement, pointModel});
presenter.init();
