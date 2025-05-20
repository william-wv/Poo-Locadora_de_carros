import { LocadoraService } from "./services/LocadoraService";
import { LocadoraController } from "./controller/LocadoraController";
import { View } from "./view/View";
import { DatabaseRepository } from "./models/DataBaseRepository";

const repo = new DatabaseRepository();       
const service = new LocadoraService(repo);     
const controller = new LocadoraController(service);
const view = new View(controller);

view.iniciar();
