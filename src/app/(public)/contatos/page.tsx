import { getContacts } from "@/api/sanityServices";
import ContactCard from "@/components/ContactCard/ContactCard";

import Link from "next/link";

export default async function Contacts() {
  const contacts = await getContacts();

  return (
    <section className="space-y-24">
      <h1 className="flex flex-col text-center text-4xl font-bold text-color-3 sm:text-5xl md:text-6xl lg:text-7xl">
        Contatos
      </h1>

      <section className="space-y-5">
        <h2 className="flex items-center justify-center gap-5 whitespace-nowrap text-center text-3xl font-semibold text-color-3 sm:text-4xl">
          Redes <hr className="w-full" />
        </h2>

        <div className="ml-0 grid grid-cols-[repeat(auto-fill,15rem)] justify-center gap-5 md:ml-5 lg:justify-normal">
          {contacts.map((contact) =>
            contact.has_url ? (
              <Link key={contact.title} href={contact.url} target="_blank">
                <ContactCard
                  title={contact.title}
                  description={contact.description}
                  imageUrl={contact.imageUrl}
                />
              </Link>
            ) : (
              <ContactCard
                key={contact.title}
                title={contact.title}
                description={contact.description}
                imageUrl={contact.imageUrl}
              />
            ),
          )}
        </div>
      </section>
    </section>
  );
}
