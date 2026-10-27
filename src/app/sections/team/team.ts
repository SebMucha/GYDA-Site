import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
}

@Component({
  selector: 'app-team',
  imports: [NgTemplateOutlet, RevealDirective],
  templateUrl: './team.html',
  styleUrl: './team.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Team {
  protected readonly members: readonly TeamMember[] = [
    {
      name: 'Mariam Dogadze',
      role: 'Board member and Project Manager',
      bio: 'Mariam Dogadze is a youth worker with 50+ projects of experience in youth work and international initiatives. She combines strong leadership skills with practical expertise in coordination and facilitation, and is actively engaged in Erasmus+ initiatives. Passionate about inclusion and personal growth, she is dedicated to creating meaningful opportunities for young people.',
      photo: 'assets/images/Mariam Dogadze.jpg',
    },
    {
      name: 'Likuna Darchia',
      role: 'Board member and Digital Content Creator',
      bio: 'Likuna holds a Bachleor of Journalism and Mass Communications from Grigol Robakidze University and has experience in media, communication and content creation. She has also taken part in a university talk show and is especially interested in digital and social media storytelling. Her academic background, paired with her interest in visual and social media content, allows her to approach communication in a fresh and dynamic way.',
      photo: 'assets/images/Likuna darchia.jpg',
    },
    {
      name: 'Luka Kervalidze',
      role: 'Board Member and Project Coordinator',
      bio: 'An active youth worker deeply involved in Erasmus+ projects, with a particular interest in youth empowerment. As an ambassador for Kutaisi International University in 2020–2021, he was focusing on event planning, project coordination and student engagement. Currently, he is pursuing a bachelor’s degree in Law at Ilia State University, balancing his academic pursuits with a strong interest in youth work and international cooperation.',
      photo: 'assets/images/Luka Kervalidze.jpg',
    },
    {
      name: 'Lasha Berikishvili',
      role: 'Board member and Project Coordinator',
      bio: 'Lasha holds a Bachelor of Arts in American Studies from Tbilisi State University, graduating in 2023. Since 2020, he has been active in international youth work through 20+ Erasmus+ Youth Exchanges and Training Courses, and has already had two project proposals approved under Erasmus+. He also has experience as a coordinator and facilitator at GYDA, completed a year of ESC volunteering in Latvia, and has been accepted to Vilnius University for a Master’s in International Communication.',
      photo: 'assets/images/Lasha Berikishvili.jpg',
    },
    {
      name: 'Nika Gogoladze',
      role: 'Project Coordinator and Youth Worker',
      bio: 'Holds a Bachelor’s degree in History. Since 2020, he has been actively involved in volunteer work and Erasmus+ projects, participating in 10+ Youth Exchange and Training Courses. He was elected Chairman of the student self-government at Modusi College, where he led initiatives such as sports events, a photography contest and an English conversation club. As a member of the student club “Publicity”, Nika is motivated to share his experience and continue developing in international youth work and project coordination.',
      photo: 'assets/images/Nika Gogoladze.jpg',
    },
    {
      name: 'Luka Urumashvili',
      role: 'Volunteer Coordinator',
      bio: 'Luka is studying International Relations at the University of Georgia and Digital Technologies Support/IT at the College of Marneuli. He has hands-on IT experience and is interested in technology, system configuration and practical problem-solving. He also takes part in civic activities and international programs to build his skills and perspective.',
      photo: 'assets/images/Luka Urumashvili.jpg',
    },
    {
      name: 'Ana Turashvili',
      role: 'Partnership & Mobility Coordinator',
      bio: 'Ana is studying Journalism and Mass Communications at Alterbridge University and has strong practical experience in strategic communications. She has taken part in more than ten projects, often in leadership roles and works in marketing on campaigns and adaptations for major international brands. This mix of media and corporate marketing experience helps her navigate complex communication environments with ease.',
      photo: 'assets/images/Ana Turashvili.jpg',
    },
    {
      name: 'Elene Kotrikadze',
      role: 'Volunteer Coordinator',
      bio: 'Elene holds a bachelor’s degree in International Relations. Since her student years, she has been motivated to participate in exchange programs to develop her communication skills and connect with people from different cultures. GYDA organization has played a significant role in this journey by informing her about these opportunities and supporting her involvement.',
      photo: 'assets/images/Elene Kotrikadze.jpg',
    },
    {
      name: 'Lizi Khundadze',
      role: 'International Educational Projects Manager',
      bio: 'Lizi, a Sociology student at Tbilisi State University, is actively involved in youth work through Georgian Youth Development Association. She has experience in coordinating international projects, particularly within Erasmus+ initiatives, focusing on youth empowerment, intercultural dialogue, and active citizenship.',
      photo: 'assets/images/Lizi Khundadze.jpg',
    },
    {
      name: 'Saba Muchauri',
      role: 'Digital Creator and Youth Worker',
      bio: 'Saba is studying Information Technologies at the Business and Technology University of Georgia. He has gained significant professional experience working as an IT Support and specializing in technical troubleshooting and system configuration. He is a highly active member of the youth work community, having participated in 10+ different projects and international training courses. He is expanding his capabilities by training to become a professional facilitator and project writer, aiming to design and lead future international initiatives.',
      photo: 'assets/images/Saba Muchauri.jpg',
    },
  ];

  protected readonly president: TeamMember = {
    name: 'Raul Labadze',
    role: 'Co-founder of GYDA and President',
    bio: 'Raul serves as President of GYDA since 2024. He is an experienced youth worker with more than 10 years of involvement in youth work, international cooperation and project development. He holds an MA in European Interdisciplinary Studies from the College of Europe and has led and supported numerous youth initiatives, including Erasmus+ projects, capacity-building activities and intercultural exchanges.',
    photo: 'assets/images/Raul Labadze.jpg',
  };
}
