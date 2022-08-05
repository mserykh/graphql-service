export interface NewTrackInput {
  title: string;
  albumId?: string;
  artistsIds?: string[];
  bandsIds?: string[];
  duration?: number;
  released?: number;
  genresIds?: string[];
}

export interface TrackInput {
  title?: string;
  albumId?: string;
  artistsIds?: string[];
  bandsIds?: string[];
  duration?: number;
  released?: number;
  genresIds?: string[];
}
