import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  meuForm: FormGroup;

  constructor(private fb: FormBuilder, private dadosService: DadosService) {
    this.meuForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      idade: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.meuForm.valid) {
      this.dadosService.enviarDados(this.meuForm.value).subscribe(() => {
        this.meuForm.reset();
      });
    } else {
      console.log('Formulário inválido');
    }
  }
}
