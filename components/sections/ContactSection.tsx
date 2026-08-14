import SectionContainer from "@/components/sections/SectionContainer";
import { SOCIAL_LINKS } from "@/config/constants";
import Text from "@/components/ui/Text";
import Link from "next/link";
import Button from "@/components/ui/Button";
import UkraineTime from "@/components/contact/UkraineTime";

export default function ContactSection() {
  return (
    <SectionContainer id="contact">
      <div className="grid w-full h-full max-h-full grid-cols-1 md:grid-cols-12 layout-gap pb-10 mb:pb-0">
        <div className="col-span-1 md:col-span-8 flex flex-col gap-vh-lg">
          <div>
            <Text variant="h1" className="mb-3">
              Let&#39;s talk.
            </Text>
            <Text variant="system" color="muted" className="w-full">
              Get straight to the point:{" "}
              <b className="text-fg">
                “Hi, I need a mod / website / 3D render...”
              </b>{" "}
              — saves us both time.
            </Text>
          </div>
          <div className="flex flex-col md:flex-row md:gap-3">
            <Button
              variant="primary"
              rightSlot="→"
              className="w-full md:w-auto gap-7"
            >
              Telegram [@grenkaukraine]
            </Button>
            <Button rightSlot="→" className="w-full md:w-auto md:gap-7">
              Discord
            </Button>
          </div>
          <div className="flex gap-3">
            <Text variant="tag" color="muted">
              Prefer email?
            </Text>
            <Link href="mailto:contact@grenkaukraine.com">
              <Text variant="system" className="hover:underline">
                <b>contact@grenkaukraine.com</b>
              </Text>
            </Link>
          </div>
        </div>

        <div className="col-span-1 md:col-span-4 flex flex-col justify-between md:items-end h-full">
          <UkraineTime />
          <div className="flex flex-col gap-3 w-full justify-end">
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
      </div>
    </SectionContainer>
  );
}
