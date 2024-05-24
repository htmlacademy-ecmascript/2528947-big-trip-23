import { render, replace } from '../framework/render.js';
import DrawPoint from '../view/draw_point.js';
import EditWayPoints from '../view/edit_way_point.js';
import Filter from '../view/filter.js';
import WayPoint from '../view/way_point.js';
export default class Presenter {
  boardComponent = new DrawPoint();
  constructor({container, pointModel}) {
    this.container = container;
    this.pointModel = pointModel;
  }

  init() {
    this.#renderBoardComponent();
    this.#renderFilter();
    const offers = this.pointModel.getOffers();
    this.#renderEvents(offers);
  }

  #renderBoardComponent() {
    render(this.boardComponent, this.container);
  }

  #renderFilter() {
    render(new Filter(), this.container);
  }

  #renderEvents(offers) {
    offers.forEach((offer) => this.#renderEvent(offer, offers));
  }

  #renderEvent(offer, offers) {
    const point = this.pointModel.getPoints();
    const destination = this.pointModel.getDestination();
    const onEsc = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        switchToWayPoint();
      }
    };
    const OnEditClick = () => swithToEditWayPoint();
    const OnFormWayPoint = () => switchToWayPoint();
    const wayPoint = new WayPoint(
      point,
      destination,
      offer,
      offers,
      OnFormWayPoint
    );
    const eventEditView = new EditWayPoints(
      offers,
      offer,
      destination,
      point,
      OnEditClick,);

    function swithToEditWayPoint() {
      replace(wayPoint, eventEditView);
      document.addEventListener('keydown', onEsc);
    }

    function switchToWayPoint() {
      replace(eventEditView, wayPoint);
      document.removeEventListener('keydown', onEsc);
    }

    render(wayPoint, this.container);
  }
}


