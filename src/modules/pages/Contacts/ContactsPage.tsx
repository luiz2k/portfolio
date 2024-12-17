import { ContactCard } from "@/modules/shared/components/ContactCard/ContactCard";
import { IntroductoryTitle } from "@/modules/shared/components/IntroductoryTitle/IntroductoryTitle";
import { AtSign, Github, Linkedin } from "lucide-react";

export function ContactsPage() {
  return (
    <section className="grid gap-10">
      <IntroductoryTitle
        title="Contatos"
        description="Como entrar em contato comigo"
      />

      <div className="grid grid-cols-[repeat(auto-fill,15.166rem)] justify-center gap-5">
        <ContactCard
          icon={AtSign}
          title="E-mail"
          description="luiz2k.cv@gmail.com"
        />
        <ContactCard icon={Github} title="GitHub" description="@luiz2k" />
        <ContactCard icon={Linkedin} title="LinkedIn" description="@luiz2k" />
      </div>
    </section>
  );
}
