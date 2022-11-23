import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResturantComponent } from './view-resturant.component';

describe('ViewResturantComponent', () => {
  let component: ViewResturantComponent;
  let fixture: ComponentFixture<ViewResturantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewResturantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewResturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
