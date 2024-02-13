import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAwesomeLibComponent } from './my-awesome-lib.component';

describe('MyAwesomeLibComponent', () => {
  let component: MyAwesomeLibComponent;
  let fixture: ComponentFixture<MyAwesomeLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyAwesomeLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyAwesomeLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
