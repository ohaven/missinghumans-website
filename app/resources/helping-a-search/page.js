import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";

export const metadata = { title: "Helping Someone Else's Search" };

export default function Page() {
  return (
    <GuideLayout
      title="Helping Someone Else's Search"
      intro="You saw a post, or you think you saw a person. Here is how to actually help — and how not to make a terrible week worse for a family."
    >
      <h2>If you think you&apos;ve seen the person</h2>
      <ol>
        <li><strong>Call the number on the flyer</strong> — usually the police department — or 911 if it&apos;s happening right now. Do not only comment on a post. Comments get lost; calls get logged.</li>
        <li>Give the <strong>exact time, place, direction of travel, and what they were wearing</strong>. &quot;Maybe Tuesday near the mall&quot; is hard to use; &quot;Tuesday about 4:15 pm, west side of the Target lot on Coors, walking north, gray hoodie&quot; is gold.</li>
        <li>If it&apos;s safe, note anything else — a vehicle, a companion — and <strong>don&apos;t approach or follow</strong> someone you think may be with them.</li>
        <li>If you have a doorbell, dashcam, or store camera that may have caught something, say so. Preserve the footage and offer it to police.</li>
      </ol>

      <h2>Sharing well</h2>
      <ul>
        <li><strong>Share the original post</strong> from the family or police rather than screenshotting it. The original gets updated; your screenshot never will.</li>
        <li>Check the date before you share. Old posts circulate for years and can hurt a family long after their person is home.</li>
        <li>Share to groups in the <strong>right area</strong> — the city where they were last seen and places they might travel. A flyer for Albuquerque posted in Maine is noise.</li>
        <li>Keep the police number on it. Don&apos;t edit the flyer to add your own commentary.</li>
      </ul>

      <h2>Please don&apos;t</h2>
      <ul>
        <li><strong>Speculate publicly</strong> about what happened, who did it, or the person&apos;s lifestyle, mental health, or family. The family reads every comment. So do investigators, and public theories can poison a case.</li>
        <li><strong>Contact the family with theories, psychic visions, or &quot;I have a feeling.&quot;</strong> Call the police tip line instead; that&apos;s what it is for.</li>
        <li><strong>Start a fundraiser</strong> in the family&apos;s name without their explicit permission. Scammers do this; don&apos;t look like one.</li>
        <li><strong>Post photos of a person you think matches</strong> — you could expose an uninvolved stranger. Send it to police privately.</li>
        <li><strong>Confront anyone</strong> you suspect. Ever.</li>
      </ul>

      <h2>Things that really help</h2>
      <ul>
        <li>Print ten flyers and put them up along your commute. Ask your workplace to post one.</li>
        <li>Check your own cameras for the date in question, even if you&apos;re a few blocks away.</li>
        <li>If you know the family: bring food, walk the dog, drive someone to the police station, run their social media so they can sleep. Ask &quot;what can I take off your plate?&quot; not &quot;let me know if you need anything.&quot;</li>
        <li>Keep sharing after the first week. Attention fades fast; most cases don&apos;t resolve in seven days.</li>
        <li>Learn <Link href="/resources/first-hours">what to do in the first hours</Link> now, so you can help the next person calmly.</li>
      </ul>

      <div className="notice">
        <p>Looking for someone yourself? <Link href="/database">Search the database</Link> or <Link href="/submit">submit a case</Link>.</p>
      </div>
    </GuideLayout>
  );
}
