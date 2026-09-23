"use client"

import { motion, useReducedMotion } from "motion/react"
import type { Variants } from "motion/react"

import { SITE } from "@/lib/site"

/**
 * Same four-line splash as the live shell: name and role at the top, the
 * tagline commanding the center, the plain sentence anchoring the bottom.
 * No glow, no waitlist, no button.
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
