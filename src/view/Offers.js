import AbstractView from '../framework/view/abstract-view';

function funOffers(offers) {
  return `<section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>
            <div class="event__available-offers">
              ${offers.map((offer) => `<div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
              <label class="event__offer-label" for="event-offer-luggage-1">
                <span class="event__offer-title">${offer.title}</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">${offer.price}</span>
              </label>
            </div>`).join('')}
            </div>
          </section>`;
}

export default class ClassOffers extends AbstractView {
  #offers = null;

  constructor(offers) {
    super();
    this.#offers = offers;
  }

  get template() {
    const offerTemplate = funOffers(this.#offers);
    return offerTemplate;
  }
}
