import { useParams, Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { getMovieById } from 'services/getMoviesInfo';
import Loader from 'components/Loader/Loader';
import { AdditionalLink, BackLink } from './MovieInfo.styled';
import { Box } from 'components/Box';
import { STATUS } from 'constants/constants';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieInfo = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const { idle, pending, resolved, rejected } = STATUS;

  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState(idle);

  useEffect(() => {
    (async function getMovie() {
      try {
        setStatus(pending);
        const movieDetails = await getMovieById(movieId);
        const MOVIE_DETAILS_AVAILABLE = Object.keys(movieDetails).length !== 0;
        if (!MOVIE_DETAILS_AVAILABLE) {
          setStatus(rejected);
          return;
        }
        setMovie(movieDetails);
        setStatus(resolved);
      } catch (error) {
        console.log(error);
        setStatus(rejected);
      }
    })();
  }, [movieId, pending, rejected, resolved]);

  return (
    <>
      {status === 'RESOLVED' && (
        <Box>
          <Box as="div" p="5">
            <BackLink to={backLinkHref}>Go back</BackLink>
            <MovieCard movie={movie} />
            <div>
              <Box
                as="h2"
                textAlign={'center'}
                fontSize="l"
                color="#03cefc"
                mb="4"
              >
                Additional information
              </Box>
              <Box as="ul" display="flex" mb="4">
                <li>
                  <AdditionalLink to="cast" state={backLinkHref}>
                    Cast
                  </AdditionalLink>
                </li>
                <li>
                  <AdditionalLink to="reviews" state={backLinkHref}>
                    Reviews
                  </AdditionalLink>
                </li>
              </Box>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </div>
          </Box>
        </Box>
      )}
      {status === 'PENDING' && <Loader />}
      {status === 'REJECTED' && (
        <Box as="div" p="4" display="flex">
          <BackLink to="/">Go home</BackLink>
          <Box
            as="b"
            textAlign="center"
            mx="auto"
            mt="5"
            fontSize="l"
            color="blue"
          >
            Sorry, there are no details for the movie.
          </Box>
        </Box>
      )}
    </>
  );
};

export default MovieInfo;