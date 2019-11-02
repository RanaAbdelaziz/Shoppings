import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartlistingComponent } from './cartlisting.component';

describe('CartlistingComponent', () => {
  let component: CartlistingComponent;
  let fixture: ComponentFixture<CartlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
