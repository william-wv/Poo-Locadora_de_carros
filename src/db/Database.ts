import { Carro } from "../models/Carro";
import { Cliente } from "../models/Cliente";
import { Moto } from "../models/Moto";

export class Database {
  public static carros: Carro[] = [];
  public static clientes: Cliente[] = [];
  public static motos: Moto[] = [];
}