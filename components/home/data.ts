export const stats = [
  { value: 180, suffix: "", label: "Day productivity plan" },
  { value: 1500, suffix: "+", label: "Tips & cards" },
  { value: 7, suffix: "", label: "Focus modules" },
  { value: 24, suffix: "/7", label: "Habit tools" },
] as const;

export const features = [
  {
    icon: "🗺️",
    title: "180 day productivity plan",
    description:
      "Seven guided modules with daily missions that unlock as you build focus, discipline, and better routines.",
    accent: "from-primary/25 to-orange-950/50",
  },
  {
    icon: "🔥",
    title: "Streak & consistency",
    description:
      "Watch your streak grow in real time. Track completed days, goals hit, and personal milestones.",
    accent: "from-orange-500/20 to-red-950/40",
  },
  {
    icon: "💡",
    title: "1,500+ tips & cards",
    description:
      "Practical productivity tips and motivational cards for focus, energy, and follow-through.",
    accent: "from-amber-500/20 to-orange-950/40",
  },
  {
    icon: "🧰",
    title: "Habit tools",
    description:
      "Breathing resets, focus sounds, and short games when you need to clear your head and get back on track.",
    accent: "from-emerald-500/15 to-emerald-950/40",
  },
  {
    icon: "🎯",
    title: "Goals & milestones",
    description:
      "Set lifestyle and productivity targets. Earn badges as you level up your daily routine.",
    accent: "from-violet-500/15 to-violet-950/40",
  },
  {
    icon: "📊",
    title: "Progress insights",
    description:
      "Charts and streak history that show how consistent you are, so you can improve your output over time.",
    accent: "from-sky-500/15 to-sky-950/40",
  },
  {
    icon: "👥",
    title: "Community",
    description:
      "Share wins, stay accountable, and connect with people building productive lifestyle habits.",
    accent: "from-pink-500/15 to-rose-950/40",
  },
  {
    icon: "💬",
    title: "Chat & calls",
    description:
      "Message friends and jump on voice or video when you want quick accountability or support.",
    accent: "from-indigo-500/15 to-indigo-950/40",
  },
] as const;

export const habitTools = [
  {
    emoji: "💡",
    title: "Productivity tips",
    description: "Quick advice to stay focused and keep moving.",
  },
  {
    emoji: "✨",
    title: "Motivation cards",
    description: "Swipe through boosts when energy dips.",
  },
  {
    emoji: "🎵",
    title: "Focus sounds",
    description: "Calm audio to reset and get back into flow.",
  },
  {
    emoji: "🎮",
    title: "Reset games",
    description: "A short break tool before you return to your plan.",
  },
] as const;

export const steps = [
  {
    step: "01",
    title: "Set your lifestyle goals",
    description: "Quick onboarding covers your routines, focus areas, and start date.",
  },
  {
    step: "02",
    title: "Get your productivity plan",
    description: "Quitify builds a personalized 180 day roadmap around your habits.",
  },
  {
    step: "03",
    title: "Show up every day",
    description: "Complete missions, use habit tools, and watch consistency compound.",
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
    alt: "Focus master badge",
    label: "Focus master",
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
