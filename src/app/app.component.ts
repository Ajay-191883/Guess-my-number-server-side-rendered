import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IDeactivateGuard } from './services/guards/deactivate-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private readonly titleService: Title,
    private readonly meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: 'Guess The Number - A web-application game',
    });
    this.meta.addTag({ name: 'author', content: 'Ajay Kumar' });
    this.meta.addTag({
      name: 'keywords',
      content: 'Angular, SSR, CSR, Angular Universal',
    });
    this.titleService.setTitle('Guess The Number !');
  }
  title = 'Guess The Number!';
}
