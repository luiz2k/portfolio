import ContactCard from "@/components/ContactCard/ContactCard";

import getPortfolioData from "@/services/portfolioData";

import Link from "next/link";

export default async function Contacts() {
  const data = await getPortfolioData();

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
          {data.contacts.map((contact) =>
            contact.link ? (
              <Link key={contact.title} href={contact.link} target="_blank">
                <ContactCard
                  title={contact.title}
                  icon={contact.title}
                  description={contact.description}
                />
              </Link>
            ) : (
              <ContactCard
                key={contact.title}
                title={contact.title}
                icon={contact.title}
                description={contact.description}
              />
            ),
          )}
        </div>
      </section>
    </section>
  );
}
