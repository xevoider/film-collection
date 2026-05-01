import { computed, Injectable, resource, signal } from '@angular/core';
import { Film } from '../types/film.types';

@Injectable({ providedIn: 'root' })
export class FilmsService {
  private readonly filmsResource = resource<Array<Film>, unknown>({
    loader: async () => {
      const response = await fetch('/films.json');

      if (!response.ok) {
        throw new Error('Failed to fetch films!');
      }

      const films = (await response.json()) as Array<Film>;

      this.films.set(films);
      return films;
    },
  });

  public readonly films = signal<Array<Film>>([]);

  public readonly error = computed(() => this.filmsResource.error());
  public readonly isLoading = computed(() => this.filmsResource.isLoading());
  public readonly favoriteFilms = computed(() => this.films().filter((film) => film.isFavorite));
}
