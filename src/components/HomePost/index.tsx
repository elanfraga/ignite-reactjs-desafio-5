import Link from 'next/link';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { IHomePostProps } from './@interfaces';

import styles from './home.post.module.scss';
import commonStyles from '../../styles/common.module.scss';

export default function HommePost({
  slug,
  title,
  subtitle,
  first_publication_date,
  author,
}: IHomePostProps) {
  return (
    <div className={styles.homePostContainer}>
      <Link href={`/post/${slug}`}>
        <a>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <section className={commonStyles.info}>
            <div>
              <FiCalendar color="#BBBBBB" />
              <time>{first_publication_date}</time>
            </div>
            <div>
              <FiUser color="#BBBBBB" />
              <span>{author}</span>
            </div>
          </section>
        </a>
      </Link>
    </div>
  );
}
