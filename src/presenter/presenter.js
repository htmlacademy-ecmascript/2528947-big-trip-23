import { render } from '../framework/render.js';
import DrawPoint from '../view/draw_point.js';
import EditWayPoints from '../view/edit_way_point.js';
import WayPoint from '../view/way_point.js';
import Filter from '../view/filter.js';
import { getDefoltPoint } from '../../const.js';

export default class Presenter {
  boardComponent = new DrawPoint();
  #boardContainer = null;
  #pointModel = null;
  constructor({boardContainer, pointModel}) {
    this.#boardContainer = boardContainer;
    this.#pointModel = pointModel;
  }

  #renderBoardComponent () {
    render(this.boardComponent, this.#boardContainer);
  }

  #renderFilter () {
    render(new Filter(), this.#boardContainer);
  }

  init() {
    const points = this.#pointModel.getPoints();
    const destinations = this.#pointModel.getDestination();
    const offers = this.#pointModel.getOffers();
    this.#renderBoardComponent();
    this.#renderFilter();
    render(new EditWayPoints(offers, destinations, points[1]), this.#boardContainer);
    render(new EditWayPoints(getDefoltPoint(), destinations, points[1]), this.#boardContainer);
    points.forEach((point) => {
      render(new WayPoint(point, destinations), this.#boardContainer);
    });
  }
}

