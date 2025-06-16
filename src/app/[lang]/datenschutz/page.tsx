
import { getContent } from "@/src/lib/getContent";

type Params = { lang: "de" | "tr" };

export default function About({ params }: { params: Params }) {
  const about = getContent(params.lang, "aboutpage");
  const q = getContent(params.lang, "quotes");

return(
    <div>

        
    </div>
)}