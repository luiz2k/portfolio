"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { FaEye } from "react-icons/fa6";
import { IoLogoGithub, IoMdBook } from "react-icons/io";
import { LuBrain } from "react-icons/lu";

import Badge from "../Badge/Badge";

import { PortableText } from "@portabletext/react";

import type { ProjectCardProps } from "./ProjectCard.d";

export default function ProjectCard({
  title,
  imageUrl,
  description,
  links,
  technologies,
}: ProjectCardProps) {
  const [modal, setModal] = useState<boolean>(false);

  async function openModal() {
    setModal(true);
  }

  async function closeModal() {
    setModal(false);
  }

  return (
    <>
      <article
        data-image={modal}
        onClick={closeModal}
        className="invisible fixed left-0 top-0 z-10 flex size-full items-center justify-center overflow-hidden bg-white/5 p-5 opacity-0 backdrop-blur-sm duration-150 ease-in-out data-[image='true']:visible data-[image='true']:opacity-100"
      >
        <Image
          src={imageUrl}
          alt={title}
          width={1280}
          height={720}
          data-image={modal}
          className="scale-95 cursor-pointer rounded duration-150 ease-in-out data-[image='true']:scale-100"
        />
      </article>

      <div className="rounded bg-color-3/15">
        <header className="p-5">
          <h2 className="text-center text-2xl font-medium uppercase">
            {title}
          </h2>
        </header>

        <article className="grid grid-cols-1 gap-5 rounded lg:grid-cols-2 lg:px-5">
          <div className="overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              width={1280}
              height={720}
              onClick={() => openModal()}
              className="cursor-pointer duration-150 ease-in-out hover:scale-105"
            />
          </div>

          <div className="flex h-full flex-col justify-between space-y-5 px-5 lg:px-0">
            <article className="scroll space-y-2">
              <h3 className="flex items-center justify-center gap-1 text-center text-xl">
                <IoMdBook /> Descrição
              </h3>

              <div className="h-[7.5rem] overflow-y-scroll pr-2">
                <PortableText value={description} />
              </div>
            </article>

            <article className="space-y-2">
              <h3 className="flex items-center justify-center gap-1 text-center text-xl">
                <LuBrain /> Tecnologias
              </h3>

              <div className="flex gap-5">
                {technologies.front_end && (
                  <div className="space-y-2">
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
                  </div>
                )}

                {technologies.back_end && (
                  <div className="space-y-2">
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
                  </div>
                )}
              </div>
            </article>
          </div>
        </article>

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

          {links.visit.demo && (
            <Link
              title="Demo do projeto"
              href={links.visit.demo}
              target="_blank"
              className="flex items-center justify-center gap-1 hover:underline"
            >
              <FaEye /> Visitar Projeto
            </Link>
          )}

          {links.visit.documentation && (
            <Link
              title="Demo do projeto"
              href={links.visit.documentation}
              target="_blank"
              className="flex items-center justify-center gap-1 hover:underline"
            >
              <FaEye /> Visitar Projeto
            </Link>
          )}
        </footer>
      </div>
    </>
  );
}
