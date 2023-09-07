import axios from 'axios';
import queryString from 'query-string';
import { FavoritesInterface, FavoritesGetQueryInterface } from 'interfaces/favorites';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getFavorites = async (
  query?: FavoritesGetQueryInterface,
): Promise<PaginatedInterface<FavoritesInterface>> => {
  const response = await axios.get('/api/favorites', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createFavorites = async (favorites: FavoritesInterface) => {
  const response = await axios.post('/api/favorites', favorites);
  return response.data;
};

export const updateFavoritesById = async (id: string, favorites: FavoritesInterface) => {
  const response = await axios.put(`/api/favorites/${id}`, favorites);
  return response.data;
};

export const getFavoritesById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/favorites/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFavoritesById = async (id: string) => {
  const response = await axios.delete(`/api/favorites/${id}`);
  return response.data;
};
