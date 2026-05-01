import { Component, computed, inject } from '@angular/core';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {
  private readonly filmsService = inject(FilmsService);

  public readonly films = computed(() => this.filmsService.films());
  public readonly error = computed(() => this.filmsService.error());
  public readonly isLoading = computed(() => this.filmsService.isLoading());
}
