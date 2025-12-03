import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionUtilisateur } from './connexion-utilisateur';

describe('ConnexionUtilisateur', () => {
  let component: ConnexionUtilisateur;
  let fixture: ComponentFixture<ConnexionUtilisateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnexionUtilisateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnexionUtilisateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
