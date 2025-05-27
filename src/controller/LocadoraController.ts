import { LocadoraService } from "../services/LocadoraService";
import { Carro } from "../models/Carro";
import { Cliente } from "../models/Cliente";
import { IEntity } from "../interfaces/IEntity";
import { Vendedor } from "../models/Vendedor";
import { Ecargo } from "../Enum/ECargo";

export class LocadoraController {
  constructor(private service: LocadoraService) {}

  // LocadoraController.ts
  adicionarCarro(
    placa: string | Carro,
    modelo: string,
    ano: number,
    id: IEntity
  ): void {
    if (placa instanceof Carro) {
      this.service.adicionarCarro(placa);
    } else {
      const carro = new Carro(placa, modelo, ano, id);
      this.service.adicionarCarro(carro);
    }
  }
  adicionarCliente(
    nome: string,
    documento: string,
    id: IEntity,
    carteiraMotorista: string
  ): void {
    const cliente = new Cliente(nome, documento, id, carteiraMotorista);
    this.service.adicionarCliente(cliente);
  }

  adicionarVendedor(
    nome: string,
    documento: string,
    id: IEntity,
    nivelCargo: Ecargo
  ): void {
    const vendedor = new Vendedor(nome, documento, id, nivelCargo);
    this.service.adicionarVendedor(vendedor);
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
