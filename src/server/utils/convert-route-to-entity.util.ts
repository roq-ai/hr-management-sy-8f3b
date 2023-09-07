const mapping: Record<string, string> = {
  favorites: 'favorites',
  'mp-3-players': 'mp3_player',
  organizations: 'organization',
  playlists: 'playlist',
  songs: 'song',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
