import { IAlbum } from './album';
import { IArtist } from './artist';
import { SearchIdentifierType } from './search-result';

export interface ITrack {
    album: IAlbum;
    artist: IArtist;
    // not specifically typed since we won't be using it yet
    contributors: any[];
    duration: number;
    explicit_content_cover: number;
    explicit_content_lyrics: number;
    explicit_lyrics: boolean;
    id: number;
    link: string;
    md5_image: string;
    preview: string;
    rank: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    type: SearchIdentifierType;
}
