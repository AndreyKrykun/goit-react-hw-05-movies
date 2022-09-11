import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navigation, Link } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';
import { Box } from 'components/Box';

const SharedLayout = () => {
  const location = useLocation();

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        px="4"
        bg="white"
        boxShadow="main"
        as="header"
      >
        <Navigation>
          <Link to="/" state={{ from: location }}>
            Home
          </Link>
          <Link to="movies" state={{ from: location }}>
            Movies
          </Link>
        </Navigation>
      </Box>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;