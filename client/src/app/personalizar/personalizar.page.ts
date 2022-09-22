import { Component, OnInit } from '@angular/core';

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
    { val: 'arroz', isChecked: false, qnt: 0 },
    { val: 'feijao', isChecked: false, qnt: 0 },
    { val: 'batata', isChecked: false, qnt: 0 },
    { val: 'carne vermelha', isChecked: false, qnt: 0 },
    { val: 'frango desfiado', isChecked: false, qnt: 0 },
    { val: 'brocolis', isChecked: false, qnt: 0 },
  ];

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

  _getSelectedItem(selectedItem){
    this.alimentosRefeicao.forEach(item => {
      if(item.val === selectedItem.val){
        item.isChecked = selectedItem.isChecked
      }
    });

    console.log(this.alimentosRefeicao);
  }

  _getSelectedItemQnt(selectedItem){
    console.log(selectedItem);
  }

  ngOnInit() {
  }

}
