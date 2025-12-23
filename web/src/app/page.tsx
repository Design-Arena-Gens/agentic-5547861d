"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMemo, useState } from "react";

const fragments = [
  {
    title: "La respiration du sol",
    text: "Chaque pas faisait vibrer la terre comme si les racines avaient avalé les secrets de la corruption pour les exhaler par vagues, à travers le vent froid des collines.",
  },
  {
    title: "Lueur parasite",
    text: "Une phosphorescence fuyante lacérait l’horizon. Ce n’était jamais plus qu’une ombre, pourtant elle brûlait l’œil avant même d’apparaître.",
  },
  {
    title: "Battements étrangers",
    text: "Dans sa poitrine résonnait une pulsation qui n’était pas la sienne, un tambour sombre remonté depuis des lieues, avertissement d’une présence tordue.",
  },
];

const senseMap = [
  {
    label: "Lointain",
    description:
      "Une impression diffuse, comme un parfum oublié. La corruption flotte, encore timide, au-delà des crêtes.",
  },
  {
    label: "Approche",
    description:
      "Les herbes se figent. Le ciel se contracte. La sensation devient une ligne que l’on devine sous la peau.",
  },
  {
    label: "Fracture",
    description:
      "Plus rien ne murmure : tout écoute. La corruption respire en cadence avec votre souffle et le déforme.",
  },
  {
    label: "Contact",
    description:
      "Le monde cède un instant. Une chaleur malsaine se love au creux de la main. Il n’y a plus de distance, seulement l’évidence.",
  },
];

export default function Home() {
  const [intensity, setIntensity] = useState(1.6);
  const distance = useMotionValue(intensity);
  const lovelySpring = useSpring(distance, { stiffness: 120, damping: 25 });
  const glowOpacity = useTransform(lovelySpring, [0, 3], [0.12, 0.85]);
  const glowScale = useTransform(lovelySpring, [0, 3], [1, 1.42]);

  const activeSense = useMemo(() => {
    const idx = Math.min(senseMap.length - 1, Math.floor(intensity));
    return senseMap[idx];
  }, [intensity]);

  return (
    <div className="relative min-h-screen overflow-hidden pb-24">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <motion.div
          style={{ opacity: glowOpacity, scale: glowScale }}
          className="absolute left-1/2 top-1/3 h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(193,83,255,0.35),_rgba(15,12,34,0))] blur-3xl"
          animate={{ rotate: [0, 12, -8, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute bottom-[-30%] left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(83,209,255,0.28),_rgba(5,5,10,0))] blur-[140px]"
          animate={{ rotate: [0, -10, 5, 0], scale: [1.1, 1.18, 1.05, 1.1] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pt-24 text-zinc-100 sm:px-10 lg:px-16">
        <section className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,_2fr)_minmax(0,_1fr)]">
          <div>
            <h1 className="text-balance text-4xl font-light tracking-tight text-white drop-shadow-[0_15px_45px_rgba(0,0,0,0.65)] sm:text-5xl lg:text-6xl">
              Encore à des lieues à travers les collines, pourtant il la sentait ; il sentait la corruption tordue.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
              Cette expérience interactive capture cette sensation impossible à nier : la présence menaçante qui voyage plus vite que le corps, les signes ténus qui recouvrent l’horizon, les ruissellements d’énergie qui serrent la gorge avant même que l’on arrive.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur">
            <h2 className="text-sm uppercase tracking-[0.4em] text-fuchsia-200">Cartographie sensorielle</h2>
            <p className="mt-4 text-sm text-zinc-300">
              Faites glisser pour sentir comment la corruption traverse l’espace et s’accroche aux collines.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <input
                type="range"
                min={0}
                max={3}
                step={0.01}
                value={intensity}
                onChange={(event) => {
                  const nextValue = Number(event.target.value);
                  setIntensity(nextValue);
                  distance.set(nextValue);
                }}
                className="h-1 flex-1 appearance-none rounded-full bg-white/20 accent-fuchsia-400 [--track-color:rgba(255,255,255,0.15)] [--thumb-size:0.95rem]"
              />
              <motion.span
                className="text-2xl font-semibold text-fuchsia-200"
                animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {(intensity * 12 + 3).toFixed(0)} km
              </motion.span>
            </div>
            <div className="mt-6 rounded-2xl bg-black/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-300/80">
                {activeSense.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-200">
                {activeSense.description}
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          {fragments.map((fragment) => (
            <motion.article
              key={fragment.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-fuchsia-300/40 hover:bg-white/[0.08]"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fuchsia-400/0 via-fuchsia-300/10 to-cyan-200/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <h3 className="relative text-lg font-semibold text-white">
                {fragment.title}
              </h3>
              <p className="relative mt-4 text-sm leading-relaxed text-zinc-200">
                {fragment.text}
              </p>
            </motion.article>
          ))}
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
          <motion.div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(245,215,255,0.14),_rgba(5,5,16,0)_68%)]"
            animate={{
              opacity: [0.5, 0.9, 0.5],
              rotate: [0, 6, -6, 0],
            }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative grid gap-12 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.2fr)]">
            <div>
              <h2 className="text-3xl font-semibold text-white">Journal de terrain</h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-200">
                Il notait chaque vibration, chaque infime déviation de la lumière. Les collines semblaient respirer par à-coups, comme si la corruption cherchait un nouveau corps à habiter.
              </p>
              <p className="mt-6 text-sm text-zinc-300">
                « Je suis encore à des lieues, et pourtant l’odeur de fer et de cendre s’impose. La corruption ne voyage pas : elle appelle. »
              </p>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <motion.div
                className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6"
                initial={false}
                animate={{ boxShadow: [
                  "0 0 0 rgba(193, 83, 255, 0.0)",
                  "0 25px 60px rgba(193, 83, 255, 0.18)",
                  "0 0 0 rgba(193, 83, 255, 0.0)",
                ] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-fuchsia-200">
                  Relevés atmosphériques
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-zinc-200">
                  <li>• Ionisation de l’air en hausse de 27 %</li>
                  <li>• Pulsation magnétique toutes les 42 secondes</li>
                  <li>• Flora locale en dormance prématurée</li>
                </ul>
              </motion.div>
              <motion.div
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-transparent to-cyan-400/20 p-[1px]"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              >
                <div className="rounded-[calc(1.5rem-1px)] bg-black/70 p-6">
                  <p className="text-sm text-zinc-200">
                    Respirez lentement et laissez la sensation vous gagner. Fermez les yeux. Lorsque vous les rouvrirez, la frontière entre la colline et la corruption se sera déplacée.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
