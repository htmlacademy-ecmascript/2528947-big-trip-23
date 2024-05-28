import AbstractView from '../framework/view/abstract-view';
function funOffers(offers, point) {
  const offerFind = offers.find((offer) => offer.type === point.type);
  return `<section class="event__section  event__section--offers">
						<h3 class="event__section-title  event__section-title--offers">Offers</h3>
						<div class="event__available-offers">
							${offerFind.ObjOffers.map((offer) => `<div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
              <label class="event__offer-label" for="event-offer-luggage-1">
                <span class="event__offer-title">${offer.title}</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">${offer.price}</span>
              </label>
            </div>`).join('')}`;
}
export default class ClassOffers extends AbstractView {
  #offers = null;
  #point = null;
  constructor(offers, point) {
    super();
    this.#offers = offers;
    this.#point = point;
  }

  get template() {
    return funOffers(this.#offers, this.#point);
  }
}
