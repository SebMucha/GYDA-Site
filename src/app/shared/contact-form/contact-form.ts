import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CONTACT_FORM_ENDPOINT, SITE_LINKS } from '../site-links';

type SubmitState = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-compact]': "variant() === 'compact'",
  },
})
export class ContactForm {
  readonly idPrefix = input.required<string>();
  readonly variant = input<'stacked' | 'compact'>('stacked');
  readonly submitLabel = input('Submit');

  protected readonly email = SITE_LINKS.email;
  protected readonly state = signal<SubmitState>('idle');

  protected readonly form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2), Validators.maxLength(80)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email, Validators.maxLength(120)],
    }),
    message: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10), Validators.maxLength(2000)],
    }),
    botcheck: new FormControl(false, { nonNullable: true }),
  });

  protected showError(field: 'name' | 'email' | 'message'): boolean {
    const control = this.form.controls[field];
    return control.invalid && (control.touched || control.dirty);
  }

  protected async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.state() === 'sending') return;

    this.state.set('sending');
    const { name, email, message, botcheck } = this.form.getRawValue();

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: CONTACT_FORM_ENDPOINT.accessKey,
          subject: `Website enquiry from ${name}`,
          from_name: 'GYDA website',
          name,
          email,
          message,
          botcheck,
        }),
      });
      const result = (await response.json().catch(() => null)) as { success?: boolean } | null;
      if (!response.ok || !result?.success) throw new Error('Submission rejected');

      this.form.reset();
      this.state.set('sent');
    } catch {
      this.state.set('error');
    }
  }

  protected reset(): void {
    this.state.set('idle');
  }
}
