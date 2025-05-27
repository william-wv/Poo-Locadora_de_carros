import { LocadoraController } from "../controller/LocadoraController";
import * as readline from "readline";
import { IEntity } from "../interfaces/IEntity";
import { Ecargo } from "../Enum/ECargo";

export class View {
  constructor(private controller: LocadoraController) {}

  iniciar(): void {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const menu = () => {
      console.log("\n1 - Adicionar carro");
      console.log("2 - Adicionar cliente");
      console.log("3 - Adicionar vendedor");
      console.log("4 - Listar carros disponíveis");
      console.log("5 - Alugar carro");
      console.log("6 - Devolver carro");
      console.log("7 - Sair");

      rl.question("Escolha uma opção: ", (opcao) => {
        switch (opcao) {
          case "1":
            rl.question("Placa: ", (placa) => {
              rl.question("Modelo: ", (modelo) => {
                rl.question("Ano: ", (ano) => {
                  const id = Math.floor(Math.random() * 1000000);
                  const entidade: IEntity = { id: id };
                  this.controller.adicionarCarro(
                    placa,
                    modelo,
                    Number(ano),
                    entidade
                  );
                  console.log("Carro adicionado.");
                  menu();
                });
              });
            });
            break;
          case "2":
            rl.question("Nome do cliente: ", (nome) => {
              rl.question("CPF: ", (doc) => {
                rl.question("Número da carteira de motorista: ", (carteira) => {
                  const id = Math.floor(Math.random() * 1000000);
                  const entidade: IEntity = { id: id };
                  this.controller.adicionarCliente(
                    nome,
                    doc,
                    entidade,
                    carteira
                  );
                  console.log("Cliente adicionado.");
                  menu();
                });
              });
            });
            break;
          case "3":
            rl.question("Nome do vendedor: ", (nome) => {
              rl.question("CPF: ", (documento) => {
                console.log("Nível do cargo:");
                console.log("1 - novato");
                console.log("2 - veterano");
                console.log("3 - mestre");
                rl.question("Escolha o nível do cargo: ", (cargoStr) => {
                  const cargoNum = Number(cargoStr);
                  const cargo =
                    cargoNum === 1 ? Ecargo.nivel1
                    : cargoNum === 2 ? Ecargo.nivel2
                    : cargoNum === 3 ? Ecargo.nivel3
                    : undefined;

                  if (cargo === undefined) {
                    console.log("Cargo inválido.");
                    menu();
                    return;
                  }

                  const id = Math.floor(Math.random() * 1000000);
                  const entidade: IEntity = { id: id };
                  this.controller.adicionarVendedor(
                    nome,
                    documento,
                    entidade,
                    cargo
                  );
                  console.log("Vendedor adicionado.");
                  menu();
                });
              });
            });
            break;
          case "4":
            const carros = this.controller.listarDisponiveis();
            console.log("\nCarros disponíveis:");
            carros.forEach((c) => console.log(c.toString()));
            menu();
            break;
          case "5":
            rl.question("Placa do carro para alugar: ", (placa) => {
              const alugado = this.controller.alugarCarro(placa);
              console.log(
                alugado ? "Alugado com sucesso!" : "Carro indisponível."
              );
              menu();
            });
            break;
          case "6":
            rl.question("Placa do carro para devolver: ", (placa) => {
              const devolvido = this.controller.devolverCarro(placa);
              console.log(
                devolvido ? "Devolvido com sucesso!" : "Erro ao devolver."
              );
              menu();
            });
            break;
          case "7":
            rl.close();
            break;
          default:
            console.log("Opção inválida.");
            menu();
        }
      });
    };

    menu();
  }
}
