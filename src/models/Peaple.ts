import { IEntity } from "../interfaces/IEntity";

export class Peaple {
  constructor(
    public nome: string,
    public documento: string,
    public id: IEntity
  ) {}
}
