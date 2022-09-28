import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  private formData: FormGroup;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  constructor(private alertController: AlertController, private httpClient: HttpClient) { }

  onSubmit(){
    //const valido = this.validarForm();

    fetch('http://localhost:8080/usuario/cadastrar', {
      method: 'POST',
      headers: {
        'Accept': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: this.formData.value
    })
      .then(res => console.log(res));

      /*this.httpClient.post('http://localhost:8080/usuario/cadastrar', this.formData.value, this.httpOptions).subscribe(
        res => console.log(res)
      );*/
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
