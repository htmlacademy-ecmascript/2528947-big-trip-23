import { Destinations } from '../mock/mas_destinations';
import { offers } from '../mock/mas_offer';
import { Points } from '../mock/mas_point';

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
