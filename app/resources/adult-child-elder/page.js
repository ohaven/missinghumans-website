import GuideLayout from "@/components/GuideLayout";

export const metadata = { title: "Adult vs. Child vs. Elder — How the Response Differs" };

export default function Page() {
  return (
    <GuideLayout
      title="Adult vs. Child vs. Elder"
      intro="The law, the alerts, and the urgency police assign all change with who is missing. Knowing the rules helps you push for the right response."
      next={["/resources/working-with-police", "Working With Police — jurisdiction, escalation, and your rights."]}
    >
      <h2>Missing children (under 18)</h2>
      <ul>
        <li><strong>Police must take the report immediately</strong> and enter the child into NCIC within two hours (federal law, the Adam Walsh Act). There is never a waiting period.</li>
        <li><strong>AMBER Alert</strong> is only for confirmed abductions where the child is in danger and there is enough description to broadcast (child, suspect, or vehicle). Most missing children do <em>not</em> qualify, and that doesn&apos;t mean police aren&apos;t looking. Ask instead about an <strong>Endangered Missing Child advisory</strong>, which many states can issue when AMBER criteria aren&apos;t met.</li>
        <li>Call <strong>NCMEC at 1-800-THE-LOST</strong> right after filing. They assign a case manager, make posters, push the case to media and retailers, and work directly with your detective. Free.</li>
        <li><strong>Runaways are still missing children.</strong> Insist on a report. Many teens who leave are found through friends&apos; phones and social media within days; investigators can request that data, you usually cannot.</li>
        <li>Parental or family abduction is still abduction. Bring any custody order to the police.</li>
      </ul>

      <h2>Missing adults (18 and over)</h2>
      <ul>
        <li>Adults have the legal right to leave, and that is the wall families run into. Police can take the report, but they prioritize cases where the adult is <strong>&quot;endangered&quot;</strong> or <strong>&quot;involuntarily missing.&quot;</strong></li>
        <li>Your job is to make the risk clear and specific. Say it out loud: <em>&quot;This is completely out of character.&quot;</em> Then why: left medication behind, left without phone/wallet/car, a planned event they would never miss, a mental-health crisis, threats from someone, bad weather, no history of leaving.</li>
        <li>Ages 18–20 are covered by the two-hour NCIC rule above (Suzanne&apos;s Law). For 21+, ask directly for NCIC entry anyway.</li>
        <li>Register the case yourself on <a href="https://namus.nij.ojp.gov" target="_blank" rel="noopener noreferrer">NamUs</a>. NamUs verifies it with the police agency, which also gently nudges them.</li>
        <li>Mental-health crisis: tell police. Many departments have crisis teams, and it changes the search (hospitals, bridges, favorite places, cars left in lots).</li>
      </ul>

      <h2>Older adults and people with dementia or cognitive disabilities</h2>
      <ul>
        <li>Treat it as an emergency. Call <strong>911</strong>, not the non-emergency line. A person with dementia who wanders is at serious risk within hours, especially in heat, cold, or near water.</li>
        <li>Ask for a <strong>Silver Alert</strong> (name varies by state — also &quot;Golden Alert,&quot; &quot;Endangered Missing Adult&quot;). Most states have one; it broadcasts to media and sometimes highway signs.</li>
        <li>Search within one mile first. People with dementia typically do not travel far on foot and are often found close by, sometimes in brush, drainage areas, or neighbors&apos; yards. Check former homes and former workplaces too — they may be &quot;going home&quot; to an old address.</li>
        <li>If they drive, give police the vehicle and plate immediately and ask for a BOLO. If they use a wearable or tracking device, pull up the location now.</li>
        <li>Afterward, consider enrolling in your county&apos;s wandering-person registry or MedicAlert so the next time is faster.</li>
      </ul>

      <h2>People who need medication or medical care</h2>
      <ul>
        <li>Tell police exactly what the person takes and <strong>how long they can safely go without it</strong>. This is what moves a case from &quot;adult, free to leave&quot; to &quot;endangered.&quot;</li>
        <li>Call every hospital in the area and ask for the patient by name <em>and</em> for any unidentified patients matching the description. Call again each day; staff and shifts change.</li>
        <li>Pharmacies: ask the person&apos;s pharmacy to flag if the prescription is filled anywhere in the chain. They can&apos;t always tell you, but they can tell police.</li>
      </ul>

      <h2>Native people and tribal lands</h2>
      <p>
        Jurisdiction can involve tribal police, county sheriffs, state police, the FBI, and the Bureau of Indian Affairs at once. Report to the agency where the person was last seen,
        then ask plainly: <em>&quot;Who has the lead on this case?&quot;</em> Follow up with the <a href="https://www.bia.gov/service/mmu" target="_blank" rel="noopener noreferrer">BIA Missing &amp; Murdered Unit</a> and
        the FBI if you don&apos;t get a clear answer. Enter the case in NamUs regardless.
      </p>
    </GuideLayout>
  );
}
