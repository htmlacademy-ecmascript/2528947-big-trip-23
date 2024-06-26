import AbstractView from '../framework/view/abstract-view';
const masHeader = ['Everything', 'Future', 'Present', 'Past'];

const createHeader = (props) =>
  `<div class="trip-filters__filter">
  <input id="filter-${props}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${props}" checked>
  <label class="trip-filters__filter-label" for="filter-${props}">${props}</label>
  </div>`;
const mapCreateHeader = masHeader.map((props)=> createHeader(props)).join('');
function header() {
  return `<div class="trip-main__trip-controls  trip-controls">
  <div class="trip-controls__filters">
    <h2 class="visually-hidden">Filter events</h2>
    <form class="trip-filters" action="#" method="get">
      ${mapCreateHeader}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
  </div>
</div>`;
}

export default class Header extends AbstractView {
  get template() {
    return header();
  }
}
