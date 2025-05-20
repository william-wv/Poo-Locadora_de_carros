import { IEntity } from "../interfaces/IEntity";
import { Veiculo } from "./Veiculo";

// Carro.ts
export class Carro extends Veiculo {
  constructor(
    placa: string,
    modelo: string,
    ano: number,
    id: IEntity,
    private disponivel: boolean = true
  ) {
    super(placa, modelo, ano,id);
  }

  getDisponivel(): boolean {
    return this.disponivel;
  }

  setDisponivel(disponivel: boolean): void {
    this.disponivel = disponivel;
  }

  toString(): string {
    return `${this.modelo} (${this.ano}) - Placa: ${this.placa} - ${this.disponivel ? 'Disponível' : 'Alugado'}`;
  }
}
