import './globals.css';
import Image from 'next/image';
import dummyData from './data/dummy.json';
import ReviewItem from './components/ReviewItem';
import styles from './page.module.css';

export default function ReviewPage() {
  return (
    <div className={styles.container}>
      <Image className={styles.accent_left} src="/graphics/Accent.svg" width={415} height={415} alt="Accent" />
      <Image className={styles.accent_right} src="/graphics/Accent.svg" width={415} height={415} alt="Accent" />
      <div className={styles.review_container}>
        {dummyData.map((item, index) => (
          <ReviewItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
