import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditthingComponent } from './editthing.component';

describe('EditthingComponent', () => {
  let component: EditthingComponent;
  let fixture: ComponentFixture<EditthingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditthingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditthingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
