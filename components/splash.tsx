"use client"

import { motion, useReducedMotion } from "motion/react"
import type { Variants } from "motion/react"

import { SITE } from "@/lib/site"

/**
 * One system, five palettes. Every property sets the same four canon lines
 * in the same structure, sizes, and weights — identity at the top, tagline
 * commanding the center, plain sentence anchoring the bottom, filling the
 * viewport on every screen. Only the canon colors differ: zinc for three,
 * slate with violet-purple for Superachiever, stone with fuchsia-pink for
 * Superachievers.
 */

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Splash() {
  const reduced = useReducedMotion()

  return (
    <section className="relative flex w-full flex-1 flex-col overflow-hidden px-6 pt-[calc(env(safe-area-inset-top)+1.5rem)] pb-[calc(env(safe-area-inset-bottom)+2.25rem)] [@media(max-height:480px)]:pt-4 [@media(max-height:480px)]:pb-5 sm:px-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[34rem] w-[52rem] max-w-[170vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/[0.08] dark:bg-fuchsia-500/[0.16] blur-3xl"
      />
      <motion.div
        variants={group}
        initial={reduced ? false : "hidden"}
        animate="show"
        className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-between text-center"
      >
        <motion.div variants={item} className="flex flex-col items-center">
          <p className="text-base font-medium tracking-tight sm:text-lg">
            {SITE.name}
          </p>
          <p className="text-muted-foreground mt-2 font-mono text-xs tracking-[0.15em] uppercase">
            {SITE.descriptor}
          </p>
        </motion.div>

        <motion.h1
          variants={item}
          className="my-8 max-w-[18ch] [@media(max-height:480px)]:my-4 text-[clamp(2.25rem,min(9vw,14svh),5.75rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-balance"
        >
          {SITE.tagline.replace("Co-Create", "Co\u2011Create")}
        </motion.h1>

        <motion.p
          variants={item}
          className="text-muted-foreground max-w-[52ch] text-lg leading-relaxed text-pretty sm:text-xl md:text-2xl"
        >
          {SITE.plain}
        </motion.p>
      </motion.div>
    </section>
  )
}
