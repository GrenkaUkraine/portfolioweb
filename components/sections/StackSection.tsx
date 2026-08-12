import SectionContainer from "@/components/sections/SectionContainer";
import Text from "@/components/ui/Text";
import { STACK } from "@/config/constants";
import React from "react";
import SlashDivider from "@/components/stack/SlashDivider";

export default function StackSection() {
  return (
    <SectionContainer id="stack">
      <div className="flex flex-col gap-vh-lg w-full h-full max-h-full">
        {STACK.map((section) => (
          <div key={section.category}>
            <Text variant="tag" color="muted" className="mb-3">
              {section.category}
            </Text>
            <div className="flex gap-2 items-center flex-wrap w-full">
              {section.objects.map((item, index) => (
                <React.Fragment key={item}>
                  {index > 0 && <SlashDivider />}
                  <Text variant="h2" className="uppercase">
                    {item}
                  </Text>
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
