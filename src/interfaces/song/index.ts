import { FavoritesInterface } from 'interfaces/favorites';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SongInterface {
  id?: string;
  title: string;
  artist: string;
  genre?: string;
  duration?: number;
  release_date?: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  favorites?: FavoritesInterface[];
  user?: UserInterface;
  _count?: {
    favorites?: number;
  };
}

export interface SongGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  artist?: string;
  genre?: string;
  user_id?: string;
}
