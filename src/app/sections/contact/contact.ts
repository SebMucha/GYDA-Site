import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactForm } from '../../shared/contact-form/contact-form';
import { RevealDirective } from '../../shared/reveal.directive';
import { SITE_LINKS } from '../../shared/site-links';

@Component({
  selector: 'app-contact',
  imports: [ContactForm, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly links = SITE_LINKS;
}
