import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapitulatifFormulairePollution } from './recapitulatif-formulaire-pollution';

describe('RecapitulatifFormulairePollution', () => {
  let component: RecapitulatifFormulairePollution;
  let fixture: ComponentFixture<RecapitulatifFormulairePollution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecapitulatifFormulairePollution]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecapitulatifFormulairePollution);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
