import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../constants";
import Section from "./ui/Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      index="05"
      watermark="Builds"
      eyebrow="ls ./projects"
      title="Things I've built."
      intro="A selection of shipped products and experiments — click any live card to open it in a new tab."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {PROJECTS.map((project, i) => {
          const isLive = Boolean(project.link);
          const Wrapper = isLive ? motion.a : motion.div;
          return (
            <Wrapper
              key={project.title}
              {...(isLive
                ? {
                    href: project.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {})}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.06 }}
              whileHover={{ y: -4 }}
              whileTap={isLive ? { y: 2 } : undefined}
              className={`panel group relative flex flex-col overflow-hidden rounded-2xl transition-shadow ${
                isLive
                  ? "cursor-pointer hover:shadow-glow-soft"
                  : "cursor-default"
              }`}
              aria-label={
                isLive ? `${project.title} — open live site` : project.title
              }
            >
              {/* Hover accent line */}
              <span className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-accent to-neon transition-transform duration-300 group-hover:scale-x-100" />

              {/* Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/20 to-transparent" />
                <span className="absolute left-3 top-3 cap-sm !bg-base/80 text-accent backdrop-blur">
                  {project.tag}
                </span>
                {isLive && (
                  <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-keysm border border-white/10 bg-base/70 text-ink-muted backdrop-blur transition-colors group-hover:text-accent">
                    <ArrowUpRight size={15} />
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  {isLive && (
                    <ExternalLink
                      size={15}
                      className="shrink-0 text-ink-faint transition-colors group-hover:text-accent"
                    />
                  )}
                </div>
                <p className="mt-2 line-clamp-4 flex-1 text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="cap-sm !px-2 !py-1 !text-[10px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </Section>
  );
}
