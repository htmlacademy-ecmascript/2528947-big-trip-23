import PointModel from './model/point_model.js';
import Presenter from './presenter/presenter.js';
const siteMainElement = document.querySelector('.trip-events');
const pointModel = new PointModel();
pointModel.init();
const presenter = new Presenter({container: siteMainElement, pointModel});
presenter.init();
