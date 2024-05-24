import AbstractView from '../framework/view/abstract-view';
import ClassOffers from './Offers';
const CreateBoxPoint = (des) => `<option value=${des.name}></option>`;
const CreateEventTypeList = (off) =>
  `<div class="event__type-item">
<input id="event-type-${off.type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value=${off.type}>
<label class="event__type-label  event__type-label--${off.type}" for="event-type-${off.type}-1">${off.type}</label>
</div>`;
function editWayPoint(offers, offer, destination, point) {
  const currentPoint = point.find((poi) => poi.type === offer.type);
  const {description} = destination;
  const MapEventTypeList = offers.map((off)=> CreateEventTypeList(off)).join('');
  const BoxPoint = destination.map((des)=> CreateBoxPoint(des)).join('');
  return `<section class="trip-events">
	<h2 class="visually-hidden">Trip events</h2>
			<form class="event event--edit" action="#" method="post">
			<button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
				<header class="event__header">
					<div class="event__type-wrapper">
						<label class="event__type  event__type-btn" for="event-type-toggle-1">
							<span class="visually-hidden">Choose event type</span>
							<img class="event__type-icon" width="17" height="17" src="img/icons/${point.type}.png" alt="Event type icon">
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
							${point.type}
						</label>
						<input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="" list="destination-list-1">
						<datalist id="destination-list-1">
						${BoxPoint}
						</datalist>
					</div>

					<button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
					<button class="event__reset-btn" type="reset">${point.id ? 'Delete' : 'Cansel'}</button>
				</header>
				${new ClassOffers(offers, currentPoint).template}
				<section class="event__details">
                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${description}</p>

                    <div class="event__photos-container">
                      <div class="event__photos-tape">${destination[0].pictures.map((pic) =>`<img class="event__photo" src="${pic.src}" alt="${pic.description}"></img>`)}
                      </div>
                    </div>
                  </section>
			</form>
			</section>`;
}
export default class EditWayPoints extends AbstractView {
  #offers = null;
  #offer = null;
  #destination = null;
  #point = null;
  constructor(offers, offer, destination, point) {
    super();
    this.#offers = offers;
    this.#offer = offer;
    this.#destination = destination;
    this.#point = point;
  }

  get template() {
    return editWayPoint(this.#offers, this.#offer, this.#destination, this.#point);
  }
}
