export const title = "Welcome to my page";
export const layout = "_includes/main.tsx";
import BodyText from "./_components/BodyText.tsx";
import Button from "./_components/Button.tsx"
import Hero from "./_components/Hero.tsx";


export default (data: Lume.Data, helpers: Lume.Helpers, ) => (
  <>

    <Hero
    image="/hero.jpg"
    heroText="Harold and Marzetta V. Jones Memorial Scholarship Charity"
    heroTextSecondary="Lives Truly Well Lived"
    links={[
      { text: "Learn More", href: "/about" },
    ]}
  />
    <BodyText>
  <h2 class="text-xl">Vision Statement</h2>
  <p class="mb-4">
    Harold and Marzetta V. Jones Memorial Scholarship Charity will award Detroit
    Public Schools Community District (DPSCD) Scholars a one-time scholarship to
    lessen the burden of student loan debt, embolden DPSCD scholars with the
    essential tools for personal and academic success, and impart wealth-building knowledge.
  </p>
  <h2 class="text-xl">Mission Statement</h2>
  <p class="mb-4">
    Harold and Marzetta V. Jones Memorial Scholarship Charity is recognized as a
    501(c)(3), and non-profit organization, whose mission is to inspire young
    people to continue their educational journey and increase the number of
    DPSCD scholars attending college, trade school, or university and
    experiential learning opportunities for students.
  </p>

  <h2 class="text-xl">Scholarship Eligibility</h2>
  <ul class="mb-4 list-disc  pl-5 space-y-2">
    <li>Detroit Public Schools Community District (DPSCD) Senior</li>
    <li>GPA: 3.0 or above</li>
    <li>Letter of Acceptance (from the post-secondary institution)</li>
  </ul>

  <h2 class="text-xl">Application Process</h2>
  <p class="mb-4">
    If you are interested in applying for a Harold and Marzetta V. Jones
    Memorial Scholarship, please contact your counselor or email: Charity
    Manager, Jacquelyn: jacquelynjones1960&#64;gmail.com
  </p>

  <p class="text-xl">Packet Must Contain</p>
  <ul class="mb-4 list-disc  pl-5 space-y-2">
    <li>One Scholarship Application</li>
    <li>High School Transcript (photocopies must include the year and date)</li>
    <li>
      Copy of Letter of Acceptance (from a trade school, college, or university)
    </li>
    <li>Media Release Form</li>
    <li>Scholarship Packets are due on April 24th</li>
  </ul>
  </BodyText>
  </>
);