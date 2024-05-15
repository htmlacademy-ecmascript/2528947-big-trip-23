
const CreateOffers = (offers) => {
  offers.map((price) =>
    `<div class="event__offer-selector">
	<input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
	<label class="event__offer-label" for="event-offer-luggage-1">
		<span class="event__offer-title">${price.title}</span>
		&plus;&euro;&nbsp;
		<span class="event__offer-price">${price.price}</span>
	</label>
</div>`);
};
function Offers(offers, points) {
  const MapPoint = points.forEach((point) => point);
  const CurrentOffers = offers.find((offer)=> offer.type === MapPoint);
  const MapOffers = offers.map(()=> CreateOffers(offers, points)).join('');
	console.log(MapPoint)
  return `<section class="event__section  event__section--offers">
						<h3 class="event__section-title  event__section-title--offers">Offers</h3>
						<div class="event__available-offers">
							${MapOffers}
						</div>
					</section>`;
}
export default Offers;

