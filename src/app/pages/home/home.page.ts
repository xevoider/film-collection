import { Component, computed, inject, signal } from '@angular/core';
import { SearchbarComponent } from "../../components/searchbar/searchbar.component";
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-home',
  imports: [SearchbarComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {
  private readonly filmsService = inject(FilmsService);

  private readonly search = signal<string>('');

  public readonly error = computed(() => this.filmsService.error());
  public readonly isLoading = computed(() => this.filmsService.isLoading());

  public readonly filteredFilms = computed(() => {
    const films = this.filmsService.films();
    const search = this.search();

    return films.filter((film) => film.title.toLowerCase().includes(search.toLowerCase()));
  });

  public handleSearch(event: string): void {
    this.search.set(event);
  }
}
