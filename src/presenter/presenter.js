import { render } from '../framework/render.js';
import DrawPoint from '../view/draw_point.js';
import Filter from '../view/Filter.js';
import TripPresenter from './trip-presenter.js';
export default class Presenter {
  boardComponent = new DrawPoint();
  constructor({container, pointModel}) {
    this.container = container;
    this.pointModel = pointModel;
  }

  init() {
    this.#renderBoardComponent();
    this.#renderFilter();
    this.#renderTrip();
  }

  #renderBoardComponent() {
    render(this.boardComponent, this.container);
  }

  #renderFilter() {
    render(new Filter(), this.container);
  }

  #renderTrip() {
    const TripPres = new TripPresenter(this.container, this.pointModel);
    TripPres.init();
  }

}


