import Quote from "@/src/components/Quote";
import { getContent } from "@/src/lib/getContent";
import Image from "next/image";
// import Quote from "./Quote";

type Params = { lang: "de" | "tr" };

export default function About({ params }: { params: Params }) {
  const about = getContent(params.lang, "aboutpage");
  const q = getContent(params.lang, "quotes");

  return (
    <section>
      <h3 className="text-center text-3xl mt-4">{about.titleAbout}</h3>
      <div className="flex flex-col gap-[40px] justify-between lg:flex-row items-center lg:items-start text-left  max-w-5xl mx-auto px-4 py-10">
        <Image
          src="/images/aboutmeHero.jpg"
          alt="Paartherapie"
          width={450}
          height={390}
          priority
          className="rounded-[52px] w-[500px] h-[400px] md:w-[800px] md:h-[700px] lg:w-[1000px] lg:h-[80%px]"
        />
      </div>
      <div className="text-center mb-2 ">
        <p className="font-bold !text-[20px] ">{about.name}</p>
        <p className="font-bold !text-[20px] ">{about.description}</p>
        <p className="font-bold !text-[20px] ">{about.description1}</p>
      </div>

      <div>
        <div className="text-center">
          <p className=" w-100 m-auto md:text-[20px]  lg:text-[25px] lg:!w-[70%] lg:m-auto">
            {about.content}
          </p>
          <div className="self-start md:self-center md:text-[20px]  lg:text-[35px]">
            <Quote
              text={q.quoteAbout || "default quote"}
              author={q.quoteAboutAuthor || "default author"}
            />
          </div>
        </div>
      </div>

      {/* //**********STUDIUM************* */}
      <h3 className="text-xl font-semibold  m-4 text-center md:text-[18px] lg:text-[25px] lg:!text-center lg:mr-60 lg:!mb-[-40px]">
        {about.studium}
      </h3>

      <ul className="list-disc pl-5 mt-10 w-120 lg:w-[1000px] p-10  mx-auto">
        <li className="text-left ml-5 font-handlee lg:text-2xl">
          {about.contentAbout1}
        </li>
        <br />
        <li className="text-left ml-5 font-handlee lg:text-2xl">
          {about.contentAbout2}
        </li>
      </ul>

      {/* //*******Berufstaetigkeiten**** */}
      <div>
        <h3 className="text-center text-2xl mt-4">{about.Berufstaetigkeit}</h3>

        <p>{about.Berufstaetigkeitjahr1}</p>
        <p>{about.Berufstaetigkeittext1}</p>
        <p>{about.Berufstaetigkeitjahr2}</p>
        <p>{about.Berufstaetigkeittext2}</p>
        <p>{about.Berufstaetigkeitjahr3}</p>
        <p>{about.Berufstaetigkeittext3}</p>
      </div>
      <div>
        <h3>{about.Qualifikationen}</h3>
        <p>{about.Qualifikationen1}</p>
        <p>{about.Qualifikationen2}</p>
        <p>{about.Qualifikationen3}</p>
        <p>{about.Qualifikationen4}</p>
        <p>{about.Qualifikationen5}</p>
        <p>{about.Qualifikationen6}</p>
        <p>{about.Qualifikationen7}</p>
      </div>

      <div className="flex flex-col gap-[40px] justify-between lg:flex-row items-center lg:items-start text-left  max-w-5xl mx-auto px-4 py-10">
        <Image
          src="/images/aboutme2.jpeg"
          alt="Paartherapie"
          width={450}
          height={390}
          priority
          className="rounded-[52px] w-[295px] h-[360px] md:w-[360px] md:h-[480px] lg:w-[500px] lg:h-[580px] "
        />
        <Image
          src="/images/dgsf.jpg"
          alt="Paartherapie"
          width={450}
          height={390}
          priority
          className="rounded-[52px] w-[295px] h-[360px] md:w-[360px] md:h-[480px] lg:w-[500px] lg:h-[580px]"
        />
      </div>
    </section>
  );
}
