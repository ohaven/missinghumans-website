import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";

export const metadata = { title: "The First Hours — What To Do When Someone Goes Missing" };

export default function Page() {
  return (
    <GuideLayout
      title="The First Hours"
      intro="You do not need to be certain something is wrong. If it feels wrong, act. Here is the order that works."
      next={["/resources/adult-child-elder", "Adult vs. Child vs. Elder — how the response changes."]}
    >
      <div className="notice notice-urgent">
        <h3>Myth: &quot;You have to wait 24 hours.&quot;</h3>
        <p>
          False, everywhere in the United States. No police department can require you to wait before taking a missing person
          report. For anyone under 21, federal law requires police to enter the report into the national NCIC database within two hours.
          If someone tells you to wait, say: <em>&quot;I understand there is no waiting period. I want to file a report now.&quot;</em>
        </p>
      </div>

      <h2>Step 1 — Call the police (first 15 minutes)</h2>
      <ul>
        <li>Call <strong>911</strong> if there is any sign of danger, if the person is a child, is elderly, has a medical condition, or is out of character. Otherwise call the non-emergency line of the department where the person <strong>lives</strong> or was <strong>last seen</strong>.</li>
        <li>Say the words <strong>&quot;I need to report a missing person.&quot;</strong> Then say anything that makes them vulnerable: age, dementia, medication, mental-health crisis, disability, no phone, no money, bad weather.</li>
        <li>Ask for an officer to come to you, or ask where to go. Do not let the call end without a plan.</li>
      </ul>

      <h2>Step 2 — Have this ready for the officer</h2>
      <ul>
        <li>Full legal name, nicknames, date of birth, height, weight, hair, eyes, glasses, tattoos, scars.</li>
        <li>A clear, recent <strong>face photo</strong>. Text it to the officer if they allow it.</li>
        <li>Clothing last seen in; vehicle make, model, color, plate; phone number and carrier; bank and cards they carry.</li>
        <li>Last confirmed contact: when, where, who. Last known location. Where they might go. Who they might be with.</li>
        <li>Medical conditions and medications, and how long they can safely go without them.</li>
        <li>Anything out of the ordinary lately — conflicts, new people, money trouble, messages that didn&apos;t sound like them.</li>
      </ul>

      <h2>Step 3 — Before the officer leaves, get</h2>
      <ol>
        <li>The <strong>report / case number</strong>.</li>
        <li>The <strong>officer&apos;s name and badge number</strong>, and the detective or unit that will have the case tomorrow.</li>
        <li>A direct <strong>phone number</strong> to call with updates and tips.</li>
        <li>Confirmation the person has been (or will be) <strong>entered into NCIC</strong> — the national database every agency in the country can see. Ask: <em>&quot;Will they be entered into NCIC tonight?&quot;</em></li>
        <li>Whether an alert applies: <strong>AMBER</strong> (abducted child), <strong>Silver</strong> (senior / cognitive impairment, in most states), <strong>Endangered Missing Advisory</strong>, or a <strong>Be On the Lookout (BOLO)</strong> for the vehicle.</li>
      </ol>

      <h2>Step 4 — Start the paper trail (first few hours)</h2>
      <ul>
        <li>Open a note on your phone. Log every call, name, time, and what was said. You will not remember otherwise.</li>
        <li>Screenshot their last texts, posts, and &quot;last active&quot; times. Don&apos;t log into their accounts without telling police — it can overwrite the data investigators need.</li>
        <li>Call the people who saw or heard from them last. Write down exact times.</li>
        <li>If they have a phone, ask police about a <strong>ping / exigent-circumstances request</strong> to the carrier. Only police can make it; you can ask them to.</li>
        <li>If they&apos;re on your phone plan or share your location, check it now and screenshot it.</li>
      </ul>

      <h2>Step 5 — Spread the word (same day)</h2>
      <ul>
        <li><Link href="/flyer">Build a flyer</Link>. Put the <strong>police number and case number</strong> on it, not your personal cell if you can help it.</li>
        <li>Post it to your own accounts and the biggest local Facebook groups, Nextdoor, and community pages. Ask people to share, not just like.</li>
        <li>Post it physically where they were last seen and along routes they&apos;d take: gas stations, bus stops, convenience stores, shelters.</li>
        <li>Children: call <strong>NCMEC at 1-800-THE-LOST</strong> after you&apos;ve filed with police. Adults: register the case on <a href="https://namus.nij.ojp.gov" target="_blank" rel="noopener noreferrer">NamUs</a>.</li>
      </ul>

      <h2>Step 6 — Check the places people forget</h2>
      <ul>
        <li>Hospitals (ask for &quot;unidentified patients&quot; too), urgent cares, the county jail booking line, the medical examiner.</li>
        <li>Shelters, detox centers, and crisis units if that fits the situation. Many can only confirm if the person consents, but ask anyway and leave your number.</li>
        <li>Their workplace, school, gym, church, and regular hangouts. Ask if there are cameras — see <Link href="/resources/retracing-steps">Retracing Their Steps</Link>.</li>
      </ul>

      <h2>Step 7 — Pick a point person and take shifts</h2>
      <p>
        One person talks to police. One person runs social media and the tip phone. Everyone else searches, drives, or sleeps.
        This will go longer than you think, and you need to be able to think on day three. Eat. Drink water. Call <strong>988</strong> if you need to talk to someone at 3 a.m.
      </p>
    </GuideLayout>
  );
}
