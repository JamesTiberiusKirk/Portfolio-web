import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Cv, Exp } from 'src/app/models';

@Component({
  selector: 'app-cv-editor',
  templateUrl: './cv-editor.component.html',
  styleUrls: ['./cv-editor.component.scss']
})
export class CvEditorComponent implements OnInit {
  cvForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cvForm = this.fb.group({
      name: '',
      bio: '',
      exps: this.fb.array([]),
      qualifications: this.fb.array([]),
      links: this.fb.array([])
    });
  }

  get expForms() {
    return this.cvForm.get('exps') as FormArray;
  }

  get languageForms(){
    return this.expForms.get('languages') as FormArray;
  }

  get frameworkForms(){
    return this.languageForms.get('frameworks') as FormArray;
  }
  
  get qualificationForms() {
    return this.cvForm.get('qualifications') as FormArray;
  }

  get linkForms() {
    return this.cvForm.get('links') as FormArray;
  }


  addExp() {
    const exp = this.fb.group({
      languages: this.fb.array([]),
      description: '',
      lang_type: '' 
    });
    this.expForms.push(exp);
    console.log('adding exp');
    // console.log(exp)
    console.log(this.expForms.controls)
  }

  addLanguage(){
    let language = this.fb.group({
      language: '',
      frameworks: this.fb.array([])
    });
    this.languageForms.push(language);
  }

  addFramework(){
    let framework = this.fb.group({
      framework: ''  
    });
    this.frameworkForms.push(framework);
  }

  addQualification() {
    let qualification = this.fb.group({
      degree_name: '',
      institution: '',
      degree_type: '',
      graduated: '',
      grade: ''
    });
    this.qualificationForms.push(qualification);
  }

  addLinks() {
    let link = this.fb.group({
      site: '',
      link: ''
    });
    this.linkForms.push(link);
  }



  deleteExp(i) {
    this.expForms.removeAt(i);
  }

  deleteLanguage(i){
    this.languageForms.removeAt(i);
  }

  deleteFramework(i){
    this.frameworkForms.removeAt(i);
  }

  deleteQualification(i) {
    this.qualificationForms.removeAt(i);
  }

  deleteLink(i) {
    this.linkForms.removeAt(i);
  }
}
