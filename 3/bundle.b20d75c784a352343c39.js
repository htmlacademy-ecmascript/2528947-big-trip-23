(()=>{"use strict";const t="afterbegin";function e(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}function n(t,e,n="beforeend"){e.insertAdjacentElement(n,t.getElement())}const s=["day","event","time","price","offer"].map((t=>(t=>`<div class="trip-sort__item  trip-sort__item--${t}">\n\t<input id="sort-${t}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${t}" disabled>\n\t<label class="trip-sort__btn" for="sort-${t}">${t}</label>\n</div>`)(t))).join("");class l{getTemplate(){return`<section class="trip-events">\n\t<h2 class="visually-hidden">Trip events</h2>\n\t<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n\t ${s}\n</form>\n\t<ul class="trip-events__list">\n\t\t<li class="trip-events__item">\n\t\t\t<form class="event event--edit" action="#" method="post">\n\t\t\t\t<header class="event__header">\n\t\t\t\t\t<div class="event__type-wrapper">\n\t\t\t\t\t\t<label class="event__type  event__type-btn" for="event-type-toggle-1">\n\t\t\t\t\t\t\t<span class="visually-hidden">Choose event type</span>\n\t\t\t\t\t\t\t<img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n\t\t\t\t\t\t<div class="event__type-list">\n\t\t\t\t\t\t\t<fieldset class="event__type-group">\n\t\t\t\t\t\t\t\t<legend class="visually-hidden">Event type</legend>\n\n\t\t\t\t\t\t\t\t<div class="event__type-item">\n\t\t\t\t\t\t\t\t\t<input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n\t\t\t\t\t\t\t\t\t<label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="event__type-item">\n\t\t\t\t\t\t\t\t\t<input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n\t\t\t\t\t\t\t\t\t<label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="event__type-item">\n\t\t\t\t\t\t\t\t\t<input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n\t\t\t\t\t\t\t\t\t<label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="event__type-item">\n\t\t\t\t\t\t\t\t\t<input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n\t\t\t\t\t\t\t\t\t<label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="event__type-item">\n\t\t\t\t\t\t\t\t\t<input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n\t\t\t\t\t\t\t\t\t<label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="event__type-item">\n\t\t\t\t\t\t\t\t\t<input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n\t\t\t\t\t\t\t\t\t<label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="event__type-item">\n\t\t\t\t\t\t\t\t\t<input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n\t\t\t\t\t\t\t\t\t<label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="event__type-item">\n\t\t\t\t\t\t\t\t\t<input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n\t\t\t\t\t\t\t\t\t<label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="event__type-item">\n\t\t\t\t\t\t\t\t\t<input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n\t\t\t\t\t\t\t\t\t<label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="event__field-group  event__field-group--destination">\n\t\t\t\t\t\t<label class="event__label  event__type-output" for="event-destination-1">\n\t\t\t\t\t\t\tFlight\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="" list="destination-list-1">\n\t\t\t\t\t\t<datalist id="destination-list-1">\n\t\t\t\t\t\t\t<option value="Amsterdam"></option>\n\t\t\t\t\t\t\t<option value="Geneva"></option>\n\t\t\t\t\t\t\t<option value="Chamonix"></option>\n\t\t\t\t\t\t</datalist>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n\t\t\t\t\t<button class="event__reset-btn" type="reset">Cancel</button>\n\t\t\t\t</header>\n\t\t\t\t<section class="event__section  event__section--offers">\n\t\t\t\t\t\t<h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\t\t\t\t\t\t<div class="event__available-offers">\n\t\t\t\t\t\t\t<div class="event__offer-selector">\n\t\t\t\t\t\t\t\t<input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>\n\t\t\t\t\t\t\t\t<label class="event__offer-label" for="event-offer-luggage-1">\n\t\t\t\t\t\t\t\t\t<span class="event__offer-title">Add luggage</span>\n\t\t\t\t\t\t\t\t\t&plus;&euro;&nbsp;\n\t\t\t\t\t\t\t\t\t<span class="event__offer-price">30</span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="event__offer-selector">\n\t\t\t\t\t\t\t\t<input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>\n\t\t\t\t\t\t\t\t<label class="event__offer-label" for="event-offer-comfort-1">\n\t\t\t\t\t\t\t\t\t<span class="event__offer-title">Switch to comfort class</span>\n\t\t\t\t\t\t\t\t\t&plus;&euro;&nbsp;\n\t\t\t\t\t\t\t\t\t<span class="event__offer-price">100</span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="event__offer-selector">\n\t\t\t\t\t\t\t\t<input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">\n\t\t\t\t\t\t\t\t<label class="event__offer-label" for="event-offer-meal-1">\n\t\t\t\t\t\t\t\t\t<span class="event__offer-title">Add meal</span>\n\t\t\t\t\t\t\t\t\t&plus;&euro;&nbsp;\n\t\t\t\t\t\t\t\t\t<span class="event__offer-price">15</span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="event__offer-selector">\n\t\t\t\t\t\t\t\t<input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">\n\t\t\t\t\t\t\t\t<label class="event__offer-label" for="event-offer-seats-1">\n\t\t\t\t\t\t\t\t\t<span class="event__offer-title">Choose seats</span>\n\t\t\t\t\t\t\t\t\t&plus;&euro;&nbsp;\n\t\t\t\t\t\t\t\t\t<span class="event__offer-price">5</span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="event__offer-selector">\n\t\t\t\t\t\t\t\t<input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">\n\t\t\t\t\t\t\t\t<label class="event__offer-label" for="event-offer-train-1">\n\t\t\t\t\t\t\t\t\t<span class="event__offer-title">Travel by train</span>\n\t\t\t\t\t\t\t\t\t&plus;&euro;&nbsp;\n\t\t\t\t\t\t\t\t\t<span class="event__offer-price">40</span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</section>\n\t\t\t</form>\n\t\t</li>`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class i{getTemplate(){return'<li class="trip-events__item">\n\t<div class="event">\n\t\t<time class="event__date" datetime="2019-03-18">MAR 18</time>\n\t\t<div class="event__type">\n\t\t\t<img\n\t\t\t\tclass="event__type-icon"\n\t\t\t\twidth="42"\n\t\t\t\theight="42"\n\t\t\t\tsrc="img/icons/taxi.png"\n\t\t\t\talt="Event type icon"\n\t\t\t/>\n\t\t</div>\n\t\t<h3 class="event__title">Taxi Amsterdam</h3>\n\t\t<div class="event__schedule">\n\t\t\t<p class="event__time">\n\t\t\t\t<time class="event__start-time" datetime="2019-03-18T10:30"\n\t\t\t\t\t>10:30</time\n\t\t\t\t>\n\t\t\t\t&mdash;\n\t\t\t\t<time class="event__end-time" datetime="2019-03-18T11:00"\n\t\t\t\t\t>11:00</time\n\t\t\t\t>\n\t\t\t</p>\n\t\t\t<p class="event__duration">30M</p>\n\t\t</div>\n\t\t<p class="event__price">\n\t\t\t&euro;&nbsp;<span class="event__price-value">20</span>\n\t\t</p>\n\t\t<h4 class="visually-hidden">Offers:</h4>\n\t\t<ul class="event__selected-offers">\n\t\t\t<li class="event__offer">\n\t\t\t\t<span class="event__offer-title">Order Uber</span>\n\t\t\t\t&plus;&euro;&nbsp;\n\t\t\t\t<span class="event__offer-price">20</span>\n\t\t\t</li>\n\t\t</ul>\n\t\t<button\n\t\t\tclass="event__favorite-btn event__favorite-btn--active"\n\t\t\ttype="button"\n\t\t>\n\t\t\t<span class="visually-hidden">Add to favorite</span>\n\t\t\t<svg\n\t\t\t\tclass="event__favorite-icon"\n\t\t\t\twidth="28"\n\t\t\t\theight="28"\n\t\t\t\tviewBox="0 0 28 28"\n\t\t\t>\n\t\t\t\t<path\n\t\t\t\t\td="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"\n\t\t\t\t/>\n\t\t\t</svg>\n\t\t</button>\n\t\t<button class="event__rollup-btn" type="button">\n\t\t\t<span class="visually-hidden">Open event</span>\n\t\t</button>\n\t</div>\n\t</li>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}(new class{constructor(){this.tripEvents=document.querySelector(".trip-events")}renderWayPoint(){n(new i,this.tripEvents,t)}renderEditWayPoints(){n(new l,this.tripEvents,t)}init(){this.renderWayPoint(),this.renderEditWayPoints()}}).init()})();
//# sourceMappingURL=bundle.b20d75c784a352343c39.js.map