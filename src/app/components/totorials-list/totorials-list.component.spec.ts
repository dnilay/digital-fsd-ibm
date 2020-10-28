import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotorialsListComponent } from './totorials-list.component';

describe('TotorialsListComponent', () => {
  let component: TotorialsListComponent;
  let fixture: ComponentFixture<TotorialsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotorialsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotorialsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
