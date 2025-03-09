import { NavigationAnchor } from "../NavigationAnchor/NavigationAnchor";

type NavigationProps = {
  handleNavigation?: () => void;
};
export function Navigation({ handleNavigation }: NavigationProps) {
  return (
    <nav className="flex flex-col items-center gap-2 pt-5 sm:flex sm:flex-row sm:p-0">
      <NavigationAnchor onClick={handleNavigation} href="/">
        Início
      </NavigationAnchor>
      <NavigationAnchor onClick={handleNavigation} href="/habilidades">
        Habilidades
      </NavigationAnchor>
      <NavigationAnchor onClick={handleNavigation} href="/servicos">
        Serviços
      </NavigationAnchor>
      <NavigationAnchor onClick={handleNavigation} href="/projetos">
        Projetos
      </NavigationAnchor>
      <NavigationAnchor onClick={handleNavigation} href="/contatos">
        Contatos
      </NavigationAnchor>
    </nav>
  );
}
