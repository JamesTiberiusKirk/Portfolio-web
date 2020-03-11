import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpEditorComponent } from './exp-editor.component';

describe('ExpEditorComponent', () => {
  let component: ExpEditorComponent;
  let fixture: ComponentFixture<ExpEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
