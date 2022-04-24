import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selectores-page',
  templateUrl: './selectores-page.component.html',
  styles: [
  ]
})
export class SelectoresPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region: [ '', Validators.required ], 
    pais: [ '', Validators.required ], 
    frontera: [ '' , Validators.required ], 
  });


  // llenar selectores
  regiones: string[] = [];
  paisesByRegion: Country[] = [];
  paisesFronterizos: string[] = [];


  constructor(private fb: FormBuilder,
              private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    // Cuando cambie la region
    this.miFormulario.get('region')?.valueChanges
      .pipe( 
        tap((_) => this.miFormulario.get('pais')?.reset('')),
        switchMap((region) => this.paisesService.getPaisesByRegion(region))
      )
      .subscribe(paises => {
        this.paisesByRegion = paises;
      });

    // cuando cambia el país
    this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap((_) => this.miFormulario.get('frontera')?.reset('')),
        switchMap(pais => this.paisesService.getPaisByCode(pais))
      )
      .subscribe(pais => this.paisesFronterizos = pais?.borders || []);
  }

  guardar(): void {
    console.log(this.miFormulario.value);
  }
  
}
