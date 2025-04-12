import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexContainerComponent } from './pokedex-container.component';

describe('PokedexContainerComponent', () => {
  let component: PokedexContainerComponent;
  let fixture: ComponentFixture<PokedexContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
