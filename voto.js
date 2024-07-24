module.exports= Adicionar;
function Adicionar(add) {
    const prompt = require("prompt-sync")({ sigint: true });
    let vote = prompt(`
        //      Em qual Candidato irá votar
        //      1- Oliver Oliveira
        //      2- Nick Saci
        //      3- Tica da Silva
        //      4- Ambrózio
        `);
       switch (vote) {
        case "1":
            add.push( candidato: "Oliver Oliveira");
            console.log("Votou em Oliver Oliveira");
            break;
        case "2":
            add.push({ candidato: "Nick Saci"});
            console.log("Votou em Nick Saci");
            break;
            case "3":
                add.push({ candidato: "Tica da Silva"});
                console.log("Votou em Tica da Silva");
                break;
                case "4":
                    add.push({ candidato: "Ambrózio"});
                    console.log("Votou em Ambrózio");
                    break;
        default:
            console.log("Inválido");
            break;
       }
       return add;

    }
