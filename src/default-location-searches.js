import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
const defaultLocations = [
  {
    id: 'default-Oahu',
    predictionPlace: {
      address: 'Honolulu, Hawaii',
      bounds: new LatLngBounds(new LatLng(21.263297, -157.807502), new LatLng(21.322430, -157.929429)),
    },
  },
  {
    id: 'default-Big Island',
    predictionPlace: {
      address: 'Big Island, Hawaii',
      bounds: new LatLngBounds(new LatLng(19.896724, -154.923142), new LatLng(19.296176, -156.030360)),
    },
  },
  {
    id: 'default-Maui',
    predictionPlace: {
      address: 'Maui, Hawaii',
      bounds: new LatLngBounds(new LatLng(20.894206, -156.436857), new LatLng(20.879942, -156.679292)),
    },
  },
  {
    id: 'default-Kauai',
    predictionPlace: {
      address: 'Kauai, Hawaii',
      bounds: new LatLngBounds(new LatLng(22.225255, -159.303817), new LatLng(21.911090, -159.765205)),
    },
  },

];
export default defaultLocations;
