"use client";

import { motion, MotionProps } from "framer-motion";
import { JSX } from "react";

type RevealProps<T extends keyof JSX.IntrinsicElements> = MotionProps &
  JSX.IntrinsicElements[T] & {
    as: T;
    children: React.ReactNode;
  };

const globals = {
  duration: 0.4,
  once: true,
  amount: 0.2,
};

export function RevealUp<T extends keyof JSX.IntrinsicElements>({
  as,
  children,
  ...rest
}: RevealProps<T>) {
  const Tag = as;
  const MotionTag = motion(Tag) as React.ElementType;

  return (
    <MotionTag
      initial={{ opacity: 0, y: -12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: globals.duration }}
      viewport={{ once: globals.once, amount: globals.amount }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function RevealDown<T extends keyof JSX.IntrinsicElements>({
  as,
  children,
  ...rest
}: RevealProps<T>) {
  const Tag = as || "div";
  const MotionTag = motion(Tag) as React.ElementType;

  return (
    <MotionTag
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: globals.duration }}
      viewport={{ once: globals.once, amount: globals.amount }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function RevealLeft<T extends keyof JSX.IntrinsicElements>({
  as,
  children,
  ...rest
}: RevealProps<T>) {
  const Tag = as || "div";
  const MotionTag = motion(Tag) as React.ElementType;

  return (
    <MotionTag
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: globals.duration }}
      viewport={{ once: globals.once, amount: globals.amount }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function RevealRight<T extends keyof JSX.IntrinsicElements>({
  as,
  children,
  ...rest
}: RevealProps<T>) {
  const Tag = as || "div";
  const MotionTag = motion(Tag) as React.ElementType;

  return (
    <MotionTag
      initial={{ opacity: 0, x: 12 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: globals.duration }}
      viewport={{ once: globals.once, amount: globals.amount }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
