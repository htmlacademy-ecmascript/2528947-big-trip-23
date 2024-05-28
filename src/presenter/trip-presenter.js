import { replace, render } from '../framework/render';
import WayPoint from '../view/way_point';
import EditWayPoints from '../view/edit_way_point';
export default class TripPresenter {
  constructor(container, pointModel) {
    this.container = container;
    this.pointModel = pointModel;
  }

  init() {
    const offers = this.pointModel.getOffers();
    this.#renderEvents(offers);
  }

  #renderEvents(offers) {
    offers.forEach((offer) => this.#renderEvent(offer, offers));
  }

  #renderEvent(offer, offers) {
    const point = this.pointModel.getPoints();
    const destination = this.pointModel.getDestination();
    const onEditClick = () => swithToEditWayPoint();
    const onFormWayPoint = () => switchToWayPoint();
    const onEsc = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        switchToWayPoint();
      }
    };

    const wayPoint = new WayPoint(
      point,
      destination,
      offer,
      offers,
      onFormWayPoint
    );
    const eventEditView = new EditWayPoints(
      offers,
      offer,
      destination,
      point,
      onEditClick);

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
