import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './paginas/clientes/clientes.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { CuentasComponent } from './paginas/cuentas/cuentas.component';
import { MovimientosComponent } from './paginas/movimientos/movimientos.component';
import { ReportesComponent } from './paginas/reportes/reportes.component';

const routes: Routes = [
  {
    path: "", component: DashboardComponent,
    children: [
      {
        path: "clientes", component: ClientesComponent
      },
      {
        path: "cuentas", component: CuentasComponent
      },
      {
        path: "movimientos", component: MovimientosComponent
      }, 
      {
        path: "reportes", component: ReportesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
