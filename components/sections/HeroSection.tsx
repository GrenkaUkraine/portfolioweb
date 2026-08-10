import Text from "@/components/ui/Text";
import { NAV_LINKS, SOCIAL_LINKS } from "@/config/links";
import Button from "@/components/ui/Button";
import Link from "next/link";
import SectionContainer from "@/components/sections/SectionContainer";

export default function HeroSection() {
  return (
    <SectionContainer>
      <div className="grid w-full grid-cols-12 layout-gap">
        <div className="col-span-8 flex flex-col gap-vh-sm">
          <div>
            <Text variant="h1">Creative</Text>
            <Text variant="h1">Developer</Text>
          </div>
          <Text variant="system" color="muted">
            grenkaukraine.com
          </Text>
        </div>
        <div className="col-span-4 flex flex-col gap-3">
          {SOCIAL_LINKS.map((link) => (
            <Button
              key={link.href}
              as={Link}
              href={link.href}
              title={link.title}
              rightSlot={link.rightSlot}
              target="_blank"
              rel="noopener noreferrer"
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
            <a
              key={item.id}
              href={item.href}
              className="w-full inline-flex gap-3 items-center group"
            >
              <Text variant="list-nums" color="subtle">
                {item.id} &gt;
              </Text>
              <Text
                variant="list-link"
                className="group-hover:translate-x-1 transition-transform"
              >
                {item.label}
              </Text>
            </a>
          ))}
        </nav>
      </div>

      <a href="#work" className="group cursor-pointer py-4">
        <Text
          variant="tag"
          color="muted"
          className="group-hover:text-fg group-hover:underline underline-offset-4 transition-colors"
        >
          Or scroll down
        </Text>
      </a>
    </SectionContainer>
  );
}
