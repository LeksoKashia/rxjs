import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { RecipesService } from '../core/services/recipes.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../core/header/header.component';
import { Observable, catchError, combineLatest, map, of } from 'rxjs';
import { Recipe } from '../core/model/recipe.model';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    DataViewModule,
    RatingModule,
    FormsModule,
    RouterLink,
    HeaderComponent
  ],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss',
})
export class RecipesListComponent{
  recipes$ = this.service.recipes$;
  filterRecipesAction$ = this.service.filterRecipesAction$;
  filtredRecipes$ = combineLatest([this.recipes$, this.filterRecipesAction$]).pipe(
    map(([recipes, filter]: [Recipe[], Recipe]) => {
      console.log("here", recipes);
      
      return recipes.filter(recipe => recipe.title?.toLowerCase()
      .indexOf(filter?.title?.toLowerCase()) != -1)
    })
  );

  constructor(private service: RecipesService) {
  }

  ngOnInit(): void {
 
  }


  cade(){
    this.recipes$.subscribe((val)=>console.log(val)
    )
  }

}

/*
TAKEUNTIL
*/

// export class RecipesListComponent extends Utility{
//   recipes$ = this.service.recipes$;
//   recipes!: Recipe[];
//   destroy$ = new Subject<void>();
//   constructor(private service: RecipesService) {
//     super();
//   }

//   ngOnInit(): void {
//     this.service.getRecipes().pipe(
//       takeUntil(this.temp$)
//     ).subscribe({
//       next:(result) => {
//         this.recipes = result;
//       },
//       error: err => {
//         console.error('Error:', err);
//       },
//       complete: () => {
//         console.log('Observable completed');
//       }
//     }
//     )
     
//   }

// }



/*
takeuntil for interval
*/
// export class RecipesListComponent extends Utility{
//   // recipes$ = this.service.recipes$;
//   recipes!: Recipe[];
//   destroy$ = new Subject<void>();
//   constructor(private service: RecipesService) {
//     super();
//   }

//   ngOnInit(): void {
//     // this.service.getRecipes().pipe(
//     //   takeUntil(this.temp$)
//     // ).subscribe({
//     //   next:(result) => {
//     //     this.recipes = result;
//     //   },
//     //   error: err => {
//     //     console.error('Error:', err);
//     //   },
//     //   complete: () => {
//     //     console.log('Observable completed');
//     //   }
//     // }
//     // )

//     this.getData().pipe(
//       takeUntil(this.temp$)
//     ).subscribe({
//       next:(result) => {
//         console.log(result);
//         },
//       error: err => {
//         console.error('Error:', err);
//       },
//       complete: () => {
//         console.log('Observable completed');
//       }
//       }
//     )
     
//   }

//   getData() : any{
//     return interval(1000);
//   }

// }