import EditWayPoints from '../view/EditWayPoint.js';
import WayPoint from '../view/WayPoint.js';
import { render, RenderPosition} from '../../render.js';

export default class Presenter {

  constructor() {
    this.tripEvents = document.querySelector('.trip-events');
  }

  renderWayPoint () {
    render(new WayPoint(), this.tripEvents, RenderPosition.AFTERBEGIN);
  }

  renderEditWayPoints () {
    render(new EditWayPoints(), this.tripEvents, RenderPosition.AFTERBEGIN);
  }

  init() {
    this.renderWayPoint();
    this.renderEditWayPoints();
  }
}
