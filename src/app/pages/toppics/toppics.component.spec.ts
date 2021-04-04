import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppicsComponent } from './toppics.component';

describe('ToppicsComponent', () => {
  let component: ToppicsComponent;
  let fixture: ComponentFixture<ToppicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToppicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
