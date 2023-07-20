import { Cuenta } from "./Cuenta";

export class Movimiento {
    ID: number = NaN;
    fecha: Date = new Date();
    tipoMovimiento: String = "";
    valor: number = NaN;
    saldo: number = NaN;
    cuenta: Cuenta = new Cuenta();
}