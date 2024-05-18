import { createElement } from '../render';
const CreateOffers = (findOfferFind) =>
  `<div class="event__offer-selector">
	<input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
	<label class="event__offer-label" for="event-offer-luggage-1">
		<span class="event__offer-title">${findOfferFind.title}</span>
		&plus;&euro;&nbsp;
		<span class="event__offer-price">${findOfferFind.price}</span>
	</label>
</div>`;
function funOffers(offers, point) {
  const offerFind = offers.find((offer) => offer.type === point.type);
  const findOfferFind = offerFind.ObjOffers.map((offer) => CreateOffers(offer)).join('');
  return `${findOfferFind.length ? `<section class="event__section  event__section--offers">
  <h3 class="event__section-title  event__section-title--offers">Offers</h3>
  <div class="event__available-offers">
    ${findOfferFind}
  </div>
</section>` : ''}`;
}
export default Offers;

