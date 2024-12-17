import { NavigationAnchor } from "../NavigationAnchor/NavigationAnchor";

export function Navigation() {
  return (
    <nav className="flex flex-col items-center gap-2 pt-5 sm:flex sm:flex-row sm:p-0">
      <NavigationAnchor href="/">Início</NavigationAnchor>
      <NavigationAnchor href="/habilidades">Habilidades</NavigationAnchor>
      <NavigationAnchor href="/servicos">Serviços</NavigationAnchor>
      <NavigationAnchor href="/projetos">Projetos</NavigationAnchor>
      <NavigationAnchor href="/contatos">Contatos</NavigationAnchor>
    </nav>
  );
}
