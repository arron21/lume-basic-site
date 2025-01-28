// This file will not show live updates in the browser.
// Once you save the page the server will rebuild the site and the changes will be visible in a few minutes.

export const title = "Lume Starter";
export const layout = "_includes/main.tsx";
import BodyText from "./_components/BodyText.tsx";
import Button from "./_components/Button.tsx";
import Hero from "./_components/Hero.tsx";

export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <>
    <Hero
      image="/media/fountain.jpg"
      video="/media/4569076-hd_1920_1080_30fps.mp4"
      heroText="Lume CMS Starter"
      heroTextSecondary="Using Lume with Components, TypeScript, and Markdown, and Optional CMS"
      links={[
        { text: "Learn More", href: "/about" },
      ]}
    />
    <BodyText>
    
      <div class="container mx-auto px-4 py-8">
    <header class="mb-8">
      <h1 class="text-4xl font-bold text-blue-600 mb-2">Deno Lume Template Folder Structure</h1>
      <p class="text-lg text-gray-600">An organized and flexible setup for your Lume site.</p>
    </header>
    <section class="space-y-8">
      <!-- Posts Section -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-gray-700 mb-2">/posts</h2>
        <p class="text-gray-600">Designed for markdown blog posts or event entries. Files created here will be automatically listed on the <code>/posts</code> page of the site.</p>
        <p class="mt-2 text-gray-600">Use this for maintaining a blog, news articles, or event updates.</p>
      </div>

      <!-- Pages-md Section -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-gray-700 mb-2">/pages-md</h2>
        <p class="text-gray-600">Contains markdown files for pages that should not appear in the <code>/posts</code> list.</p>
        <p class="mt-2 text-gray-600">These files allow you to create standalone pages using markdown.</p>
        <a href="https://www.markdownguide.org" class="text-blue-500 hover:underline mt-2 inline-block">Learn more about Markdown</a>
      </div>

      <!-- Pages-tsx Section -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-gray-700 mb-2">/pages-tsx</h2>
        <p class="text-gray-600">For creating more complex pages that require TSX-based components (e.g., React or Preact).</p>
        <p class="mt-2 text-gray-600">Ideal for pages needing dynamic functionality or component-based layouts.</p>
      </div>

      <!-- _nav-links.ts Section -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-gray-700 mb-2">/_nav-links.ts</h2>
        <p class="text-gray-600">Defines the navigation links for the <code>NavBar.tsx</code> component.</p>
        <p class="mt-2 text-gray-600">When using the optional Lume CMS, these links can be edited in the <strong>Navigation Links</strong> document.</p>
      </div>

      <!-- Assets Section -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-gray-700 mb-2">/assets</h2>
        <p class="text-gray-600">Stores theme-specific assets like styles, scripts, or images used in the site design.</p>
      </div>

      <!-- Media Section -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-gray-700 mb-2">/media</h2>
        <p class="text-gray-600">Dedicated to assets uploaded via the CMS, such as images or other media files.</p>
      </div>

      <!-- Layouts Section -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-gray-700 mb-2">/_layouts</h2>
        <p class="text-gray-600">Contains the top-level layout files used to define the structure and design of the site's pages.</p>
        <p class="mt-2 text-gray-600">Modify these files to customize the overall appearance of the site.</p>
      </div>
    </section>
    <footer class="mt-12 text-center text-gray-600">
      <p>Happy building!</p>
    </footer>
  </div>
    </BodyText>
  </>
);












