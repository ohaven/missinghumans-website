import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";

export const metadata = { title: "Making an Effective Missing Person Flyer" };

export default function Page() {
  return (
    <GuideLayout
      title="Making an Effective Flyer"
      intro="A flyer has about two seconds to work. Here is what makes those seconds count."
      next={["/resources/helping-a-search", "Helping Someone Else's Search — sharing responsibly."]}
    >
      <h2>What belongs on it</h2>
      <ul>
        <li><strong>MISSING</strong> in huge letters at the top. Red or black. Nothing clever.</li>
        <li><strong>One clear face photo</strong>, recent, looking at the camera, no sunglasses or hat, no group shots, no filters. The biggest thing on the page after the headline.</li>
        <li><strong>Name, age, height, weight, hair, eyes.</strong> Then anything a stranger could actually notice: glasses, tattoos, a limp, a distinctive jacket.</li>
        <li><strong>Last seen: date, time, place</strong>, and what they were wearing.</li>
        <li><strong>Vehicle</strong> make, color, and plate if there is one — plates get found.</li>
        <li><strong>Who to call</strong>, large, at the bottom: the police department and case number, &quot;or 911.&quot;</li>
      </ul>

      <h2>What to leave off</h2>
      <ul>
        <li><strong>Your home address.</strong> Never.</li>
        <li><strong>Your personal cell</strong>, if you can avoid it. Flyers get scanned, posted, and resurface years later. Use the police number; if you want a family line, use a cheap second number or a Google Voice number you can turn off.</li>
        <li><strong>Private medical or mental-health details</strong> unless they directly help a stranger recognize or help them (&quot;has dementia and may be confused&quot; helps; a diagnosis list does not).</li>
        <li><strong>Theories, accusations, or names of people you suspect.</strong> It can hurt the case and expose you legally.</li>
        <li><strong>A reward amount you can&apos;t pay.</strong> If you offer one, say how it is claimed (through police) so you aren&apos;t flooded.</li>
      </ul>

      <h2>Where to post it</h2>
      <ul>
        <li>Where they were last seen and along every route out — gas stations, convenience stores, laundromats, bus and train stops, truck stops.</li>
        <li>Places people wait: pharmacies, grocery stores, post offices, libraries, community centers, churches, clinics, shelters.</li>
        <li>Places people look at walls: coffee shops, barbershops, gyms, bars, restaurants with a bulletin board.</li>
        <li>Ask to tape it <strong>inside the glass</strong> at eye level. It lasts longer and can&apos;t be torn down.</li>
        <li>Ask employees to put one by the register and in the break room — staff see hundreds of faces a day.</li>
      </ul>

      <h2>Online</h2>
      <ul>
        <li>Use the <strong>square image</strong> from the <Link href="/flyer">Flyer Builder</Link> for social feeds — the letter-size flyer gets cropped.</li>
        <li>Post to the largest local groups: &quot;[City] community,&quot; neighborhood pages, buy/sell groups (they have huge reach), Nextdoor, and your city&apos;s subreddit. Ask admins to pin it.</li>
        <li>Ask people to <strong>share</strong>, not just react. Turn on comments; tips often come as comments.</li>
        <li>Update the post when there is news, and <strong>take it down or mark it FOUND</strong> when it&apos;s over. Old flyers that keep circulating waste the next family&apos;s attention.</li>
        <li>Send the flyer to local TV and radio newsrooms and to the police department&apos;s social media team — many will share it.</li>
      </ul>

      <h2>Printing</h2>
      <ul>
        <li>Letter size (8.5 × 11) is enough. Color if you can afford it; a black-and-white version with a high-contrast photo still works.</li>
        <li>Libraries, FedEx Office, Staples, UPS Store, and many churches will print. Ask — people want to help, and some will print for free when they see what it is.</li>
        <li>Carry a stack in your car with tape. Give small stacks to friends with their own routes.</li>
      </ul>

      <div className="notice">
        <p>Our <Link href="/flyer">free Flyer Builder</Link> follows all of this: big headline, big photo, the facts that matter, the police number at the bottom, PDF plus a social-media square. Nothing you enter is uploaded.</p>
      </div>
    </GuideLayout>
  );
}
