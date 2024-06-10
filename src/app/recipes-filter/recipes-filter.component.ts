import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RecipesService } from '../core/services/recipes.service';

@Component({
  selector: 'app-recipes-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './recipes-filter.component.html',
  styleUrl: './recipes-filter.component.scss'
})
export class RecipesFilterComponent implements OnInit {

  recipeForm: FormGroup;

  constructor(private service: RecipesService, private fb: FormBuilder) {
    this.recipeForm = this.fb.group({
      title: [''],
      category: [''],
      ingredient: [''],
      tags: [''],
      prepTime: [''],
      cookingTime: [''],
    });
  }

  ngOnInit(): void {
  }

  filterResults() {
    console.log(this.recipeForm.value);
    
    this.service.updateFilter(this.recipeForm.value);
  }

  clearFilter() {
    this.recipeForm.reset();
  }
}