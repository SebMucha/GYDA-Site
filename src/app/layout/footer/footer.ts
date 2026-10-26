import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactForm } from '../../shared/contact-form/contact-form';
import { SITE_LINKS } from '../../shared/site-links';

@Component({
  selector: 'app-footer',
  imports: [ContactForm],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly links = SITE_LINKS;
  protected readonly year = new Date().getFullYear();
}
