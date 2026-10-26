import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

interface MissionValue {
  title: string;
  text: string;
  icon: 'people' | 'globe' | 'heart' | 'leaf';
}

@Component({
  selector: 'app-mission',
  imports: [RevealDirective],
  templateUrl: './mission.html',
  styleUrl: './mission.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Mission {
  protected readonly values: readonly MissionValue[] = [
    {
      title: 'Inclusion & Integration',
      text: 'Opening local and European mobility projects to IDPs, migrants and young people with fewer opportunities.',
      icon: 'people',
    },
    {
      title: 'Active Citizenship',
      text: 'Involving young people in international educational programmes that support Georgia’s European integration.',
      icon: 'globe',
    },
    {
      title: 'Tolerance & Diversity',
      text: 'Fostering respect and equality towards diverse cultures, values and ways of life.',
      icon: 'heart',
    },
    {
      title: 'Environment',
      text: 'Drawing attention to local environmental problems and turning them into youth-led action.',
      icon: 'leaf',
    },
  ];
}
