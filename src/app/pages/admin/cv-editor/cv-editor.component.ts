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
      exp: this.fb.array([]),
      qualifications: this.fb.array([]),
      links: this.fb.array([])
    });
  }

  get expForms() {
    return this.cvForm.get('exp') as FormArray;
  }

  get qualificationForms() {
    return this.cvForm.get('qualifications') as FormArray;
  }

  get linkForms() {
    return this.cvForm.get('links') as FormArray;
  }

  addExp() {
    let exp = this.fb.group({
      language: this.fb.array([]),
      description: '',
      lang_type: ''
    });
    this.expForms.push(exp);
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

  deleteQualification(i) {
    this.qualificationForms.removeAt(i);
  }

  deleteLink(i) {
    this.linkForms.removeAt(i);
  }
}
