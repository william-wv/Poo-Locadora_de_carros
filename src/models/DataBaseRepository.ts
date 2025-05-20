// repositories/DatabaseRepository.ts
import { IVeiculoRepository } from "../interfaces/IVeiculoRepo";
import { Carro } from "../models/Carro";
import { Moto } from "../models/Moto";
import { Cliente } from "../models/Cliente";
import { Database } from "../db/Database";

export class DatabaseRepository implements IVeiculoRepository {
  adicionarCarro(carro: Carro): void {
    Database.carros.push(carro);
  }

  adicionarMoto(moto: Moto): void {
    Database.motos.push(moto);
  }

  adicionarCliente(cliente: Cliente): void {
    Database.clientes.push(cliente);
  }

  listarCarrosDisponiveis(): Carro[] {
    return Database.carros.filter(c => c.getDisponivel());
  }

  alugarCarro(placa: string): boolean {
    const carro = Database.carros.find(c => c.placa === placa && c.getDisponivel());
    if (carro) {
      carro.setDisponivel(false);
      return true;
    }
    return false;
  }

  devolverCarro(placa: string): boolean {
    const carro = Database.carros.find(c => c.placa === placa && !c.getDisponivel());
    if (carro) {
      carro.setDisponivel(true);
      return true;
    }
    return false;
  }
}
