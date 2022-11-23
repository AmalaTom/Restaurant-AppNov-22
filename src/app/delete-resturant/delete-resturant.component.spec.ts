import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteResturantComponent } from './delete-resturant.component';

describe('DeleteResturantComponent', () => {
  let component: DeleteResturantComponent;
  let fixture: ComponentFixture<DeleteResturantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteResturantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteResturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
