import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  formdata = {
    name:'',
    email:'',
    message:''
  }

  constructor() {}

  submitform(){
    console.log('formulario enviado',this.formdata)
  }

}

