import { ContactsPage } from "@/modules/pages/Contacts/ContactsPage";
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
  openGraph: {
    url: "https://luiz2k.vercel.app/contatos",
    title: "Portfólio - Contatos",
  },
};

export default ContactsPage;
