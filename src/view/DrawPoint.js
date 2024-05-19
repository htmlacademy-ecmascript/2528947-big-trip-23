import {createElement} from '../render.js';

function createDrawPoint() {
  return '<section class="DrawPoint"></section>';
}

export default class DrawPoint {
  getTemplate() {
    return createDrawPoint();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
