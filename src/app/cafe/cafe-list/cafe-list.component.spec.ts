import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { CafeListComponent } from './cafe-list.component';
import { Cafe } from '../cafe';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CafeListComponent],
      imports: [CommonModule],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;

    // Listado de 3 cafés de prueba
    component.cafes = [
      new Cafe(1, 'Café Uno', 'Blend', 'Región Uno', 'Dulce', 1500, 'uno.jpg'),
      new Cafe(2, 'Café Dos', 'Café de Origen', 'Región Dos', 'Cítrico', 1600, 'dos.jpg'),
      new Cafe(3, 'Café Tres', 'Blend', 'Región Tres', 'Frutal', 1700, 'tres.jpg'),
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a table with 3 rows plus the header', () => {
    const rows = fixture.debugElement.queryAll(By.css('tr'));
    // 1 fila del encabezado + 3 filas de datos
    expect(rows.length).toBe(4);
  });
});