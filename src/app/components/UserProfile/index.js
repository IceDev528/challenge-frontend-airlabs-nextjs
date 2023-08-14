import Image from 'next/image';
import styles from './styles.module.css';
import { space_grotesk } from '@/app/layout';

const UserProfile = ({ data }) => {
  return (
    <div className={styles.user_container}>
      <Image
        className={styles.user_avatar}
        src={data.avatar}
        width={43}
        height={43}
        alt="avatar"
      />
      <div className={styles.user_information}>
        <span className={`${space_grotesk.className} ${styles.user_name}`}>
          {data.name}
        </span>
        <span className={styles.user_position}>{data.position}</span>
      </div>
    </div>
  );
};

export default UserProfile;
