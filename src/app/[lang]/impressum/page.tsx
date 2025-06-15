import { getContent } from "@/src/lib/getContent";

type Params = { lang: "de" | "tr" };

export default function Impressum({ params }: { params: Params }) {
  const impressumContent = getContent(params.lang, "impressum");

  return (
    <main>
      <section className="max-w-3xl mx-auto px-4 py-12 bg-[var(--color-foreground)] text-[var(--color-heading)]">
        <h2 className="text-3xl font-bold mb-6 text-center">{impressumContent.title}</h2>

        <div className="space-y-6 text-base leading-relaxed">
          <div>
            <h4 className="font-semibold text-lg mb-1">{impressumContent.content}</h4>
            <p>{impressumContent.name}</p>
            <p>{impressumContent.jobtitle}</p>
            <p>{impressumContent.address}</p>
            <p>{impressumContent.telefon}</p>
            <p>{impressumContent.email}</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-1">{impressumContent.responsible}</h4>
            <p>{impressumContent.responsibleName}</p>
            <p>{impressumContent.address}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
