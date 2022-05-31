import React, {useState} from 'react';
import {IoIosSend} from 'react-icons/io';
import styles from "./MsgInput.module.css";

interface Props{
    onSend(i:string):void;
}

export default function MsgInput( p:Props) {
    const {onSend} = p;
    const [input, setInput] = useState("");
    const onSubmit = () => {
        onSend(input);
        setInput("");
    };
    //press enter event
    const onInputChange = ({ target }:any) => setInput(target.value);

    const onEnter = ({ key }:any) => {
        if (key === "Enter") {
            onSubmit();
        }
    };

    return (
        <div className={styles.msgInputContainer}>
            <input
                value={input}
                onChange={onInputChange}
                onKeyDown={onEnter}
                type="text"
                className={styles.textInput}
                placeholder="Type a message"
            />
            <button type="submit" onClick={onSubmit} className={styles.sendButton}>
                <IoIosSend size={30} color='#191970' />
            </button>
        </div>
    );
};


