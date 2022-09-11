import { DEFAULT_IMG, IMG_PATH } from 'constants/constants';
import { Img } from 'pages/MovieInfo/MovieInfo.styled';
import {
  AdditionalInfo,
  MovieCardSubTitle,
  MovieCardTitle,
  MovieGenreList,
  MovieGenreListItem,
} from './MovieCard.styled';

const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  return (
    <>
      <Img
        src={poster_path ? IMG_PATH + poster_path : DEFAULT_IMG}
        alt={title}
      />
      <MovieCardTitle>
        {title} ({release_date.slice(0, 4)})
      </MovieCardTitle>
      <AdditionalInfo>
        Vote - {Math.round(vote_average * 10) / 10}
      </AdditionalInfo>
      <MovieCardSubTitle>Overview</MovieCardSubTitle>
      <AdditionalInfo>{overview}</AdditionalInfo>
      <MovieCardSubTitle>Genres</MovieCardSubTitle>
      <MovieGenreList>
        {genres.length === 0 ? (
          <li>No genres for this movie</li>
        ) : (
          genres.map(({ name }, indx) => {
            return <MovieGenreListItem key={indx}>{name}</MovieGenreListItem>;
          })
        )}
      </MovieGenreList>
    </>
  );
};

export default MovieCard;