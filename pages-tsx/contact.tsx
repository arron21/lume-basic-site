import BodyText from "../_components/BodyText.tsx";

export const title = "Welcome to my page";
export const layout = "_includes/main.tsx";
// export const url = "../contact.html";

export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <>
    <BodyText>
      <h2 class="text-xl">Contact</h2>
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
    </BodyText>
  </>
);
