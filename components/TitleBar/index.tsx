import React from 'react';
import { IoIosCall, IoIosVideocam } from 'react-icons/io';
import styles from './TitleBar.module.css'

interface currentUser {
    avatar?: any;
    name?: string;
}

const TitleBar = (user:currentUser) => {
    const { avatar, name } = user;
    return (
        <div className={styles.container}>
            <div className={styles.userInfo}>
                <img src={avatar} className={styles.profileIcon} alt='user-dp' />
                <div className={styles.username}>{name}</div>
            </div>
            <div className={styles.actions}>
                <IoIosVideocam size={25} color='#191970' className={styles.icon} />
                <IoIosCall size={25} color='#191970' className={styles.icon} />
            </div>
        </div>
    );
};

export default TitleBar;
