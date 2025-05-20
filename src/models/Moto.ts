import { IEntity } from "../interfaces/IEntity";
import { Veiculo } from "./Veiculo";

export class Moto extends Veiculo{
  constructor(
    placa:string,
    modelo:string,
    ano:number,
    id: IEntity,
    private isDisponivel: boolean
  ){
    super(placa, modelo, ano,id);
  }
  
  getDisponivel(): boolean {
    return this.isDisponivel;
  }

  setDisponivel(disponivel: boolean): void {
    this.isDisponivel = disponivel;
  }

  toString(): string {
    return `${this.modelo} (${this.ano}) - Placa: ${this.placa} - ${this.isDisponivel ? 'Disponível' : 'Alugado'}`;
  }
}