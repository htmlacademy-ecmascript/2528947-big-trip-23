
const masFilter = ['day', 'event', 'time', 'price', 'offer'];

const createFilter = (props) =>
  `<div class="trip-sort__item  trip-sort__item--${props}">
	<input id="sort-${props}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${props}" disabled>
	<label class="trip-sort__btn" for="sort-${props}">${props}</label>
</div>`;
const MapCreateFilter = masFilter.map((props)=> createFilter(props)).join('');
function filter() {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
	 ${MapCreateFilter}
</form>`;
}
export default filter;
