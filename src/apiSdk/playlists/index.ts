import axios from 'axios';
import queryString from 'query-string';
import { PlaylistInterface, PlaylistGetQueryInterface } from 'interfaces/playlist';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPlaylists = async (
  query?: PlaylistGetQueryInterface,
): Promise<PaginatedInterface<PlaylistInterface>> => {
  const response = await axios.get('/api/playlists', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPlaylist = async (playlist: PlaylistInterface) => {
  const response = await axios.post('/api/playlists', playlist);
  return response.data;
};

export const updatePlaylistById = async (id: string, playlist: PlaylistInterface) => {
  const response = await axios.put(`/api/playlists/${id}`, playlist);
  return response.data;
};

export const getPlaylistById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/playlists/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePlaylistById = async (id: string) => {
  const response = await axios.delete(`/api/playlists/${id}`);
  return response.data;
};
