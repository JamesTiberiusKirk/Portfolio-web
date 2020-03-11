import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Exp } from '../../../models/cv';

@Component({
  selector: 'app-exp-editor',
  templateUrl: './exp-editor.component.html',
  styleUrls: ['./exp-editor.component.scss']
})
export class ExpEditorComponent implements OnInit {
  @Input() expData: Exp;
  expForm: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
    this.expForm = new FormGroup({
      languages: new FormArray([]),
      description: new FormControl(),
      lang_type: new FormControl()
    });
  }

  get languageForms(){
    return this.expForm.get('languages') as FormArray;
  }

  addLanguages(){
    const language = new FormGroup({
      language: new FormControl(),
      frameworks: new FormControl() 
    });
    this.languageForms.push(language);
  }

  deleteLanguages(i){
    this.languageForms.removeAt(i);
  }

}
