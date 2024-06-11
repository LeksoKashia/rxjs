import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RecipesService } from '../core/services/recipes.service';
import * as recipeTags from '../core/model/tags';
import { catchError, concatMap, of, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RouterModule } from '@angular/router';
import { Recipe } from '../core/model/recipe.model';



@Component({
  selector: 'app-recipe-creation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RadioButtonModule, ButtonModule, RouterModule],
  templateUrl: './recipe-creation.component.html',
  styleUrl: './recipe-creation.component.scss'
})
export class RecipeCreationComponent {
  constructor(private formBuilder: FormBuilder, private service: RecipesService) { }


  ngOnInit(): void {
    this.recipeForm.valueChanges.subscribe(
    formValue => {
      console.log(formValue);
      console.log();
      
       this.service.saveRecipe(this.recipeForm.value as Recipe).subscribe(
        res => console.log("res", res)
        
       );
    }
    );
  }

  recipeForm = this.formBuilder.group({
    id: Math.floor(1000 + Math.random() * 9000),
    title: [''],
    ingredients: [''],
    tags: [''],
    imageUrl: [''],
    cookingTime: [''],
    yield: [],
    prepTime: [''],
    steps: ['']
  });
  tags = recipeTags.TAGS;
  // valueChanges$ = this.recipeForm.valueChanges.pipe(
  //   concatMap(formValue => this.service.saveRecipe(formValue)),
  //   catchError(errors => of(errors)),
  //   tap(result=>this.saveSuccess(result))
  // );


  saveSuccess(result: any) {
    console.log('Saved successfully');
  }
}