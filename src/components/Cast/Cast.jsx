import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/getMoviesInfo';
import { IMG_PATH } from 'constants/constants';
import { CastImg, List, ListItem } from './Cast.styled';
import { Box } from 'components/Box';

const NO_IMAGE = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();
  useEffect(() => {
    (async function getCastInfo() {
      const castInfo = await getCast(movieId);
      setCast(castInfo);
    })();
  }, [movieId]);

  return (
    <Box>
      <List>
        {cast.map(({ id, name, profile_path, character }) => {
          return (
            <ListItem key={id}>
              <CastImg
                src={profile_path ? IMG_PATH + profile_path : NO_IMAGE}
                alt={name}
                loading="lazy"
              />
              <Box as="p" my="3">
                {name}
              </Box>
              <Box as="p" mb="3">
                Character: {character}
              </Box>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Cast;