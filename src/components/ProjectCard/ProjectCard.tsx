"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Badge from "../Badge/Badge";

import { IoLogoGithub, IoMdBook } from "react-icons/io";
import { LuBrain, LuPaintbrush2 } from "react-icons/lu";
import { FaCode, FaEye } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";

import { ProjectCardProps } from "./ProjectCard.d";

export default function ProjectCard({
  title,
  image,
  description,
  technologies,
  source_code,
  project_link,
}: ProjectCardProps) {
  const [imageModal, setImageModal] = useState<string>("/grid-light.png");
  const [modal, setModal] = useState<boolean>(false);

  async function openModal(image: string) {
    setImageModal(image);
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
          src={imageModal}
          alt={title}
          width={1280}
          height={720}
          data-image={modal}
          className="scale-95 cursor-pointer rounded duration-150 ease-in-out data-[image='true']:scale-100"
        />
      </article>

      <article className="flex max-w-[27.3rem] flex-col rounded bg-color-3/15">
        <header>
          <h2 className="py-5 text-center text-2xl font-medium uppercase">
            {title}
          </h2>

          <div className="overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={1280}
              height={720}
              onClick={() => openModal(image)}
              className="cursor-pointer duration-150 ease-in-out hover:scale-105"
            />
          </div>
        </header>

        <div className="flex h-full flex-col justify-between space-y-5 p-5">
          <div>
            <article className="scroll space-y-2">
              <h3 className="flex items-center justify-center gap-1 text-center text-xl">
                <IoMdBook /> Descrição
              </h3>

              <p className="h-[7.5rem] overflow-y-scroll pr-2">{description}</p>
            </article>

            <article className="space-y-2">
              <h3 className="flex items-center justify-center gap-1 text-center text-xl">
                <LuBrain /> Tecnologias
              </h3>

              {technologies.front_end && (
                <div className="space-y-2">
                  <h4 className="text-lg">Front-End</h4>

                  <div className="flex flex-wrap gap-2">
                    {technologies.front_end.map((skill) => (
                      <Badge key={skill} title={skill} icon={skill} />
                    ))}
                  </div>
                </div>
              )}

              {technologies.back_end && (
                <div className="space-y-2">
                  <h4 className="text-lg">Back-End</h4>

                  <div className="flex flex-wrap gap-2">
                    {technologies.back_end?.map((skill) => (
                      <Badge key={skill} title={skill} icon={skill} />
                    ))}
                  </div>
                </div>
              )}
            </article>
          </div>

          <div className="space-y-5">
            <article className="space-y-2">
              <h3 className="flex items-center justify-center gap-1 text-center text-xl">
                <IoLogoGithub /> Código Fonte
              </h3>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {source_code?.front_end && (
                  <Link
                    href={source_code?.front_end}
                    target="_blank"
                    className="flex items-center justify-center gap-1 rounded bg-color-3 p-2 text-white duration-150 ease-in-out hover:bg-color-3/80"
                  >
                    <LuPaintbrush2 /> Front-End
                  </Link>
                )}

                {source_code?.back_end && (
                  <Link
                    href={source_code?.back_end}
                    target="_blank"
                    className="flex items-center justify-center gap-1 rounded bg-color-3 p-2 text-white duration-150 ease-in-out hover:bg-color-3/80"
                  >
                    <FaCode /> Back-End
                  </Link>
                )}
              </div>
            </article>

            <article className="space-y-2">
              <h3 className="flex items-center justify-center gap-1 text-center text-xl">
                <CiGlobe /> Acessos
              </h3>

              <div>
                <Link
                  href={project_link}
                  target="_blank"
                  className="flex items-center justify-center gap-1 rounded bg-color-3 p-2 text-white duration-150 ease-in-out hover:bg-color-3/80"
                >
                  <FaEye /> Visitar Projeto
                </Link>
              </div>
            </article>
          </div>
        </div>
      </article>
    </>
  );
}
