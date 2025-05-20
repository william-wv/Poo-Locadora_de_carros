import { IEntity } from "../interfaces/IEntity";

export class Veiculo {
  private _placa: string;
  private _modelo: string;
  private _ano: number;
  private _id: IEntity;

  constructor(placa: string, modelo: string, ano: number, id:IEntity) {
    this._placa = placa;
    this._modelo = modelo;
    this._ano = ano;
    this._id = id;
  }

  get placa(): string {
    return this._placa;
  }

  set placa(value: string) {
    this._placa = value;
  }

  get modelo(): string {true
    return this._modelo;
  }

  set modelo(value: string) {
    this._modelo = value;
  }

  get ano(): number {
    return this._ano;
  }

  set ano(value: number) {
    this._ano = value;
  }
}
