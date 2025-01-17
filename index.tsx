export const title = "Welcome to my page";
export const layout = "_includes/main.tsx";
import BodyText from "./_components/BodyText.tsx";
import Button from "./_components/Button.tsx";
import Hero from "./_components/Hero.tsx";

export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <>
    <Hero
      image="/assets/image/fountain.jpg"
      video="/assets/image/race.mp4"
      heroText="Lume CMS Starter"
      heroTextSecondary="Using Lume with Components, TypeScript, and Markdown"
      links={[
        { text: "Learn More", href: "/about" },
      ]}
    />
    <BodyText>
      <h2 class="text-xl">Lorem Ipsum</h2>
      <Button>Test</Button>
      <p class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h2 class="text-xl">Lorem Ipsum</h2>
      <p class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <h2 class="text-xl">Lorem Ipsum</h2>
      <ul class="mb-4 list-disc pl-5 space-y-2">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Sed do eiusmod tempor incididunt</li>
      </ul>

      <h2 class="text-xl">Lorem Ipsum</h2>
      <p class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <p class="text-xl">Lorem Ipsum</p>
      <ul class="mb-4 list-disc pl-5 space-y-2">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Sed do eiusmod tempor incididunt</li>
        <li>Ut labore et dolore magna aliqua</li>
        <li>Ut enim ad minim veniam</li>
      </ul>
    </BodyText>
  </>
);
