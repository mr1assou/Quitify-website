"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  AnimateOnScroll,
  StaggerChildren,
  staggerItem,
} from "@/components/AnimateOnScroll";
import { CountUp } from "@/components/CountUp";
import {
  badges,
  cravingTools,
  features,
  stats,
  steps,
} from "@/components/home/data";

export function HomeContent() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <CravingToolsSection />
      <HowItWorksSection />
      <BadgesSection />
      <CtaSection />
      <LegalSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/15 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl animate-pulse-glow animation-delay-2" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex rounded-full border border-primary/20 bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary"
          >
            Smoke-free starts here
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Quit smoking.{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              For real this time.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-lg text-lg leading-8 text-muted"
          >
            Quitify is your daily companion — a personalized plan, craving
            tools, progress tracking, and a community that has your back.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {["iOS & Android", "Free to start", "No judgment"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-border bg-section/80 px-4 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm transition-transform hover:scale-105"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/25 via-accent-soft to-transparent blur-2xl animate-pulse-glow" />
            <div className="animate-float relative overflow-hidden rounded-[2rem] border border-border bg-section p-6 shadow-xl shadow-primary/10">
              <Image
                src="/after_onboard.webp"
                alt="Quitify app illustration"
                width={480}
                height={480}
                className="mx-auto h-auto w-full max-w-sm object-contain"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="border-y border-border bg-section/60 backdrop-blur-sm">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-12 sm:grid-cols-4 sm:gap-8 sm:py-14">
        {stats.map((stat, i) => (
          <AnimateOnScroll key={stat.label} delay={i * 0.08} y={20}>
            <div className="text-center">
              <p className="text-3xl font-bold tabular-nums text-foreground sm:text-4xl">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <AnimateOnScroll>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Everything you need to quit
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted">
            From your first craving to your biggest milestone — Quitify is built
            for every step of the journey.
          </p>
        </AnimateOnScroll>

        <StaggerChildren className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-border bg-section p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-2xl transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

function CravingToolsSection() {
  return (
    <section className="border-y border-border bg-gradient-to-b from-accent-soft/50 to-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <AnimateOnScroll>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Craving support
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              When the urge hits, we&apos;re ready
            </h2>
            <p className="mt-4 text-lg text-muted">
              Cravings peak and pass. Quitify gives you the right tool in the
              moment — tips, motivation, calm sounds, or a quick game to ride it
              out.
            </p>
          </AnimateOnScroll>

          <StaggerChildren className="grid grid-cols-2 gap-4" stagger={0.12}>
            {cravingTools.map((tool) => (
              <motion.div
                key={tool.title}
                variants={staggerItem}
                className="rounded-2xl border border-border bg-section p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="text-3xl">{tool.emoji}</span>
                <h3 className="mt-3 font-semibold text-foreground">
                  {tool.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{tool.description}</p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Three steps to smoke-free
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Simple onboarding. A plan built for you. Daily wins that add up.
          </p>
        </AnimateOnScroll>

        <div className="relative mt-14">
          <div className="absolute left-[16.67%] right-[16.67%] top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />

          <StaggerChildren className="grid gap-8 lg:grid-cols-3" stagger={0.15}>
            {steps.map((item) => (
              <motion.div
                key={item.step}
                variants={staggerItem}
                className="relative text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-accent-soft text-xl font-bold text-primary shadow-sm">
                  {item.step}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}

function BadgesSection() {
  return (
    <section className="border-t border-border bg-section py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Achievements
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Celebrate every win
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Unlock badges as you hit milestones — from your first smoke-free day
            to six months and beyond.
          </p>
        </AnimateOnScroll>

        <StaggerChildren
          className="mt-12 flex flex-wrap items-end justify-center gap-8 sm:gap-12"
          stagger={0.1}
        >
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              variants={staggerItem}
              className="flex flex-col items-center"
              style={{ marginTop: i % 2 === 1 ? "1.5rem" : 0 }}
            >
              <div className="animate-float animation-delay-1 relative h-28 w-28 sm:h-32 sm:w-32">
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  fill
                  className="object-contain drop-shadow-lg"
                  sizes="128px"
                />
              </div>
              <p className="mt-3 text-sm font-medium text-muted">
                {badge.label}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <AnimateOnScroll y={40}>
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-primary/10 via-accent-soft to-section p-8 sm:p-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Ready when you are
              </h2>
              <p className="mt-4 max-w-xl text-lg text-muted">
                Thousands have taken the first step. Your smoke-free story starts
                with one decision — and Quitify walks with you every day after.
              </p>
              <p className="mt-6 text-sm font-semibold text-primary">
                Coming soon to iOS & Android
              </p>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/yes.webp"
                alt="Celebration illustration"
                width={240}
                height={240}
                className="mx-auto h-48 w-48 object-contain sm:h-56 sm:w-56 lg:mx-0"
              />
            </motion.div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}

function LegalSection() {
  return (
    <section className="border-t border-border bg-section">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <AnimateOnScroll y={20}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-foreground">Legal</p>
              <p className="mt-1 text-sm text-muted">
                Read how we handle your data and the rules for using Quitify.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/privacy"
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-primary-dark"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:scale-105 hover:bg-accent-soft"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
