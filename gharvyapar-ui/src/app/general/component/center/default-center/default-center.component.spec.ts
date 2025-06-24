import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCenterComponent } from './default-center.component';

describe('DefaultCenterComponent', () => {
  let component: DefaultCenterComponent;
  let fixture: ComponentFixture<DefaultCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
