// services/LocadoraService.ts
import { IVeiculoRepository } from "../interfaces/IVeiculoRepo";
import { Carro } from "../models/Carro";
import { Moto } from "../models/Moto";
import { Cliente } from "../models/Cliente";
import { Vendedor } from "../models/Vendedor";

export class LocadoraService {
  constructor(private repo: IVeiculoRepository) {}

  adicionarCarro(carro: Carro): void {
    this.repo.adicionarCarro(carro);
  }

  adicionarCliente(cliente: Cliente): void {
    this.repo.adicionarCliente(cliente);
  }

  adicionarVendedor(vendedor: Vendedor): void {
    this.repo.adicionarVendedor(vendedor);
  }


  adicionarMoto(moto: Moto): void {
    this.repo.adicionarMoto(moto);
  }

  listarCarrosDisponiveis(): Carro[] {
    return this.repo.listarCarrosDisponiveis();
  }

  alugarCarro(placa: string): boolean {
    return this.repo.alugarCarro(placa);
  }

  devolverCarro(placa: string): boolean {
    return this.repo.devolverCarro(placa);
  }

}
