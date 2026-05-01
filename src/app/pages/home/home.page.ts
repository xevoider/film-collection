import { Component, computed, inject, OnInit, resource } from '@angular/core';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage implements OnInit {
  private readonly filmsService = inject(FilmsService);

  public readonly films = computed(() => this.filmsService.films());
  public readonly error = computed(() => this.filmsService.error());
  public readonly isLoading = computed(() => this.filmsService.isLoading());

  public ngOnInit(): void {
    this.filmsService.reload();
  }
}
