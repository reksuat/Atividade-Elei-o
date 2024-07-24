const { voto1, voto2, voto3, voto4 } = require("./voto");

const prompt = require("prompt-sync")();
let escolher
while (escolher!=5) {
    console.log(`
    //Em qual Candidato irá votar
    //1- Oliver Oliveira
    //2- Nick Saci
    //3- Tica da Silva
    //4- Ambrózio
    //5- Para encerrar os votos
    `);
    escolher= prompt ("Escolha: ");
    switch (escolher) {
        case "1":
            voto1()
            break
            case "2":
                voto2()
                break
                case "3":
                    voto3()
                    break
                    case "4":
                        voto4()
                        break
                        case "5":
                            console.log("Encerrando as votaçoẽs..");

        default:
            break;
    }if (escolher=="5") {
    console.log("Votos atualizados");
    console.log(`Oliver Oliveira com ${voto1()} votos`);
    console.log(`Nick Saci com ${voto2()} votos`);
    console.log(`Tica da Silva com ${voto3()} votos`);
    console.log(`Ambrózio com ${voto4()} votos`);
}}