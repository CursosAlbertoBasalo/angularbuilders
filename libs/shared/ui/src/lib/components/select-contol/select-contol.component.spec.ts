import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectControlComponent } from './select-contol.component';

describe('SelectControlComponent', () => {
  let component: SelectContolComponent;
  let fixture: ComponentFixture<SelectContolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectControlComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
