import { SongInterface } from 'interfaces/song';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FavoritesInterface {
  id?: string;
  song_id: string;
  user_id: string;
  date_added?: any;
  created_at?: any;
  updated_at?: any;

  song?: SongInterface;
  user?: UserInterface;
  _count?: {};
}

export interface FavoritesGetQueryInterface extends GetQueryInterface {
  id?: string;
  song_id?: string;
  user_id?: string;
}
