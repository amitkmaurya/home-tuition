import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  CirclePlay,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";
import {
  CTA,
  RatingBadge,
  SectionHeading,
  ServiceCard,
  Stats,
  TestimonialCard,
} from "@/components/sections";
import { services, subjectGroups, testimonials, whatsappLink } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="mesh grid-lines overflow-hidden">
        <div className="container grid min-h-[650px] items-center gap-14 py-16 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
          <div className="animate-rise">
            <div className="mb-6 flex items-center gap-2 text-sm font-bold text-blue-700">
              <span className="grid size-7 place-items-center rounded-full bg-blue-600 text-white">
                <Sparkles size={14} />
              </span>{" "}
              Learning that moves with your child
            </div>
            <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.02] tracking-[-.06em] text-[#101b36] md:text-7xl">
              Expert home tuition for{" "}
              <span className="gradient-text">better learning</span> & better
              results.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Professional tutors, personalized attention, and a clearer path
              forward for every learner.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                 href={whatsappLink("Hello! I'd like to book a free demo class.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#101b36] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-[#101b36]/15 transition hover:bg-blue-600"
              >
                Book a Free Demo Class{" "}
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/60 px-6 py-4 text-sm font-bold text-[#101b36] transition hover:border-blue-300 hover:bg-white"
              >
                Explore Our Services <ChevronRight size={17} />
              </Link>
            </div>
            <div className="mt-9">
              <RatingBadge />
            </div>
          </div>
          <div className="relative animate-rise animate-delay-1">
            <div className="absolute -right-20 -top-16 size-64 rounded-full bg-cyan-300/25 blur-3xl" />
            <div className="relative mx-auto max-w-[510px] rounded-[2.4rem] bg-gradient-to-br from-[#273fbd] via-[#5750d7] to-[#38c9c3] p-3 shadow-2xl shadow-indigo-900/20">
              <div className="relative min-h-[410px] overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 text-white backdrop-blur-sm">
                <img
                  src="/hero.jpeg"
                  alt="Ananya Arun Tuition"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between rounded-2xl border border-white/20 bg-black/40 backdrop-blur px-4 py-3">
                  <span className="text-xs font-semibold">
                    Personalized support
                  </span>
                  <Check size={18} className="text-cyan-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container -mt-8 relative z-10">
        <Stats />
      </section>
      <section className="container py-24">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <SectionHeading
            eyebrow="Why Ananya Arun Tuition"
            title="A more thoughtful way to learn."
            text="Good tuition is more than extra hours. It is the right explanation, the right pace, and the confidence to keep going."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-[#101b36] p-6 text-white">
              <span className="mb-12 block text-4xl font-extrabold text-cyan-300">
                01
              </span>
              <h3 className="text-lg font-bold">Understand, don’t memorize.</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Concept-led teaching helps students build knowledge they can
                use.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <span className="mb-12 block text-4xl font-extrabold text-blue-600">
                02
              </span>
              <h3 className="text-lg font-bold">
                Support that feels personal.
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                A calm space to ask questions, practice, and find momentum.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="container">
          <SectionHeading
            eyebrow="What we offer"
            title="Support for every stage of the school journey."
            text="Choose focused help for one subject or a broader learning plan that grows with your child."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
          <Link
            href="/services"
            className="mx-auto mt-10 flex w-fit items-center gap-2 text-sm font-extrabold text-blue-600"
          >
            View all learning services <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <section className="mesh py-24">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Classes & subjects"
              title="The right focus for right now."
              text="From primary foundations to senior secondary preparation, find structured help across core subjects."
            />
            <Link
              href="/classes"
              className="flex items-center gap-2 text-sm font-bold text-blue-600"
            >
              Browse subjects <ArrowRight size={17} />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {subjectGroups.map((group, index) => (
              <Link
                href="/classes"
                key={group.level}
                className="group rounded-3xl border border-white/80 bg-white/75 p-6 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-xs font-extrabold text-blue-600">
                  0{index + 1}
                </span>
                <h3 className="mt-10 text-xl font-bold">{group.level}</h3>
                <p className="mt-1 text-xs font-semibold text-slate-400">
                  {group.years}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.subjects.slice(0, 4).map((subject) => (
                    <span
                      key={subject}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
                <ChevronRight
                  className="mt-7 text-blue-600 transition group-hover:translate-x-1"
                  size={18}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="container py-24">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="How it works"
              title="Clear next steps from the very first conversation."
              text="We keep getting started simple, transparent, and centered on what your child needs."
            />
            <div className="mt-9 grid gap-5">
              {[
                "Share your goals and requirements",
                "Find a tutor fit for your child",
                "Begin with a free demo class",
              ].map((step, index) => (
                <div className="flex items-center gap-4" key={step}>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-blue-600 text-sm font-extrabold text-white">
                    0{index + 1}
                  </span>
                  <span className="text-sm font-bold">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-gradient-to-br from-[#e7ecff] to-[#dcfaf5] p-3">
            <div className="rounded-[1.7rem] border border-white bg-white/70 p-8">
              <CirclePlay className="text-blue-600" size={35} />
              <h3 className="mt-12 max-w-sm text-3xl font-extrabold leading-tight tracking-[-.04em]">
                Every good lesson begins with being heard.
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
                Start with a conversation about the learner, not just the
                timetable.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f0f4ff] py-24">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Parent & student voices"
              title="Progress you can feel."
              text="These are sample testimonial presentations. Replace them with approved client feedback before launch."
            />
            <Link
              href="/testimonials"
              className="flex items-center gap-2 text-sm font-bold text-blue-600"
            >
              See testimonials <ArrowRight size={17} />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.quote} item={item} />
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
