import { Peaple } from "./Peaple";
import { Ecargo } from "../Enum/ECargo";
import { IEntity } from "../interfaces/IEntity";
export class Vendedor extends Peaple {
  constructor(
    nome: string,
    documento: string,
    id: IEntity,
    private nivelCargo: Ecargo  
  ) {
    super(nome, documento, id);
  }

  // Getter e Setter para 'nivelCargo'
  getNivelCargo(): Ecargo {
    return this.nivelCargo;
  }

  setNivelCargo(cargo: Ecargo): void {
    this.nivelCargo = cargo;
  }
}
