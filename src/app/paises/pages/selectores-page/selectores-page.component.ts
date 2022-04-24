import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-selectores-page',
  templateUrl: './selectores-page.component.html',
  styles: [
  ]
})
export class SelectoresPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region: [ '', Validators.required ] 
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  guardar(): void {
    console.log(this.miFormulario.value);
  }

}
