import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Cv } from 'src/app/models/index';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.scss']
})
export class CvListComponent implements OnInit {
  @Input() cvList: Array<Cv>
  @Output() cvChange: EventEmitter<Cv> = new EventEmitter<Cv>()
  cvCurr:Cv

  constructor() { }

  ngOnInit(): void {
  }

  btnClick(i){
    this.cv = this.cvList[i]
  }

  @Input()
  get cv(){
    return this.cvCurr;
  }

  set cv(cv){
    this.cvCurr = cv
    this.cvChange.emit(this.cvCurr);
  }

}
