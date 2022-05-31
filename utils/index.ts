const { faker } = require('@faker-js/faker');

export const makeMessage = (userId: any, content: string) => ({ userId, content });


export const getBotReply = (message: string) => {
    const botId: string = "bot-user";
    let content:string = "I do not know what to say, ttyl?";

    if (message.includes("Hello")) {
        content = "Well, hello there";
    } else if (message.includes("Bye")) {
        content = "Bye";
    }

    return makeMessage(botId, content);
};
