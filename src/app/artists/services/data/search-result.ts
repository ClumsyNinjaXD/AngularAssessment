import { IAlbum } from './album';
import { IArtist } from './artist';

export type SearchIdentifierType = 'album' | 'track' | 'artist';

export interface ISearchResult {
    id: number;
    readble: boolean;
    title: string;
    title_short: string;
    title_version: string;
    link: string;
    duration: string;
    rank: string;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    preview: string;
    md5_image: string;
    artist: IArtist;
    album: IAlbum;
    type: SearchIdentifierType;
}
