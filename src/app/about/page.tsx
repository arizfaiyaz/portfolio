import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <section className="py-16 md:py-24">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        ABOUT
      </p>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
          About Me
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          A longer story about how I got into Tech, my goals, and what I&apos;m currently learning.
        </p>
      </div>
      <Card className="mt-8 max-w-2xl p-5">
        <h4 className="text-2xl font-semibold tracking-normal text-foreground">
          How it started
        </h4>
        <br />
        <div className="space-y-5 text-sm leading-7 text-muted-foreground">
          <p>
            It started back in middle school. My elder brother had bought a Dell laptop
            and brought it home for a few days. That was the first time I really got to
            explore a computer beyond just looking at one. I started creating Word files,
            making PowerPoint presentations, and, most importantly, playing video games.
            I was fascinated by all of it. I kept wondering how these things were built
            and how a machine could respond to what I did.
          </p>
        
          <p>
            But something was still missing: the internet. During one summer vacation, I
            visited my brother and he had a BSNL broadband connection. That was when I
            first came across Facebook, Gmail, and websites in a real way. Again, the
            same curiosity came back. How are these websites built? How do they work?
            What happens when I click a button or send a message?
          </p>
        
          <p>
            I could not explore those questions properly until I completed my 12th
            standard and took admission into Computer Science Engineering. Once I started
            writing code, I loved the feeling of changing a few lines and instantly
            seeing the result on screen. But over time, it stopped being only about how
            things looked. I started caring more about what was happening behind the
            scenes: how data moves, how APIs are structured, why something becomes slow,
            and how systems can be made faster, cleaner, and more reliable.
          </p>
        
          <p>
            During this phase, I built dozens of projects. Most of them broke. A few
            actually worked. But every single one taught me something. Each bug, failed
            build, confusing error, and late-night debugging session helped me understand
            software a little better.
          </p>
        
          <p>
            Along the way, I also learned that writing code is only one part of the job.
            Communicating clearly, asking the right questions, understanding vague ideas,
            turning them into concrete solutions, and staying calm when things break are
            just as important. These skills were not obvious to me in the beginning, but
            they have now become a core part of how I work.
          </p>
        
          <p>
            That curiosity from middle school never really went away. I still find
            myself experimenting late at night, reading about new technologies, breaking
            things to understand them better, and thinking about what to build next.
            There is always something new to learn, something better to create, and
            something I do not fully understand yet. That is what keeps me going.
          </p>
        </div>
      </Card>
      <br />
      <Card className="mt-8 max-w-2xl p-5">
        <h4 className="text-2xl font-semibold tracking-normal text-foreground">
          Currently learning
        </h4>
        <br />
        <div className="mt-4 space-y-5 text-sm leading-7 text-muted-foreground">
            <p>
              Right now, I’m focusing on becoming stronger at DevOps and backend
              infrastructure. I want to understand not just how to build applications,
              but also how to deploy them, monitor them, scale them, and keep them
              reliable in production.
            </p>
        
            <p>
              My current learning path includes Linux, Docker, CI/CD pipelines, Nginx,
              cloud deployments, environment management, logging, monitoring, basic
              security practices, and how real applications are shipped and maintained
              after development.
            </p>
        
            <p>
              I’m also learning Redis and where it fits inside backend systems. I want
              to use it for caching, sessions, rate limiting, queues, background jobs,
              and improving API performance where a normal database query would be too
              slow or unnecessary.
            </p>
        
            <p>
              The goal is simple: become the kind of developer who can build the product,
              understand the system behind it, deploy it properly, debug it when it
              breaks, and keep improving it over time.
            </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {[
            "Linux",
            "Docker",
            "CI/CD",
            "Nginx",
            "Cloud Deployment",
            "Monitoring",
            "Logging",
            "Security Basics",
            "Redis",
            "Caching",
            "Rate Limiting",
            "Queues",
            "Background Jobs",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </Card>
    </section>
  );
}
