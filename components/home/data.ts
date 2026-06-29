export const stats = [
  { value: 180, suffix: "", label: "Day quit plan" },
  { value: 1500, suffix: "+", label: "Tips & cards" },
  { value: 7, suffix: "", label: "Plan modules" },
  { value: 24, suffix: "/7", label: "Craving support" },
] as const;

export const features = [
  {
    icon: "🗺️",
    title: "180 day quit plan",
    description:
      "Seven guided modules with daily missions that unlock as you progress, one day at a time.",
    accent: "from-orange-400/20 to-amber-100/40",
  },
  {
    icon: "🔥",
    title: "Smoke-free streak",
    description:
      "Watch your streak grow in real time. Track money saved, cigarettes avoided, and life gained.",
    accent: "from-rose-400/15 to-orange-100/40",
  },
  {
    icon: "💡",
    title: "1,500+ tips & cards",
    description:
      "Practical tips and motivational cards for every mood, from cravings to big wins.",
    accent: "from-amber-400/20 to-yellow-100/30",
  },
  {
    icon: "🧘",
    title: "Craving tools",
    description:
      "Breathing exercises, relax sounds, and distraction games when the urge hits hardest.",
    accent: "from-emerald-400/15 to-teal-100/30",
  },
  {
    icon: "🎯",
    title: "Personal goals",
    description:
      "Set targets for savings, smoke free days, and milestones. Earn badges as you level up.",
    accent: "from-violet-400/15 to-purple-100/30",
  },
  {
    icon: "📊",
    title: "Stats & recovery",
    description:
      "See your health recovery rings, progress charts, and insights that keep you motivated.",
    accent: "from-sky-400/15 to-blue-100/30",
  },
  {
    icon: "👥",
    title: "Community",
    description:
      "Share your journey, celebrate wins, and connect with people who understand the struggle.",
    accent: "from-pink-400/15 to-rose-100/30",
  },
  {
    icon: "💬",
    title: "Chat & calls",
    description:
      "Message friends and get support through voice and video when you need someone to talk to.",
    accent: "from-indigo-400/15 to-slate-100/30",
  },
] as const;

export const cravingTools = [
  {
    emoji: "💡",
    title: "Tips",
    description: "Quick, practical advice for tough moments.",
  },
  {
    emoji: "✨",
    title: "Motivation cards",
    description: "Swipe through boosts when you need a push.",
  },
  {
    emoji: "🎵",
    title: "Relax sounds",
    description: "Calm ambient audio to ride out cravings.",
  },
  {
    emoji: "🎮",
    title: "Games",
    description: "Distract your mind until the urge passes.",
  },
] as const;

export const steps = [
  {
    step: "01",
    title: "Tell us your story",
    description: "Quick onboarding covers your reasons, habits, and quit date.",
  },
  {
    step: "02",
    title: "Get your plan",
    description: "Quitify builds a personalized 180 day roadmap around you.",
  },
  {
    step: "03",
    title: "Take it day by day",
    description: "Complete missions, beat cravings, and watch your progress grow.",
  },
] as const;

export const badges = [
  {
    src: "/badges/first_step.webp",
    alt: "First step badge",
    label: "First step",
  },
  {
    src: "/badges/craving_crusher.webp",
    alt: "Craving crusher badge",
    label: "Craving crusher",
  },
  {
    src: "/badges/champion.webp",
    alt: "Champion badge",
    label: "Champion",
  },
  {
    src: "/badges/half_year.webp",
    alt: "Half year badge",
    label: "Half year hero",
  },
] as const;
