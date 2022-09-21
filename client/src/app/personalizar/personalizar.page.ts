import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalizar',
  templateUrl: './personalizar.page.html',
  styleUrls: ['./personalizar.page.scss'],
})
export class PersonalizarPage implements OnInit {

  public isHorariosOpen = false;
  public isAlimentosOpen = false;
  public isRefeicaoOpen = false;
  public isAddHorarioOpen = false;
  public isAddAlimentoOpen = false;
  public isAddRefeicaoOpen = false;

  //Abrir e fechar modais
  setHorariosOpen(isOpen: boolean) {
    this.isHorariosOpen = isOpen;
  }

  setAlimentosOpen(isOpen: boolean) {
    this.isAlimentosOpen = isOpen;
  }

  setRefeicaoOpen(isOpen: boolean) {
    this.isRefeicaoOpen = isOpen;
  }

  setAddHorarioOpen(isOpen: boolean) {
    this.isAddHorarioOpen = isOpen;
  }

  setAddAlimentoOpen(isOpen: boolean) {
    this.isAddAlimentoOpen = isOpen;
  }

  setAddRefeicaoOpen(isOpen: boolean) {
    this.isAddRefeicaoOpen = isOpen;
  }

  ngOnInit() {
  }

}
