import { createElement } from '../render';
import filter from './Filter';
import Offers from './Offers';
function editWayPoint(offers) {
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

								<div class="event__type-item">
									<input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
									<label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
								</div>

								<div class="event__type-item">
									<input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
									<label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
								</div>

								<div class="event__type-item">
									<input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
									<label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
								</div>

								<div class="event__type-item">
									<input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
									<label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
								</div>

								<div class="event__type-item">
									<input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
									<label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
								</div>

								<div class="event__type-item">
									<input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
									<label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
								</div>

								<div class="event__type-item">
									<input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
									<label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
								</div>

								<div class="event__type-item">
									<input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
									<label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
								</div>

								<div class="event__type-item">
									<input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
									<label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
								</div>
							</fieldset>
						</div>
					</div>

					<div class="event__field-group  event__field-group--destination">
						<label class="event__label  event__type-output" for="event-destination-1">
							Flight
						</label>
						<input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="" list="destination-list-1">
						<datalist id="destination-list-1">
							<option value="Amsterdam"></option>
							<option value="Geneva"></option>
							<option value="Chamonix"></option>
						</datalist>
					</div>

					<button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
					<button class="event__reset-btn" type="reset">Cancel</button>
				</header>
				${Offers(offers)}
			</form>
		</li>`;
}

// eslint-disable-next-line camelcase
export default class EditWayPoints {
  constructor(offers) {
    this.offers = offers;
  }

  getTemplate() {
    return editWayPoint(this.offers);
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
