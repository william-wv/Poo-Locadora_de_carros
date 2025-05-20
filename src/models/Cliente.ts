import { IEntity } from "../interfaces/IEntity";
import { Peaple } from "./Peaple";

export class Cliente extends Peaple {
  constructor(
    nome: string,
    documento: string,
    id: IEntity,
    private carteiraMotorista: string
  ) {
    super(nome, documento,id);
  }

  // Getter e Setter para 'carteiraMotorista'
  getCarteiraMotorista(): string {
    return this.carteiraMotorista;
  }

  setCarteiraMotorista(carteiraMotorista: string): void {
    this.carteiraMotorista = carteiraMotorista;
  }

  validarCarteiraMotorista(): boolean {
    return this.carteiraMotorista === 'B' || this.carteiraMotorista === 'A';
  }
}