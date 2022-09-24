import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-personalizar',
  templateUrl: './personalizar.page.html',
  styleUrls: ['./personalizar.page.scss'],
})
export class PersonalizarPage implements OnInit {

  isHorariosOpen = false;
  isAlimentosOpen = false;
  isRefeicaoOpen = false;
  isAddHorarioOpen = false;
  isAddAlimentoOpen = false;
  isAddRefeicaoOpen = false;
  alimentosRefeicao = [
    { val: 'arroz', isChecked: false, qnt: null },
    { val: 'feijao', isChecked: false, qnt: null },
    { val: 'batata', isChecked: false, qnt: null },
    { val: 'carne vermelha', isChecked: false, qnt: null },
    { val: 'frango desfiado', isChecked: false, qnt: null },
    { val: 'brocolis', isChecked: false, qnt: null },
  ];
  isQntAlimentosModalOpen = false;
  canDismiss = false;

  constructor(private alertController: AlertController) {}

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

  //Montar Refeição
  openQntAlimentosModal(){
    let qntAlimentosNaoCheckados = 0;
    this.alimentosRefeicao.forEach(alimento => {
      if(!alimento.isChecked){
        qntAlimentosNaoCheckados++;
      }
    });

    if (qntAlimentosNaoCheckados === this.alimentosRefeicao.length){
      this.presentAlert('Selecione ao menos 1 alimento');
    } else {
      this.isQntAlimentosModalOpen = true;
    }

  }

  async presentAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Aviso!',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

  closeQntAlimentosModal(){
    this.canDismiss = true;
    this.isQntAlimentosModalOpen = false;
    setTimeout(() => {
      this.canDismiss = false;
    }, 700);
  }

  confirmarAlimentos(){
    let formValido = true;

    this.alimentosRefeicao.forEach(alimento => {
      if (alimento.isChecked && alimento.qnt <= 0){
        formValido = false;
      }
    });

    if (formValido){
      this.closeQntAlimentosModal();
      console.log(this.alimentosRefeicao);
    } else {
     this.presentAlert('Preencha todos os alimentos com algum peso');
    }
  }

  ngOnInit() {
  }

}
