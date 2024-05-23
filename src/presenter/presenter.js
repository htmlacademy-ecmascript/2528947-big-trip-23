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
        switchToViewMode();
      }
    };
    const OnEditClick = () => swithToEditMode();
    const OnFormSubmit = () => switchToViewMode();
    const eventView = new WayPoint(
      point,
      destination,
      offer,
      offers,
      {
        OnEditClick: OnEditClick,
      });
    const eventEditView = new EditWayPoints(
      destination,
      point,
      {OnFormSubmit: OnFormSubmit,
        OnFormCansel: OnFormSubmit,
      });

    function swithToEditMode() {
      replace(eventView, eventEditView);
      document.addEventListener('keydown', onEsc);
    }

    function switchToViewMode() {
      replace(eventEditView, eventView);
      document.removeEventListener('keydown', onEsc);
    }

    render(eventView, this.container);
  }
}


