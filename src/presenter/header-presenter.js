import Header from '../view/Header';
import { render } from '../framework/render';
export default class HeaderPresenter {
  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  #renderHeader () {
    render(new Header(), this.boardContainer);
  }

  init() {
    this.#renderHeader();
  }
}
