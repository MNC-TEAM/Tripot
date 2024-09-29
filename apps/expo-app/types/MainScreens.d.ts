type CoordinateType = Pick<LocationObjectCoords, 'latitude' | 'longitude'>;

interface MainScreensState {
  location: LocationObject | null;
}

interface ImageMarkerState {
  coordinate: CoordinateType;
  uri: string;
}
