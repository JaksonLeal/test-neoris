import { Cliente } from "./Cliente";
import { Movimiento } from "./Movimiento";

export class Cuenta {
    numCuenta: String = "";
    tipoCuenta: String = "";
    saldoInicial: number = NaN;
    estado: number = NaN;
    cliente: Cliente = new Cliente();
}
