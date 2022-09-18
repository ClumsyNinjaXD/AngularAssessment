import { SearchIdentifierType } from './search-result';

export interface IArtist {
    id: number;
    name: string;
    link: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    tracklist: string;
    type: SearchIdentifierType;
    // the following properties only populated by artist call, do not make them mandatory
    share?: string;
    nb_album?: number;
    nb_fan?: number;
    radio?: boolean;
}
