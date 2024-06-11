import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
// import { environment } from 'src/environments/environment';
const BASE_PATH = "http://localhost:3001/api"

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes$ = this.http.get<Recipe[]>(`${BASE_PATH}/recipes`);
  private filterRecipeSubject = new BehaviorSubject<Recipe>({title: '' });
  filterRecipesAction$ = this.filterRecipeSubject.asObservable();

  constructor(private http: HttpClient) { }

  updateFilter(criteria: Recipe) {
    this.filterRecipeSubject.next(criteria);
  }

  saveRecipe(formValue: any): Observable<any> {
    return this.http.post<any>(`${BASE_PATH}/recipes/save`, formValue).pipe(
      tap(res=>{
        console.log(res);
      })
    );
  }
}