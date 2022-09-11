import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/getMoviesInfo';
import { ListItem, ReviewTitle } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    (async function getReviewsInfo() {
      const reviewsInfo = await getReviews(movieId);
      setReviews(reviewsInfo);
    })();
  }, [movieId]);

  return (
    <ul>
      {reviews.length !== 0 ? (
        reviews.map(({ id, author, content }) => {
          return (
            <ListItem key={id}>
              <ReviewTitle>Author: {author}</ReviewTitle>
              <p>{content}</p>
            </ListItem>
          );
        })
      ) : (
        <b>We don't have any reviews for this movie.</b>
      )}
    </ul>
  );
};

export default Reviews;