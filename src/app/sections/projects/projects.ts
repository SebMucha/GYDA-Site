import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

interface FlagshipProject {
  tag: string;
  acronym: string;
  title: string;
  number: string;
  description: string;
  image?: string;
  url?: string;
  banner?: { title: string; subtitle: string };
}

interface YouthExchange {
  title: string;
  location: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  imports: [RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  protected readonly flagship: readonly FlagshipProject[] = [
    {
      tag: 'Erasmus+ CBY · 2024–2027',
      acronym: 'SYWOR',
      title: 'Strengthening Youth Workers and Organisations for Displaced Youth Integration and Resilience',
      number: '101185795',
      description:
        '“Stronger Together” supports displaced youth, both refugees and internally displaced persons, in Ukraine, Georgia, Turkey, Moldova and Poland. It equips youth workers and their organisations with tools and skills such as trauma-informed care and cross-cultural communication, helping displaced young people integrate, build resilience and take an active part in their communities.',
      image: 'assets/images/SYWOR.jpg',
      url: 'https://www.sywor-erasmus.eu/',
    },
    {
      tag: 'Erasmus+ CBY',
      acronym: 'PACT',
      title: 'Psychological First Aid and Creative Techniques',
      number: '101186111',
      description:
        'PACT strengthens youth mental health support with a methodology that combines psychoeducation, psychological first aid and art therapy. It trains youth workers, promotes early intervention and resilience for vulnerable groups, develops e-learning tools and works to reduce stigma by bringing mental health education into youth programmes across partner countries.',
      image: 'assets/images/PACT.jpg',
      url: 'https://pactproject.eu/',
    },
    {
      tag: 'Erasmus+ CBY · Coordinated by GYDA',
      acronym: 'EU GRA',
      title: 'Generation of Resilient Allies',
      number: '101329208',
      description:
        'EU GRA helps youth organisations in the EU and the Eastern Partnership counter disinformation and build civic resilience. Its Train-the-Trainer programme in media literacy and fact-checking will train 120 youth workers, reach 600 young people, including refugees and IDPs, and produce an open toolkit. Partners: France, Czechia, Türkiye, Armenia and Ukraine.',
      banner: { title: 'EU GRA', subtitle: 'Newly funded · Kick-off Dec 2026' },
    },
  ];

  protected readonly exchanges: readonly YouthExchange[] = [
    {
      title: 'Digital Dance',
      location: 'Gonio, Georgia',
      description:
        'The project explored the connection between dance, digital creativity, and intercultural communication. Through workshops, creative activities, group work, and cultural exchange, participants developed their communication, teamwork, creativity, and digital skills.',
      image: 'assets/images/Digital Dance.jpg',
    },
    {
      title: 'Plant Your Seeds of unity',
      location: 'Ureki, Georgia',
      description:
        'The project focused on peacebuilding, tolerance, respect, inclusion, intercultural understanding, and active youth participation. Through debates, hikes, group activities, and intercultural exchange, participants had the opportunity to share perspectives, challenge stereotypes, and build meaningful connections across borders.',
      image: 'assets/images/Plant Your Seeds of unity.jpg',
    },
    {
      title: 'Beyond the Game',
      location: 'Ureki, Georgia',
      description:
        'The project went beyond sports and competition, focusing on inclusion, equality, teamwork, resilience, and intercultural understanding. Through sports activities, group challenges, and cultural exchange, participants developed new skills, strong social connections, and shared experiences with people from different backgrounds.',
      image: 'assets/images/Beyond the Game.jpg',
    },
    {
      title: 'Act4Peace',
      location: 'Ureki, Georgia',
      description:
        'The project focused on peacebuilding, dialogue, intercultural understanding, and active youth participation. Through workshops, discussions, group activities, and intercultural exchange, participants explored ways young people can contribute to creating more inclusive, peaceful, and connected communities.',
      image: 'assets/images/Act4Peace.jpg',
    },
    {
      title: 'Creative Recycle',
      location: 'Ureki, Georgia',
      description:
        'Throughout the week, participants explored how art can become a powerful voice for the planet and a tool for raising awareness about environmental issues. They planted trees, created an eco-mural, visited the Dendrological Park and Botanical Garden, participated in clean-up activities, and discovered new ways to recycle and reuse materials.',
      image: 'assets/images/Creative Recycle.jpg',
    },
    {
      title: 'Be Positive, Be Strong',
      location: 'Gonio, Georgia',
      description:
        'The exchange focused on teamwork, healthy lifestyles, physical activity, and mental well-being. Participants took part in sports activities, energizers, discussions, and outdoor experiences designed to encourage an active and healthy lifestyle.',
      image: 'assets/images/Be Positive, Be Strong.jpg',
    },
    {
      title: 'Proud of Me',
      location: 'Kobuleti, Georgia',
      description:
        'The project focused on LGBTQ+ rights, equality, inclusion, acceptance, and respect. Participants came together as a diverse international group to explore the importance of creating a society where everyone can express their identity authentically and live without fear or discrimination.',
      image: 'assets/images/Proud of Me.jpg',
    },
    {
      title: 'Across the Lines of Conflict',
      location: 'Kobuleti, Georgia',
      description:
        'The project explored important topics including war, refugees, inclusion, conflict, empathy, and intercultural understanding. Participants from diverse backgrounds came together to learn more about the experiences and challenges faced by refugees, while discussing ways to promote inclusion and contribute to conflict resolution.',
      image: 'assets/images/Across the Lines of Conflict.jpg',
    },
    {
      title: 'CLICKBAIT: Unveiling the Truth!',
      location: 'Gonio, Georgia',
      description:
        'The project explored the dark side of fake news, clickbait, and misinformation, helping participants understand how misleading information is created, spread, and used to influence audiences. Participants learned how to identify clickbait, evaluate information critically, recognize manipulative content, and become more responsible digital citizens.',
      image: 'assets/images/CLICKBAIT Unveiling the Truth!.jpg',
    },
  ];
}
