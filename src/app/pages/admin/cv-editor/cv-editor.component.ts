import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren, QueryList, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Cv, Exp } from 'src/app/models';
import { ExpEditorComponent } from '../exp-editor/exp-editor.component';

@Component({
  selector: 'app-cv-editor',
  templateUrl: './cv-editor.component.html',
  styleUrls: ['./cv-editor.component.scss']
})
export class CvEditorComponent implements AfterViewInit {
  @Input() cvForm: FormGroup;
  exps: Exp[];

  // @ViewChild(ExpEditorComponent) expChildCompoents;
  @ViewChildren('exp') expChildrenComp:QueryList<ExpEditorComponent>;

  constructor(
  ) { }

  ngAfterViewInit(): void {
    this.cvForm = new FormGroup({
      name: new FormControl(),
      bio: new FormControl(),
    });
  }

  addExp() {
    console.log(this.expChildrenComp.toArray());
  }


}
