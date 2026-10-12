import FlyerBuilder from "./FlyerBuilder";

export const metadata = {
  title: "Free Missing Person Flyer Builder",
  description: "Create a print-ready missing person poster and social media image in minutes. Free, private — nothing is uploaded.",
};

export default function FlyerPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Flyer Builder</h1>
        <p className="lead">
          Fill in what you know — you can leave anything blank. Download a letter-size poster (PDF or image)
          and a square image for social media. Everything stays on your device; nothing is uploaded to us.
        </p>
        <FlyerBuilder />
      </div>
    </section>
  );
}
