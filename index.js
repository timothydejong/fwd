const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const { TelegramClient } = require("telegram");
const { StoreSession } = require("telegram/sessions");
const readline = require("readline");
const fs = require('node:fs');


console.log('0000000000');

const main = () => {

    /*

    const apiId = 21312114;
    const apiHash = "3516a410d2b9f2c26461eef3ad5bbba4";
    const stringSession = new StoreSession("sessions"); // fill this later with the value from session.save()

    //https://t.me/+BoLYC-0ZTuRjOTI0
    //https://t.me/+EGpSJPdZFDJjODFk

    const SOURCE_GROUP = "-4640190863"; // Replace with actual source group username or ID
    const TARGET_GROUP = "-4679563894"; // Replace with actual target group username or ID

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    let saveMessageId = (id) => {
        const content = 'Some content!';
        fs.writeFile('messages/' + id, "123", err => {
            if (err) {
                console.error(err);
            } else {
                // file written successfully
            }
        });
    };

    (async () => {
        console.log("Loading interactive example...");
        const client = new TelegramClient(stringSession, apiId, apiHash, {
            connectionRetries: 5,
        });
        await client.start({
            phoneNumber: "+31640743556",
            password: async () =>
                new Promise((resolve) =>
                    rl.question("Please enter your password: ", resolve)
                ),
            phoneCode: async () =>
                new Promise((resolve) =>
                    rl.question("Please enter the code you received: ", resolve)
                ),
            onError: (err) => console.log(err),
        });
        console.log("You should now be connected.");

        try {
            // Get the source and target group entities
            const sourceGroup = await client.getEntity(SOURCE_GROUP);
            console.log("Source group found:", sourceGroup.title);

            const targetGroup = await client.getEntity(TARGET_GROUP);

            console.log("Target group found:", targetGroup.title);

            // Get the most recent messages from source group
            const messages = await client.getMessages(sourceGroup, {
                limit: 1 // Adjust this number based on how many messages you want to forward
            });

            if (messages.length > 0) {
                console.log(`Found ${messages.length} messages to forward`);

                messages.filter((m) => {
                    saveMessageId(m.id);
                });

                // Forward the messages
                // await client.forwardMessages(targetGroup, {
                //     fromPeer: sourceGroup,
                //     messages: messages.map(msg => msg.id)
                // });

                // messages.forEach((i, mid)=>{
                //     saveMessageId(mid);
                // });

                console.log("Messages forwarded successfully!");
            } else {
                console.log("No messages found to forward");
            }

        } catch (error) {
            console.error("Error occurred:", error);
        }

        // Close the client
        await client.disconnect();
        rl.close();
    })();
    */

    console.log('1111111111111');

    return { "body": greeting };

};

var LoremIpsum = require('lorem-ipsum').LoremIpsum;

var lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

app.get('/', (req, res) => res.send(lorem.generateParagraphs(7)))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);

    main();
})
