import { getContent } from "@/src/lib/getContent";
import Button from "@/src/components/Button";

type Params = { lang: "de" | "tr" };

export default function Contact({ params }: { params: Params }) {
  const contactContent = getContent(params.lang, "kontaktpage");

  return (
    <div className=" py-10 px-4 min-h-screen">
      <h2 className="text-center text-2xl font-semibold text-[var(--color-heading)] mb-10">
        {contactContent.title}
      </h2>

      <form className="max-w-xl mx-auto space-y-6">
        {/* Name & Vorname Row */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label htmlFor="name" className="block mb-1 text-[var(--color-heading)] font-semibold">
              {contactContent.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-[var(--color-foreground)] rounded-xl py-3 px-4  text-green-900 placeholder-gray-400 focus:outline-none"
              placeholder={contactContent.namePlaceholder ?? "deinen Namen eingeben"}
            />
          </div>

          <div className="w-1/2">
            <label htmlFor="vorname" className="block mb-1 text-[var(--color-heading)] font-semibold">
              {contactContent.vorname}
            </label>
            <input
              type="text"
              id="vorname"
              name="vorname"
              className="w-full bg-[var(--color-foreground)] rounded-xl py-3 px-4  text-green-900 placeholder-gray-400 focus:outline-none"
              placeholder={contactContent.vornamePlaceholder}
            />
          </div>
        </div>

        {/* Telefonnummer */}
        <div>
          <label htmlFor="telefonnummer" className="block mb-1 text-[var(--color-heading)] font-semibold">
            {contactContent.telefonnummer}
          </label>
          <input
            type="text"
            id="telefonnummer"
            name="telefonnummer"
            className="w-full bg-[var(--color-foreground)] rounded-xl py-3 px-4  text-green-900 placeholder-gray-400 focus:outline-none"
            placeholder={contactContent.telefonnummerPlaceholder}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1 text-[var(--color-heading)] font-semibold">
            {contactContent.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-[var(--color-foreground)] rounded-xl py-3 px-4 text-green-900 placeholder-gray-400 focus:outline-none"
            placeholder={contactContent.emailPlaceholder}
          />
        </div>

        {/* Nachricht */}
        <div>
          <label htmlFor="message" className="block mb-1 text-[var(--color-heading)] font-semibold">
            {contactContent.nachricht}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full bg-[var(--color-foreground)] rounded-xl py-3 px-4  text-green-900 placeholder-gray-400 focus:outline-none"
            placeholder={contactContent.nachrichtPlaceholder}
          ></textarea>
        </div>

        {/* Button */}
        <div className="text-center">
          <Button
            text=  {contactContent.button ?? "senden"}
          />
           
        </div>
      </form>
    </div>
  );
}
