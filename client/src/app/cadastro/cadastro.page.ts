import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import serverApi from '../../api/serverApi.js';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  private formData: FormGroup;

  constructor(private alertController: AlertController) { }

  onSubmit(){
    //const valido = this.validarForm();

    let usuarios = serverApi('/usuarios/all');
    console.log(usuarios);
  }

  validarForm(){
    console.log(Object.values(this.formData.value));
    let itensNulos = false;
    Object.values(this.formData.value).forEach(formItem => {
      if(formItem == null){
        itensNulos = true;
      }
    });

    if (itensNulos){
      this.presentAlert('Preencha todos os campos');
      return false;
    }

    if(this.formData.value.email.indexOf('@') === -1){
      this.presentAlert('Digite um email válido');
      return false;
    }

    if(this.formData.value.senha.length < 6){
      this.presentAlert('Crie uma senha de pelo menos 6 caracteres');
      return false;
    }

    if(this.formData.value.senha !== this.formData.value.confirmSenha){
      this.presentAlert('As senhas não batem');
      return false;
    }

    return true;
  }

  async presentAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Erro',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
    this.formData = new FormGroup({
      nome: new FormControl(),
      email: new FormControl(),
      senha: new FormControl(),
      confirmSenha: new FormControl()
    });
  }
}
