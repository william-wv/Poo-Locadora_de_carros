import { LocadoraService } from "../services/LocadoraService";
import { Carro } from "../models/Carro";
import { Cliente } from "../models/Cliente";
import { IEntity } from "../interfaces/IEntity";

export class LocadoraController {
  constructor(private service: LocadoraService) {}

// LocadoraController.ts
adicionarCarro(placa: string | Carro, modelo: string, ano: number, id:IEntity): void {
  if (placa instanceof Carro) {
    this.service.adicionarCarro(placa);
  } else {
    const carro = new Carro(placa, modelo, ano,id);
    this.service.adicionarCarro(carro); 
  }
}
// adicionarCarro(param1: any, param2?: any, param3?: any, param4?:any): void {
//   if (param1 instanceof Carro) {
//     this.service.adicionarCarro(param1);
//   } else {
//     const carro = new Carro(param1, param2, param3,param4);
//     this.service.adicionarCarro(carro); 
//   }
// }


  adicionarCliente(nome: string, documento: string, id:IEntity, carteiraMotorista: string ): void {
    const cliente = new Cliente(nome, documento, id , carteiraMotorista);
    this.service.adicionarCliente(cliente);
  }

  listarDisponiveis(): Carro[] {
    return this.service.listarCarrosDisponiveis();
  }

  alugarCarro(placa: string): boolean {
    return this.service.alugarCarro(placa);
  }

  devolverCarro(placa: string): boolean {
    return this.service.devolverCarro(placa);
  }
}
