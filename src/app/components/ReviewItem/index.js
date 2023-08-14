import styles from './styles.module.css';
import Rating from '../Rating';
import UserProfile from '../UserProfile';
import { dm_sans } from '@/app/layout';

const ReviewItem = ({ data }) => {
  return (
    <div className={styles.review_box}>
      <Rating rating={data.rating} />
      <span className={`${dm_sans.className} ${styles.review_text}`}>{data.description}</span>
      <UserProfile data={data} />
    </div>
  );
};

export default ReviewItem;
