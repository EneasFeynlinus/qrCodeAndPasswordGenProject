import prompt from "prompt"

import promptSchemaMain from "./prompts-schema/prompt-main.js"

import createQrcode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
    prompt.get(promptSchemaMain, async (err, choose) => {
        if(err) console.log(err);

        if(choose.select == 1) await createQrcode();
        if(choose.select == 2) await createPassword();
    });

    prompt.start();
}

main();