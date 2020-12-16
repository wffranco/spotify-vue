import Track from './Track';
import Paginator from './Paginator';

export default function Tracks({ music = null }) {
  if (!music) return null;

  if (music.loading) {
    return (
      <div class="d-flex align-items-center">
        <div class="spinner-border ml-auto mr-2" role="status" aria-hidden="true"></div>
        <strong class="mr-auto">Loading...</strong>
      </div>
    );
  }

  if (music.error) {
    return (
      <div class="alert alert-danger" role="alert">
        Ocurrió un error en la api de Spotify.
      </div>
    );
  }

  const { items: tracks = [] } = music.tracks||{};
  if (!tracks.length) {
    return (
      <div class="alert alert-danger" role="alert">
        No hay resultados para mostrar.
      </div>
    );
  }

  return (
    <>
      <div class="card-deck track-list">
        { tracks.map(track => <Track key={track.id} track={track} />) }
      </div>
      <Paginator />
    </>
  );
}
