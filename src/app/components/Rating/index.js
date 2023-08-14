import Image from 'next/image';
import styles from './styles.module.css'

const Rating = ({ rating }) => {
  return (
    <div className={styles.rating_container}>
      {Array.from({ length: 5 }).map((_, index) => {
        if (index < rating) {
          return (
            <Image
              key={index}
              src="/icons/Full_Star.svg"
              width={16}
              height={16}
              alt="Full_Star"
            />
          );
        } else {
          return (
            <Image
              key={index}
              src="/icons/Empty_Star.svg"
              width={16}
              height={16}
              alt="Empty_Star"
            />
          );
        }
      })}
    </div>
  );
};

export default Rating;
