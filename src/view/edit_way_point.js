import AbstractView from '../framework/view/abstract-view';
import ClassOffers from './Offers';
const CreateBoxPoint = (des) => `<option value=${des.name}></option>`;
const CreateEventTypeList = (offer) =>
  `<div class="event__type-item">
<input id="event-type-${offer.type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value=${offer.type}>
<label class="event__type-label  event__type-label--${offer.type}" for="event-type-${offer.type}-1">${offer.type}</label>
</div>`;
function editWayPoint(offers, destination, point) {
  const {description, pictures} = destination;
  const MapEventTypeList = offers.map((offer)=> CreateEventTypeList(offer)).join('');
  const BoxPoint = destination.map((des)=> CreateBoxPoint(des)).join('');
  return `<section class="trip-events">
	<h2 class="visually-hidden">Trip events</h2>
			<form class="event event--edit" action="#" method="post">
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
				${new ClassOffers(offers, point).template}
				<section class="event__details">
                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${description}</p>

                    <div class="event__photos-container">
                      <div class="event__photos-tape">${pictures.map((pic) =>`<img class="event__photo" src="${pic.src}" alt="${pic.description}"></img>`)}
                      </div>
                    </div>
                  </section>
			</form>
		</li>`;
}
export default class EditWayPoints extends AbstractView {
  #offers = null;
  #destination = null;
  #point = null;
  constructor(offers, destination, point) {
    super();
    this.#offers = offers;
    this.#destination = destination;
    this.#point = point;

  }

  get template() {
    return editWayPoint(this.#offers, this.#destination, this.#point);
  }
}
