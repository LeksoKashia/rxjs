import { Component } from '@angular/core';
import { RecipesListComponent } from '../recipes-list/recipes-list.component';
import { CommonModule } from '@angular/common';
import { RecipesFilterComponent } from '../recipes-filter/recipes-filter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecipesListComponent,CommonModule, RecipesFilterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
