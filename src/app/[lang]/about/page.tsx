import { getContent } from '@/src/lib/getContent'


export default function About({ lang }: { lang:"de" | "tr" }) {

  const about = getContent(lang, "about")
  const q = getContent(lang, "about");
  return (
    <div className="pt-20">
    </div>
  );
}   
