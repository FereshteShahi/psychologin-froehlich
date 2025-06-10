import Image from "next/image";
import Link from "next/link";
import { getContent } from "../lib/getContent";
import { MapPin, Mail, Phone } from "lucide-react";
import Button from "../components/Button";

export default function KontaktMe({ lang }: { lang: "de" | "tr" }) {
  const contactContent = getContent(lang, "contact");

  return (
    <div className="bg-[var(--color-foreground)] text-center">
      <h4 className="w-100 text-left m-9">{contactContent.content}</h4>
      <div className="md:flex md:flex-row-reverse md:gap-5 md:items-center ">
        <Image
          src="/images/praxis.jpeg"
          alt="Praxis"
          width={250}
          height={250}
          className="m-auto rounded-[52px] shadow-lg md:w-[450px] md:h-[400px] md:m-5"
          priority
          loading="eager"
        />
        <div className="mt-5 mb-5 flex justify-center items-center ">
          <div className="flex flex-col items-start space-y-6">
            {/* Address with Google Maps link */}
            <a
              href="https://www.google.com/maps/place/Asamstraße+8,+81541+München"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4  hover:underline"
            >
              <MapPin className="w-8 h-8 mt-1" />
              <div className="flex flex-col">
                <p className="">Asamstraße 8</p>
                <p className="text-lg">81541 München</p>
              </div>
            </a>

            {/* Phone with tel: link */}
            <a
              href="tel:+4915781639662"
              className="flex items-center gap-4  hover:underline"
            >
              <Phone className="w-8 h-8" />
              <p className="text-lg font-medium">+49 1578 1639662</p>
            </a>

            {/* Email with mailto: link */}
            <a
              href="mailto:duygu.froehlich@web.de"
              className="flex items-center gap-4 hover:underline"
            >
              <Mail className="w-8 h-8" />
              <p className="text-lg font-medium">duygu.froehlich@web.de</p>
            </a>
          </div>
        </div>
      </div>

      <Link href="/" className="">
        <Button text={contactContent.contactButton ?? ""} />
      </Link>
      <div className="h-15">

      </div>

    </div>
  )

}