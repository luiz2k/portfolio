import { ContactCard } from "@/modules/shared/components/ContactCard/ContactCard";
import { IntroductoryTitle } from "@/modules/shared/components/IntroductoryTitle/IntroductoryTitle";
import { contacts } from "./constants/contacts";

export function ContactsPage() {
  return (
    <section className="grid gap-10">
      <IntroductoryTitle
        title="Contatos"
        description="Como entrar em contato comigo"
      />

      <div className="grid grid-cols-[repeat(auto-fill,15.166rem)] justify-center gap-5">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.title}
            icon={contact.icon}
            title={contact.title}
            description={contact.description}
            href={contact.href}
          />
        ))}
      </div>
    </section>
  );
}
