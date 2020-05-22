import { Component, OnInit, AfterViewInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cv-editor',
  templateUrl: './cv-editor.component.html',
  styleUrls: ['./cv-editor.component.scss']
})
export class CvEditorComponent implements AfterViewInit {
  cvData: string;
  @Output() cvChange: EventEmitter<string> = new EventEmitter<string>();

  markdownEditorOptions

  constructor() {
    this.markdownEditorOptions = {
      showPreviewPanel: false,
      showBorder: false,
      resizable: true
    }
  }

  ngAfterViewInit(): void {
  }

  @Input()
  get cv() {
    return this.cvData;
  }

  set cv(val: string) {
    this.cvData = val;
    this.cvChange.emit(this.cvData);
  }
}
