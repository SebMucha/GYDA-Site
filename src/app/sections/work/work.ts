import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

interface WorkItem {
  title: string;
  text: string;
}

@Component({
  selector: 'app-work',
  imports: [RevealDirective],
  templateUrl: './work.html',
  styleUrl: './work.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Work {
  protected readonly items: readonly WorkItem[] = [
    {
      title: 'Non-Formal Education Methods',
      text: 'Helping young people develop interpersonal and social competences through certified international methodologies',
    },
    {
      title: 'Community & Charity Events',
      text: 'Engaging in hands-on activities like ecological clean-ups and charity events for the local community',
    },
    {
      title: 'Peace Debates & Workshops',
      text: 'Practicing negotiation and dialogue through events like "Peace Walk Georgia" and Karl Popper style tournaments',
    },
    {
      title: 'Inclusive Integration',
      text: 'Supporting Internally Displaced People (IDPs) and migrants through free language courses and social tools.',
    },
    {
      title: 'International Mobilities',
      text: 'Providing access to European educational programs and Erasmus+ projects to support EU integration',
    },
    {
      title: 'Academic Partnerships',
      text: 'Utilizing university premises, such as Grigol Robakidze University, for professional workshops and gatherings',
    },
  ];
}
