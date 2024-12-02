import chalk from "chalk";

// import { message } from "prompt";
const promptSchemaMain = [
    {
        name: "select",
        description: chalk.bold("Escolha a ferramenta (1 - QrCode ou (2- Password"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true,//significa que é obrigatório

    },
];

export default promptSchemaMain