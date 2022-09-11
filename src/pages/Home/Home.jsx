import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingToday } from 'services/getMoviesInfo';
import { Box } from 'components/Box';
import { Container, Img, ImgTitle, List, ListItem, Title } from './Home.styled';
import { IMG_PATH, DEFAULT_IMG } from 'constants/constants';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    (async function getMovies() {
      const response = await fetchTrendingToday();
      setMovies(response);
    })();
  }, []);

  return (
    <Box>
      <Container>
        <Title>Trending today</Title>
        <List>
          {movies.map(({ id, title, poster_path }) => {
            return (
              <ListItem key={id}>
                <Link to={`movies/${id}`} state={{ from: location }}>
                  <Img
                    src={poster_path ? IMG_PATH + poster_path : DEFAULT_IMG}
                    alt={title}
                    loading="lazy"
                  />
                  <ImgTitle>{title.toUpperCase()}</ImgTitle>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </Box>
  );
};

export default Home;