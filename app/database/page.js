import { Suspense } from "react";
import DatabaseClient from "./DatabaseClient";

export const metadata = {
  title: "Missing Persons Database",
  description: "Search missing person cases submitted by families. Filter by name, state, city, and age.",
};

export default function DatabasePage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Missing Persons Database</h1>
        <p className="lead">
          Cases posted here are submitted by families and reviewed before they appear. Every case lists the
          investigating agency to call with information — please contact them directly, not us.
        </p>
        <Suspense fallback={<p>Loading cases…</p>}>
          <DatabaseClient />
        </Suspense>
      </div>
    </section>
  );
}
