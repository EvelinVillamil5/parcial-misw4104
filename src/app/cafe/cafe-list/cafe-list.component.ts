import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  standalone: false,
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css'],
})
export class CafeListComponent implements OnInit {
  cafes: Array<Cafe> = [];
  totalOrigen: number = 0;
  totalBlend: number = 0;

  constructor(
    private cafeService: CafeService,
    private changeDetector: ChangeDetectorRef
  ) {}

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
      this.calcularTotales();
      this.changeDetector.markForCheck();
    });
  }

  calcularTotales(): void {
    this.totalOrigen = this.cafes.filter(
      (c) => c.tipo === 'Café de Origen'
    ).length;
    this.totalBlend = this.cafes.filter((c) => c.tipo === 'Blend').length;
  }

  ngOnInit() {
    this.getCafes();
  }
}