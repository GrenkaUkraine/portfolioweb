import Text from "@/components/ui/Text";
import { NAV_LINKS, SOCIAL_LINKS } from "@/config/constants";
import Button from "@/components/ui/Button";
import SectionContainer from "@/components/sections/SectionContainer";
import NavLink from "../hero/NavLink";

export default function HeroSection() {
  return (
    <SectionContainer id="hero">
      <div className="flex flex-col justify-between items-center h-full w-full pt-20 md:pt-0">
        <div className="grid w-full grid-cols-1 md:grid-cols-12 layout-gap">
          <div className="md:col-span-8 flex flex-col gap-vh-sm">
            <div>
              <Text variant="h1">Creative</Text>
              <Text variant="h1">Developer</Text>
            </div>
            <Text variant="system" color="muted">
              grenkaukraine.com
            </Text>
          </div>
          <div className="col-span-1 md:col-span-4 flex flex-col gap-3">
            {SOCIAL_LINKS.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                title={link.title}
                rightSlot={link.rightSlot}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
                hoverTitle="Open ↗"
              />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-vh-md">
          <Text variant="h4" as="h2" color="muted">
            goto:
          </Text>
          <nav className="w-full flex flex-col gap-vh-sm">
            {NAV_LINKS.map((item) => (
              <NavLink key={item.id} {...item} />
            ))}
          </nav>
        </div>

        <a href="#work" className="group cursor-pointer">
          <Text
            variant="tag"
            color="muted"
            className="group-hover:text-fg group-hover:underline underline-offset-4 transition-colors"
          >
            Or scroll down
          </Text>
        </a>
      </div>
    </SectionContainer>
  );
}
