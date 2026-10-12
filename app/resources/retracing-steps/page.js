import GuideLayout from "@/components/GuideLayout";

export const metadata = { title: "Retracing Their Steps — Timelines, Phones, and Camera Footage" };

export default function Page() {
  return (
    <GuideLayout
      title="Retracing Their Steps"
      intro="Investigators work from a timeline. Build the best one you can, then go find what fills the gaps."
      next={["/resources/effective-flyer", "Making an Effective Flyer — what works and what wastes paper."]}
    >
      <h2>Build the timeline</h2>
      <p>Start a shared document or a notebook with three columns: <strong>time</strong>, <strong>what happened</strong>, <strong>how we know</strong>. Work backward from the last confirmed sighting.</p>
      <ul>
        <li><strong>Last confirmed contact</strong> — the last time someone actually saw or spoke to them (not just a text that could have been anyone).</li>
        <li><strong>Last digital activity</strong> — texts sent, calls, &quot;last seen&quot; on messaging apps, posts, likes, Venmo/Cash App, rideshare, music or game activity, smartwatch sync.</li>
        <li><strong>Routine</strong> — what do they normally do on that day of the week? Which route, which store, which coffee shop? Where would they go if upset?</li>
        <li><strong>What&apos;s missing from home</strong> — phone, keys, wallet, charger, car, medications, a bag, the dog. Each tells you something about intent.</li>
        <li><strong>What&apos;s unusual</strong> — new friends, a new relationship, money stress, a fight, a change in mood, a sold or pawned item, a search history.</li>
      </ul>

      <h2>Phones, accounts, and devices</h2>
      <div className="notice">
        <p><strong>Tell police before you log into anything.</strong> Opening accounts can change &quot;last active&quot; times and location history that investigators need. Ask them what to check and what to leave alone.</p>
      </div>
      <ul>
        <li>If you share a phone plan, the carrier account shows call and text logs (not content) and sometimes approximate location. Family-location sharing apps (Find My, Google Maps, Life360) may show a last location — screenshot it with the timestamp.</li>
        <li>Give police the <strong>phone number, carrier, and IMEI</strong> (on the box or the account). Ask them to request a location ping and records.</li>
        <li>Shared streaming, gaming, or smart-home accounts can show activity (a login, a door unlock, a show playing). Note it; don&apos;t change anything.</li>
        <li>Check for a car with a telematics app (OnStar, FordPass, Tesla, etc.) — some can locate the vehicle. Toll tags and parking apps leave records too.</li>
      </ul>

      <h2>Security camera footage — move fast</h2>
      <p>Most businesses and doorbell cameras <strong>overwrite footage in 3 to 30 days</strong>. This is the most time-sensitive thing you can do.</p>
      <ol>
        <li>Map the last known location and every route out of it. List every business, apartment complex, school, church, transit stop, and traffic intersection along the way.</li>
        <li>Visit in person with a flyer and the police case number. Ask the manager: <em>&quot;Can you please <strong>preserve</strong> your footage from [date and time range]? The police will request it, case #____.&quot;</em> Preserving is easy for them; releasing it to you often isn&apos;t. Preserved is what matters.</li>
        <li>Post in neighborhood groups asking people to check <strong>doorbell and dashcam</strong> footage from that date and time, and to send anything to police.</li>
        <li>Give police the list of places that agreed to preserve footage. They will not have time to canvass every block; you just did it for them.</li>
        <li>City traffic cameras, transit cameras, and license-plate readers are police-only requests — ask the detective to make them.</li>
      </ol>

      <h2>Talking to the people who saw them last</h2>
      <ul>
        <li>Ask open questions first: &quot;Walk me through the last time you saw them.&quot; Then details: mood, clothes, who they were with, what they said about plans, which direction they went.</li>
        <li>Write down exact words. &quot;Said he was going to see a friend&quot; and &quot;said he was going to see <em>a</em> friend, wouldn&apos;t say who&quot; are very different.</li>
        <li>Get phone numbers for everyone mentioned and pass them to police. Don&apos;t confront anyone you suspect — tell the detective.</li>
      </ul>

      <h2>Organizing volunteers</h2>
      <ul>
        <li>Tell police before you search so you don&apos;t disturb a scene or duplicate their work. Ask where it would help most.</li>
        <li>Split the map into zones. Each team gets a zone, a phone, water, and a photo of the person. Teams check in at set times.</li>
        <li>Search the places people don&apos;t: behind buildings, drainage ditches, culverts, brush along trails and water, parked cars, stairwells, parking garages, under bridges.</li>
        <li>Anyone who finds something should <strong>not touch it</strong> — photograph it, note the location, call police.</li>
        <li>Volunteer search-and-rescue teams exist in most states and often work for free; ask the sheriff or your state clearinghouse.</li>
      </ul>
    </GuideLayout>
  );
}
