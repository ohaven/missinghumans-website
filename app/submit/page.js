import SubmitForm from "@/components/SubmitForm";

export const metadata = { title: "Submit a Missing Person Case", description: "Families can submit a missing person for review and posting on the Missing Humans database." };

export default function SubmitPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Submit a Case</h1>
        <p className="lead">
          Post your loved one where searchers and the public can see them. Every submission is reviewed by a person before it goes live,
          and the case will point tips to the investigating agency.
        </p>
        <SubmitForm />
      </div>
    </section>
  );
}
