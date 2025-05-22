import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTypeAssistComponent } from './ngx-type-assist.component';

describe('NgxTypeAssistComponent', () => {
  let component: NgxTypeAssistComponent;
  let fixture: ComponentFixture<NgxTypeAssistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxTypeAssistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTypeAssistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
