import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal;
  isModalOpen = false;
  horario: string;

  constructor(private renderer: Renderer2) {
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  cancel() {
    this.isModalOpen = false;
  }

  setHorario(horario: string) {
    this.horario = horario;
  }

  ngOnInit() {
  }

}
