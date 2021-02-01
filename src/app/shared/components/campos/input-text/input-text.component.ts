import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidarCamposService } from '../validar-campos.service';

@Component({
  selector: 'dio-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {

  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() minimo = 2;
  @Input() maximo = 200;

  constructor(public validacao: ValidarCamposService) { }

  get formControl(): AbstractControl{
    return this.formGroup.controls[this.controlName];
  }
}
