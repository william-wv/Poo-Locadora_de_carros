import { Carro } from "../models/Carro";
import { Moto } from "../models/Moto";
import { Cliente } from "../models/Cliente";
import { Vendedor } from "../models/Vendedor";

export interface IVeiculoRepository {
  adicionarCarro(carro: Carro): void;
  adicionarMoto(moto: Moto): void;
  adicionarCliente(cliente: Cliente): void;
  adicionarVendedor(vendedor: Vendedor):void;
  listarCarrosDisponiveis(): Carro[];
  alugarCarro(placa: string): boolean;
  devolverCarro(placa: string): boolean;
}
