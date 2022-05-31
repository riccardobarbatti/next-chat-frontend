import React from 'react';
import {BsDot} from "react-icons/bs";
import styles from './UserCard.module.css'


interface User {
    name?: string;
    avatar?: string;
    day?: string;
    onUserSelect?(user: User):void;
}

const UserCard = (user: User) => {
    const status = "Busy";
    const {name, avatar, day} = user;

    //select User chat
   const onUserSelect = (user: User) =>{
        console.log(`--User Selected ${user.name}`);
    }

    return (
        <div className={styles.userContainer} onClick={() => onUserSelect(user)}>
            <div className={styles.row}>
                <img src={avatar} className={styles.img} alt='dp' />
                <div className={styles.textContainer}>
                    <div className={styles.name}>
                        {name}
                    </div>
                    <div className={styles.status}>
                        {status} <BsDot size={20} /> Last seen on {day}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
