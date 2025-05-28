import Image from "next/image";
import { getContent } from "../lib/getContent";


export default function KontaktMe({ lang }: { lang: "de" | "tr" }) {
      const contactContent = getContent(lang, "contact");

      return(
        <div>
            
        </div>
      )
    
}