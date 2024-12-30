import { ContactsPage } from "@/modules/pages/Contacts/ContactsPage";
import { setOpengraph } from "@/modules/shared/functions/setOpengraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio - Contatos",
  keywords: [
    "contatos",
    "e-mail",
    "telefone",
    "whatsapp",
    "github",
    "linkedin",
  ],
  openGraph: setOpengraph({ title: "Início", pathname: "/contatos" }),
};

export default ContactsPage;
