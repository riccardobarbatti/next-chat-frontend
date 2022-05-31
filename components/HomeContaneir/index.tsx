import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {MdRefresh} from 'react-icons/md';
import UserWindow from '../UserCard';
import ChatWindow from '../ChatWindow';
import styles from  './Home.module.css';
import {randomNumberInRange} from "../../utils/randomNum";

interface User {
    id: number;
    username?: string;
    avatar?: string;
    day?: string;
    onUserSelect?(user: any):void | undefined;
}

export default function HomeContainer() {
    const [num, setNum] = useState(0);
    const [suggestions, setSuggestions]: any[] = useState([]);

    useEffect(() => {
        //random current user chat
        setNum(randomNumberInRange(0, 9));
        //fake users
        const data = [...Array(10)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));
        setSuggestions(data);
    }, []);

    return (
        <div className={styles.home}>
            <div className={styles.content}>
                <div className={styles.userList}>
                    <div className={styles.myUser}>
                        <h2>Messages</h2>
                        <div className={styles.iconsRow}>
                            <MdRefresh size={24} color='#191970' className={styles.icon} />
                            <BsThreeDotsVertical size={20} color='#191970' className={styles.icon} />
                        </div>
                    </div>
                    {suggestions.map((user: User) => {
                        return <UserWindow
                                key={user.id}
                                name={user.username}
                                avatar={user.avatar}
                                day={user.day} />})}
                </div>
                {suggestions[num] && <ChatWindow
                    userId={suggestions[num].username}
                    avatar={suggestions[num].avatar}
                />}
            </div>
        </div>
    )
}
