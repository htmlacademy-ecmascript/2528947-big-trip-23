import { createElement } from '../render';
import filter from './Filter';
import Offers from './Offers';

const CreateEventTypeList = (offer) =>
  `<div class="event__type-item">
<input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
<label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
</div>`;
const CreateBoxPoint = (des) => `<option value=${des.name}></option>`;
function editWayPoint(offers, points, destination) {
  const MapEventTypeList = offers.map((offer)=> CreateEventTypeList(offer)).join('');
  const BoxPoint = destination.map((des)=> CreateBoxPoint(des)).join('');
  return `<section class="trip-events">
	<h2 class="visually-hidden">Trip events</h2>
	${filter()}
	<ul class="trip-events__list">
		<li class="trip-events__item">
			<form class="event event--edit" action="#" method="post">
				<header class="event__header">
					<div class="event__type-wrapper">
						<label class="event__type  event__type-btn" for="event-type-toggle-1">
							<span class="visually-hidden">Choose event type</span>
							<img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
						</label>
						<input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

						<div class="event__type-list">
							<fieldset class="event__type-group">
								<legend class="visually-hidden">Event type</legend>
								${MapEventTypeList}
							</fieldset>
						</div>
					</div>

					<div class="event__field-group  event__field-group--destination">
						<label class="event__label  event__type-output" for="event-destination-1">
							Flight
						</label>
						<input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="" list="destination-list-1">
						<datalist id="destination-list-1">
						${BoxPoint}
						</datalist>
					</div>

					<button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
					<button class="event__reset-btn" type="reset">Cancel</button>
				</header>
				${Offers(offers, points)}
			</form>
		</li>`;
}

// eslint-disable-next-line camelcase
export default class EditWayPoints {
  constructor(offers, points, destination) {
    this.offers = offers;
    this.points = points;
    this.destination = destination;
  }

  getTemplate() {
    return editWayPoint(this.offers, this.points, this.destination);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
