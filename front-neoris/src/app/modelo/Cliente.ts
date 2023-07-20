import { Persona } from "./Persona";

export class Cliente {
    public clienteID: number;
    public contra: String = "";
    public estado: number = NaN;
    public persona: Persona = new Persona();
}