import React from 'react';
import styles from './TextComponent.module.css';

interface Props {
    text: string;
    isMe: boolean;
}

export default function MessageInput(msg: Props) {
    const {text, isMe} = msg;
    return (
        <div className={isMe ? styles.senderChatBubble : styles.receiverChatBubble }>
            {text}
        </div>
    );
};


