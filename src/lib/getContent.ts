import { ReactNode } from 'react';
import de from '../data/de.json';
import tr from '../data/tr.json';

// Define the structure of your page content
type Content = {
  quoteHomeAuthor: string;
  quoteHome: string;
  buttonText: string;
  name: ReactNode;
  title: string;
  description?: string;
  content?: string;
  therapie1?: string;
  content1?: string;
  quoteTherapie1?: string;
  quoteTherapie1Author?: string;
  content2?: string;
  therapie2?: string;
  quoteTherapie2?: string;
  quoteTherapie2Author?: string;
  content3?: string;
  therapie3?: string;
  quoteTherapie3?: string;
  quoteTherapie3Author?: string;
  wordcloudPhoto?: string;
  cost1?: string;
  cost2?: string;
  cost3?: string;
  costButton?: string;
  title2?: string;
  conditions?: string;
  condition1?: string;
  condition2?: string;
  condition3?: string;
  condition4?: string;
  angeboteInfoTitle?: string;
  angeboteInfoContent1?: string;
  angeboteInfoContent2?: string;
  angeboteInfoContent3?: string;
  angeboteInfoContent4?: string;
  angeboteInfoContent5?: string;
  quoteAbout?:string;
  quoteAboutAuthor?:string;
  titleAbout?:string;
  studium?:string;
  contentAbout1?:string;
  contentAbout2?:string;
  Berufstaetigkeit?:string;
  Berufstaetigkeitjahr1?:string;
  Berufstaetigkeittext1?:string;
  Berufstaetigkeitjahr2?:string;
  Berufstaetigkeittext2?:string;
  Berufstaetigkeitjahr3?:string;
  Berufstaetigkeittext3?:string;
  Qualifikationen?:string;
  Qualifikationen1?:string;
  Qualifikationen2?:string;
  Qualifikationen3?:string;
  Qualifikationen4?:string;
  Qualifikationen5?:string;
  Qualifikationen6?:string;
  Qualifikationen7?:string;
  description1?:string;

};

// Define the available pages that can be in the JSON
type Pages = 'home' | 'about' | 'contact' | 'quotes' | 'angebote'| 'costs'|'aboutpage'; // Ensure this matches your JSON keys

// Explicitly type the imported data as an object with the page keys
const deData = de as Record<string, any>;
const trData = tr as Record<string, any>;

export function getContent(lang: 'de' | 'tr', page: Pages): Content {
  const data = lang === 'de' ? deData : trData;
  return data[page];
}
