import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface Mp3PlayerInterface {
  id?: string;
  name: string;
  brand?: string;
  model?: string;
  storage_capacity?: number;
  battery_life?: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface Mp3PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  brand?: string;
  model?: string;
  user_id?: string;
}
