export const SITE_LINKS = {
  facebook: 'https://www.facebook.com/GYDAssociation',
  instagram: 'https://www.instagram.com/gyda_tbilisi/',
  partnersPif: 'assets/documents/partners-pif.pdf',
  email: 'Info@gydatbilisi.ge',
  phone: '+995 511 133 874',
  address: 'Gldani ravine, building 3a, 0153 Tbilisi, Georgia',
  maps: 'https://maps.app.goo.gl/hazMwv3FhYcd5fjNA',
} as const;

export const CONTACT_FORM_ENDPOINT = {
  url: 'https://api.web3forms.com/submit',
  accessKey: '1ae5608c-6d72-4ede-ba31-ea6ab7651445',
} as const;

export interface NavItem {
  id: string;
  label: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'team', label: 'Our Team' },
  { id: 'contact', label: 'Contact' },
];
