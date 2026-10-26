import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE_LINKS } from '../../shared/site-links';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly partnersPif = SITE_LINKS.partnersPif;
}
