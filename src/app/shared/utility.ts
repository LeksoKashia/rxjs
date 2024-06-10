import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export abstract class Utility implements OnDestroy {
  temp$ = new Subject<void>();
  constructor() {}
  ngOnDestroy(): void {
    this.temp$.next();
    this.temp$.complete();
  }
}