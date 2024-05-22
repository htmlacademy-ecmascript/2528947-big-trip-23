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
    this.#renderEvents();
  }

  #renderBoardComponent() {
    render(this.boardComponent, this.container);
  }

  #renderFilter() {
    render(new Filter(), this.container);
  }

  #renderEvents() {
    const offers = this.pointModel.getOffers();
    offers.forEach((offer) => this.#renderEvent(offer, offers));
  }

  #renderEvent(offer, offers) {
    const point = this.pointModel.getPoints();
    const destination = this.pointModel.getDestination();
    const onEsc = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        swithToViewMode();
      }
    };
    const OnEditClick = () => swithToEditMode();
    const OnFormSubmit = () => swithToViewMode();
    const eventView = new WayPoint({
      point,
      destination,
      OnEditClick: OnEditClick,
    });
    const eventEditView = new EditWayPoints({
      offer,
      offers,
      destination,
      OnFormSubmit: OnFormSubmit,
      OnFormCansel: OnFormSubmit,
    });

    function swithToEditMode() {
      replace(eventView, eventEditView);
      document.addEventListener('keydown', onEsc);
    }

    function swithToViewMode() {
      replace(eventEditView, eventView);
      document.removeEventListener('keydown', onEsc);
    }

    render(eventView, this.container);
  }
}


