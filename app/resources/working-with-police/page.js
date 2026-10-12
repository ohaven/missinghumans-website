import GuideLayout from "@/components/GuideLayout";

export const metadata = { title: "Working With Police — Jurisdiction, Escalation, and Your Rights" };

export default function Page() {
  return (
    <GuideLayout
      title="Working With Police"
      intro="Most officers want to help. The system around them is built for cases that look like crimes, and a missing person often doesn't — yet. Here is how to be the family they can work with, and what to do when you're not being heard."
      next={["/resources/retracing-steps", "Retracing Their Steps — timelines, phones, and camera footage."]}
    >
      <h2>Who has jurisdiction?</h2>
      <ul>
        <li>File the report with the department where the person was <strong>last seen</strong>. If that&apos;s unknown, file where they <strong>live</strong>. Either must take it.</li>
        <li>If the person may have traveled, both departments can be involved. Ask each: <em>&quot;Which agency has the lead, and what&apos;s the case number on your end?&quot;</em></li>
        <li>Inside city limits → city police. Outside → county sheriff. Highways → state police / highway patrol. Tribal land → tribal police, often with FBI or BIA. Military member → their base&apos;s law enforcement as well as local police.</li>
        <li>If one department says &quot;not ours,&quot; ask them to take the report anyway and forward it. Under federal law (for anyone under 21) and most state laws, they cannot refuse to take a missing person report based on jurisdiction.</li>
      </ul>

      <h2>What police can do that you can&apos;t</h2>
      <ul>
        <li>Request a phone <strong>location ping</strong> and records from the carrier under exigent circumstances.</li>
        <li>Pull <strong>bank and card activity</strong>, transit cards, toll records, and license-plate-reader hits.</li>
        <li>Obtain <strong>security footage</strong> from businesses that won&apos;t release it to the public (but see our tip in Retracing Steps — you can often get it preserved).</li>
        <li>Enter the person in <strong>NCIC</strong> so any officer anywhere who runs their name or plate gets a hit.</li>
        <li>Issue <strong>alerts</strong>, BOLOs, and contact other agencies, hospitals, and medical examiners through official channels.</li>
      </ul>
      <p>Your job is to feed them everything that lets them use those tools: phone number and carrier, bank names, plate, route, friends&apos; names and numbers.</p>

      <h2>Being the family they can work with</h2>
      <ul>
        <li>One point of contact. Pick the calmest, most organized person. Everyone else routes through them.</li>
        <li>Write everything down and send a short, dated summary email after each conversation: <em>&quot;Confirming what we discussed today…&quot;</em> This creates a record and makes it easy for the next shift to catch up.</li>
        <li>Bring new information in a tidy form — a one-page timeline, a list of names and numbers, screenshots in order. Detectives have many cases; make yours the easy one to act on.</li>
        <li>Ask for a <strong>regular check-in</strong> — &quot;Can we touch base every afternoon?&quot; — instead of calling ten times a day.</li>
        <li>Tell them before you post publicly about anything sensitive, and pass every tip you receive to them, even ones that seem useless.</li>
      </ul>

      <h2>When you feel brushed off</h2>
      <ol>
        <li><strong>Name the risk clearly.</strong> &quot;He has no history of leaving, left his medication, and his car is still here. I believe he is endangered.&quot; Use the word <em>endangered</em>.</li>
        <li><strong>Ask for the supervisor.</strong> Politely: &quot;I&apos;d like to speak with the shift sergeant or the detective division supervisor.&quot;</li>
        <li><strong>Ask for specifics.</strong> &quot;Has she been entered into NCIC? What is the NCIC number? Has a BOLO been issued for the vehicle? Has the carrier been contacted?&quot; Specific questions get specific action.</li>
        <li><strong>Go up a level.</strong> Your <strong>state missing persons clearinghouse</strong> (in the state police / Department of Public Safety) can coordinate and nudge. For children, <strong>NCMEC</strong> works the case alongside police and is very effective at getting attention.</li>
        <li><strong>Register the case in NamUs yourself.</strong> NamUs contacts the agency to verify, which puts the case in front of them again.</li>
        <li><strong>Local media and elected officials.</strong> A reporter&apos;s call or a city council member&apos;s inquiry often moves a case. Keep it factual and keep the police number on everything.</li>
        <li><strong>Private resources.</strong> Some regions have volunteer search-and-rescue groups and nonprofit investigators who work with families for free. Ask the clearinghouse or NCMEC for vetted ones; be very careful with anyone who asks for money up front.</li>
      </ol>

      <h2>Things to know</h2>
      <ul>
        <li>You can request a copy of the report. Keep it with you; it opens doors at hospitals and with other agencies.</li>
        <li>Police generally need a warrant or your consent to search the person&apos;s home or phone. If you have access, offer it — but ask them first before going through devices yourself, so nothing gets overwritten.</li>
        <li>If your loved one is found and is an adult who doesn&apos;t want contact, police will tell you they&apos;re safe but may not tell you where. That is painful, and it is the law.</li>
        <li>If the case is closed and you believe it shouldn&apos;t be, ask in writing for it to be reopened and state the new information. Copy the clearinghouse.</li>
      </ul>
    </GuideLayout>
  );
}
