import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreOAutor } from './sobre-o-autor';

describe('SobreOAutor', () => {
  let component: SobreOAutor;
  let fixture: ComponentFixture<SobreOAutor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreOAutor],
    }).compileComponents();

    fixture = TestBed.createComponent(SobreOAutor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
