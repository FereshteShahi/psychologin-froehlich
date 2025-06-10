import { getContent } from "@/src/lib/getContent";




type Params = { lang: "de" | "tr" };

export default function Contact( { params }: { params: Params }) {
  const contactContent = getContent(params.lang, "kontaktpage");

  return (
    <div className="">
      <h2 className="text-center text-2xl">{contactContent.title}</h2>
      <form>
        <label htmlFor="">{contactContent.name}</label>
        <input
          type="text"
          name="name"
          className="border-2 border-gray-300 rounded-md p-2 w-full mb-4"
          placeholder={contactContent.namePlaceholder}
        />
        <label htmlFor="">{contactContent.vorname}</label>
        <input
          type="text"
          name="vorname"
          className="border-2 border-gray-300 rounded-md p-2 w-full mb-4"
          placeholder={contactContent.vornamePlaceholder}
        />
        <label htmlFor="">{contactContent.telefonnummer}</label>
        <input
          type="text"
          name="telefonnummer"
          className="border-2 border-gray-300 rounded-md p-2 w-full mb-4"
          placeholder={contactContent.telefonnummerPlaceholder}
        />
      </form>

    </div>
  );
}