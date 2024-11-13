import { ComponentFixture, TestBed } from '@angular/core/testing';

import {ContactComponent } from './contact.component';

describe('FeaturesComponent', () => {
  let component:ContactComponent;
  let contact: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent]
    })
    .compileComponents();

    contact = TestBed.createComponent(ContactComponent);
    component = contact.componentInstance;
    contact.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
