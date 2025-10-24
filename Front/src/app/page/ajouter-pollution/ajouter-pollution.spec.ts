import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPollution } from './ajouter-pollution';

describe('AjouterPollution', () => {
  let component: AjouterPollution;
  let fixture: ComponentFixture<AjouterPollution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterPollution]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterPollution);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
