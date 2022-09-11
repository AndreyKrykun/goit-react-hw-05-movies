import { Box } from 'components/Box';
import { BackLink } from '../MovieInfo/MovieInfo.styled';

const Error = () => {
  return (
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
        Error. Page couldn't be found.
      </Box>
    </Box>
  );
};

export default Error;