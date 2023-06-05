import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurtidasPage } from './curtidas.page';

describe('CurtidasPage', () => {
  let component: CurtidasPage;
  let fixture: ComponentFixture<CurtidasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CurtidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
