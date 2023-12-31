import Link from 'next/link';
import styles from '../components/styles/Home.module.css'
import React from 'react';


const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to my blog</h1>
      <Link legacyBehavior href="/blog">
        <a className={styles.link}>Go to blog</a>
      </Link>
    </div>
  );
};

export default page;