export const POINT_TYPES = ['taxi', 'bus', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurent'];
export const getDefoltPoint = () => ([{
  basePrice: 0,
  dateFrom: new Date().toISOString,
  dateTo: new Date().toISOString,
  destination: 0,
  isFavorite: false,
  ObjOffers: [],
  type: POINT_TYPES[1],
}]);
