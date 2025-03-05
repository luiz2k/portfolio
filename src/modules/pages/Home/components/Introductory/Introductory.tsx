import { DecipherText } from "./components/DecipherText/DecipherText";
import { GirdImage } from "./components/GirdImage/GirdImage";

export function Introductory() {
  return (
    <section className="flex flex-col items-center justify-center gap-5 md:flex-row md:justify-between">
      <div className="flex flex-col items-center md:items-stretch">
        <p className="text-xl">
          Olá, eu me chamo <strong>Luiz</strong>
        </p>

        <DecipherText />
      </div>

      <GirdImage />
    </section>
  );
}
