import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'BotonF';

  tex = '';

  PopUp(Texto: HTMLInputElement): void {
    if (Texto.value === '') {
      alert('El cuadro de texto esta vacío');
    } else {
      console.log(Texto.value);
      this.tex = Texto.value;
      alert('Texto actualizado');
    }
  }
}
