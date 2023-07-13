import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { ClientesComponent } from './paginas/clientes/clientes.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { CuentasComponent } from './paginas/cuentas/cuentas.component';
import { MovimientosComponent } from './paginas/movimientos/movimientos.component';
import { ReportesComponent } from './paginas/reportes/reportes.component';
import { ListarClientesComponent } from './paginas/clientes/listar-clientes/listar-clientes.component';
import { CrearClientesComponent } from './paginas/clientes/crear-clientes/crear-clientes.component';
import { BuscarClientesComponent } from './paginas/clientes/buscar-clientes/buscar-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ClientesComponent,
    DashboardComponent,
    CuentasComponent,
    MovimientosComponent,
    ReportesComponent,
    ListarClientesComponent,
    CrearClientesComponent,
    BuscarClientesComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
