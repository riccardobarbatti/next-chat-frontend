import React, {useState} from 'react';
import { getBotReply, makeMessage } from '../../utils';
import styles from "./ChatWindow.module.css";
import MessageInput from "../MessageInput";
import TextComponent from "../TextComponent";
import TitleBar from "../TitleBar";

interface currentUser {
    userId?: any;
    avatar?: any;
}

function MainContainer(u:currentUser) {
    const [messages, setMessages] = useState([]);

    const onSend = (content:any) => {
        const { userId } = u;
        const message = makeMessage(userId, content);
        const botMessage = getBotReply(content);

        //message
        setMessages((messages) => {
            const updatedMessages = [...messages];
            // @ts-ignore
            updatedMessages.push(message);
            // @ts-ignore
            updatedMessages.push(botMessage);
            console.log(updatedMessages);
            return updatedMessages;
        });
    };
    //render Message
    const renderMessages = () =>
        messages.map((message, index) => {
            const { userId, content } = message;
            const isMe = userId === u.userId;
            return <TextComponent key={index} text={content} isMe={isMe} />;
        });

    return (
        <>
            <div className={styles.chatWindow}>
                {u &&
                    <>
                        <TitleBar avatar={u.avatar} name={u.userId} />
                        <div className={styles.texts}>{renderMessages()}</div>
                        <div className={styles.inputTexts}>
                            <MessageInput onSend={onSend} />
                        </div>
                    </>
                }
            </div>
        </>
    );
}

export default MainContainer;
