import prompt from "prompt";
import promptSchemaQRCode from "../../prompts-schema/prompt-qrcode.js";
import handle from "./hadle.js";


async function createQrcode() {
    prompt.get(promptSchemaQRCode, handle);
    prompt.start();
}

export default createQrcode