import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Hero } from '../sections/hero/hero';
import { Mission } from '../sections/mission/mission';
import { Work } from '../sections/work/work';
import { About } from '../sections/about/about';
import { Projects } from '../sections/projects/projects';
import { Team } from '../sections/team/team';
import { Contact } from '../sections/contact/contact';

@Component({
  selector: 'app-layout',
  imports: [Header, Footer, Hero, Mission, Work, About, Projects, Team, Contact],
  template: `
    <a class="skip-link" href="#main">Skip to content</a>
    <app-header />
    <main id="main">
      <app-hero />
      <app-mission />
      <app-work />
      <app-about />
      <app-projects />
      <app-team />
      <app-contact />
    </main>
    <app-footer />
  `,
  styles: `
    :host {
      display: block;
    }

    .skip-link {
      position: fixed;
      top: 8px;
      left: 8px;
      z-index: 200;
      padding: 10px 16px;
      border-radius: 8px;
      background: var(--color-white);
      color: var(--color-indigo);
      font-weight: 600;
      transform: translateY(-150%);
      transition: transform 0.2s var(--ease);

      &:focus {
        transform: none;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout {}
