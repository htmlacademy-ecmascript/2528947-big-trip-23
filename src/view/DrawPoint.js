import AbstractView from '../framework/view/abstract-view';

function createDrawPoint() {
  return '<section class="DrawPoint"></section>';
}

export default class DrawPoint extends AbstractView {
  get template() {
    return createDrawPoint();
  }
}
