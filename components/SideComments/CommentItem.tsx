import React from 'react';
import styles from './SideComments.module.scss';
import Link from 'next/link';
import { Avatar } from '@material-ui/core';



export const CommentItem = ({ name, text, post }) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <Avatar style={{ marginRight: 10 }}>{name}</Avatar>
        <Link href={`/profile/${name}`}>
          <a>
            <b>{name}</b>
          </a>
        </Link>
      </div>
      <p className={styles.text}>{text}</p>
      <Link href={`/news/${post}`}>
        <a>
          <span className={styles.postTitle}>{post}</span>
        </a>
      </Link>
    </div>
  );
};
