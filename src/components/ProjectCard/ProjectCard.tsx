"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { FaEye } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

import Badge from "../Badge/Badge";

import { PortableText } from "@portabletext/react";

import { ModalContext } from "@/contexts/ModalContextProvider";
import type { ProjectCardProps } from "./ProjectCard.d";

export default function ProjectCard({
  title,
  imageUrl,
  description,
  links,
  technologies,
}: ProjectCardProps) {
  const { setModal } = useContext(ModalContext);

  return (
    <>
      <article className="rounded bg-color-3/15">
        <header className="p-5">
          <h3 className="text-center text-2xl font-medium uppercase">
            {title}
          </h3>
        </header>

        <div className="grid grid-cols-1 gap-5 rounded lg:grid-cols-2 lg:px-5">
          <div className="overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              width={1280}
              height={720}
              priority
              onClick={() =>
                setModal({
                  isOpen: true,
                  src: imageUrl,
                  alt: title,
                })
              }
              className="cursor-pointer duration-150 ease-in-out hover:scale-105"
            />
          </div>

          <div className="flex h-full flex-col justify-between space-y-5 px-5 lg:px-0">
            <div className="scroll">
              <div className="prose h-[7.5rem] overflow-y-scroll pr-2 ">
                <PortableText value={description} />
              </div>
            </div>

            <div className="flex flex-wrap gap-5">
              {technologies.front_end && (
                <article className="space-y-2">
                  <h4 className="text-lg">Front-End</h4>

                  <div className="flex flex-wrap gap-2">
                    {technologies.front_end.map((skill) => (
                      <Badge
                        key={skill._id}
                        title={skill.name}
                        imageUrl={skill.imageUrl}
                      />
                    ))}
                  </div>
                </article>
              )}

              {technologies.back_end && (
                <article className="space-y-2">
                  <h4 className="text-lg">Back-End</h4>

                  <div className="flex flex-wrap gap-2">
                    {technologies.back_end?.map((skill) => (
                      <Badge
                        key={skill._id}
                        title={skill.name}
                        imageUrl={skill.imageUrl}
                      />
                    ))}
                  </div>
                </article>
              )}
            </div>
          </div>
        </div>

        <footer className="mt-5 flex flex-wrap items-center justify-center gap-5 bg-color-3/15 p-5">
          {links.source_code.front_end && (
            <Link
              title="Código fonte do front-end"
              href={links.source_code.front_end}
              target="_blank"
              className="flex items-center justify-center gap-1 hover:underline"
            >
              <IoLogoGithub /> Front-End
            </Link>
          )}

          {links.source_code.back_end && (
            <Link
              title="Código fonte do back-end"
              href={links.source_code.back_end}
              target="_blank"
              className="flex items-center justify-center gap-1 hover:underline"
            >
              <IoLogoGithub /> Back-End
            </Link>
          )}

          {links.source_code.monorepo && (
            <Link
              title="Código fonte da aplicação"
              href={links.source_code.monorepo}
              target="_blank"
              className="flex items-center justify-center gap-1 hover:underline"
            >
              <IoLogoGithub /> Código-fonte
            </Link>
          )}

          {links.visit.demo && (
            <Link
              title="Demonstração do projeto"
              href={links.visit.demo}
              target="_blank"
              className="flex items-center justify-center gap-1 hover:underline"
            >
              <FaEye /> Demonstração
            </Link>
          )}

          {links.visit.documentation && (
            <Link
              title="Documentação do projeto"
              href={links.visit.documentation}
              target="_blank"
              className="flex items-center justify-center gap-1 hover:underline"
            >
              <FaEye /> Documentação
            </Link>
          )}
        </footer>
      </article>
    </>
  );
}
