import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiFastify,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiAmazondynamodb,
  SiRedis,
  SiAmazonwebservices,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiOpensearch,
  SiGithubactions,
} from "react-icons/si";
import type { IconType } from "react-icons";

const techs: { name: string; icon: IconType }[] = [
  { name: "Python", icon: SiPython },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "Fastify", icon: SiFastify },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "DynamoDB", icon: SiAmazondynamodb },
  { name: "Redis", icon: SiRedis },
  { name: "AWS", icon: SiAmazonwebservices },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Terraform", icon: SiTerraform },
  { name: "OpenSearch", icon: SiOpensearch },
  { name: "CI/CD", icon: SiGithubactions },
];

function Logos() {
  return (
    <>
      {techs.map((tech) => {
        const Icon = tech.icon;
        return (
          <div
            key={tech.name}
            className="flex flex-shrink-0 items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm font-medium text-[#1B1B1B] shadow-sm"
          >
            <Icon size={18} className="text-copper" />
            {tech.name}
          </div>
        );
      })}
    </>
  );
}

export function TechLogoMarquee() {
  return (
    <div className="overflow-hidden">
      <div className="flex w-max items-center gap-3 motion-safe:animate-marquee hover:[animation-play-state:paused] motion-reduce:flex-wrap motion-reduce:w-full">
        <div className="flex flex-shrink-0 items-center gap-3">
          <Logos />
        </div>
        <div className="flex flex-shrink-0 items-center gap-3 motion-reduce:hidden" aria-hidden="true">
          <Logos />
        </div>
      </div>
    </div>
  );
}
