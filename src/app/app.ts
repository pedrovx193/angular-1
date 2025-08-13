import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoCardComponent } from './producto-card/producto-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductoCardComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  titulo1 = 'Papeleria El Estudiante';
  titulo = 'Lista de Productos';
  fecha = new Date();
  productos = ['Cuadernos'];
  mostrarLista = true;
  nuevoProducto = '';

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }

  agregarProducto() {
    if (this.nuevoProducto) {
      this.productos.push(this.nuevoProducto);
      this.nuevoProducto = '';
    }

  
  }
    
}


