const Adicionar = require("./voto");
const { voto1, voto2, voto3, voto4 } = require("./voto");

const prompt = require("prompt-sync")();
let votar
let escolha
let cand1 = 0;
let cand2 = 0;
let cand3 = 0;
let cand4 = 0;
while (escolha!=0) {
    console.log(`
    //      >>>> VOTAR <<<<
    //      1- Adicionar um novo voto
    //      2- Remover um voto
    //      3- Mostrar os votos
    //      4- Atualizar voto
    //      0- Sair `);
    escolha= prompt("Escolha: ");
    if (escolha=="1") {
        console.log(Adicionar(escolha));
}}
//     switch (votar) {
//         case "1":
//             voto1()
//             break
//             case "2":
//                 voto2()
//                 break
//                 case "3":
//                     voto3()
//                     break
//                     case "4":
//                         voto4()
//                         break
//                         case "5":
//                             console.log("Encerrando as votaçoẽs..");

//         default:
//             break;
//     }if (votar=="5") {
    // console.log("Votos atualizados");
    // console.log(`Oliver Oliveira com ${voto1()} votos`);
    // console.log(`Nick Saci com ${voto2()} votos`);
    // console.log(`Tica da Silva com ${voto3()} votos`);
    // console.log(`Ambrózio com ${voto4()} votos`);
// }}