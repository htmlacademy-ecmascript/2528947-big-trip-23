import { Points } from '../mock/point';
import { Destinations } from '../mock/MasDestinations';
import { offers } from '../mock/MasOffer';

export default class PointModel {
  constructor() {
    this.Points = [];
    this.Destinations = [];
    this.offers = [];
  }

  init() {
    this.Points = Points;
    this.Destinations = Destinations;
    this.offers = offers;
  }

  getPoints() {
    return this.Points;
  }

  getDestination() {
    return this.Destinations;
  }

  getOffers() {
    return this.offers;
  }
}
