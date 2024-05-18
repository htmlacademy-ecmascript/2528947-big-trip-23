import { render } from '../render.js';
import DrawPoint from '../view/DrawPoint.js';
import EditWayPoints from '../view/EditWayPoint.js';
import WayPoint from '../view/WayPoint.js';
import { getDefoltPoint } from '../../const.js';

export default class Presenter {
  boardComponent = new DrawPoint();
  constructor({boardContainer, pointModel}) {
    this.boardContainer = boardContainer;
    this.pointModel = pointModel;
    // this.destination = destination;
  }

  renderBoardComponent () {
    render(this.boardComponent, this.boardContainer);
  }

  init() {
    // eslint-disable-next-line no-unused-vars
    const points = this.pointModel.getPoints();
    const destinations = this.pointModel.getDestination();
    const offers = this.pointModel.getOffers();
    this.renderBoardComponent();
    this.renderFilter();
    render(new EditWayPoints(getDefoltPoint(), destinations, points[1]), this.boardContainer);
    render(new EditWayPoints(offers, destinations, points[1]), this.boardContainer);
    points.forEach((point) => {
      render(new WayPoint(point, destinations), this.boardContainer);
    });
  }
}

