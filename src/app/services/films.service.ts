import { computed, Injectable, resource, signal } from "@angular/core";
import { Film } from "../types/film.types";

@Injectable({ providedIn: 'root' })
export class FilmsService {
  private readonly filmsResource = resource<Array<Film>, unknown>({
    loader: async () => {
      const response = await fetch('/films.json');

      if (!response.ok) {
        throw new Error('Failed to fetch films!');
      }

      return await response.json();
    },
  });

  public readonly films = computed(() => this.filmsResource.value() ?? []);

  public readonly error = computed(() => this.filmsResource.error());

  public readonly isLoading = computed(() => this.filmsResource.isLoading());

  public reload(): void {
    this.filmsResource.reload();
  }
}
