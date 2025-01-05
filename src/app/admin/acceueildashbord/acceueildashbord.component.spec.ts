import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceueildashbordComponent } from './acceueildashbord.component';

describe('AcceueildashbordComponent', () => {
  let component: AcceueildashbordComponent;
  let fixture: ComponentFixture<AcceueildashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceueildashbordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcceueildashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
