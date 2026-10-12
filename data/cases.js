// ============================================================
// MISSING PERSONS DATABASE
//
// HOW TO ADD A CASE (after you've verified it with the family):
//   1. Put the photo in /public/images/cases/  (example: jane-doe.jpg)
//      Keep photos under ~500 KB. Square or portrait works best.
//   2. Copy one of the blocks below, paste it at the TOP of the list,
//      and fill in the details. Use a new, unique "id".
//   3. Commit the change on GitHub. The site updates in about a minute.
//
// HOW TO MARK SOMEONE FOUND: set  status: "found"  (the card shows a
// green "Located" banner and drops out of the default search).
// To remove a case entirely, delete the block.
//
// FIELD NOTES
//   state        two-letter postal code, uppercase (CO, AZ, NM ...)
//   dateMissing  YYYY-MM-DD
//   caseType     "adult" | "child" | "elder" | "medical"
//   photo        path under /public, or "" for a placeholder
//   agencyPhone  the investigating law-enforcement number (preferred)
//   familyPhone  optional; only if the family wants it public
//   caseNumber   police report / NamUs number if known
// ============================================================

export const cases = [
  // ---- EXAMPLE (copy this block, remove the leading // on each line, and fill it in) ----
  // {
  //   id: "2026-10-doe-jane",
  //   status: "missing",
  //   name: "Jane Doe",
  //   age: 34,
  //   caseType: "adult",
  //   dateMissing: "2026-10-01",
  //   city: "Albuquerque",
  //   state: "NM",
  //   photo: "/images/cases/jane-doe.jpg",
  //   height: "5'6\"",
  //   weight: "140 lbs",
  //   hair: "Brown, shoulder length",
  //   eyes: "Brown",
  //   distinguishingMarks: "Small scar on chin",
  //   lastSeenWearing: "Gray hoodie, jeans",
  //   medical: "",
  //   vehicle: "",
  //   summary: "Last seen leaving work. Out of character; family is very concerned.",
  //   agency: "Albuquerque Police Department",
  //   agencyPhone: "505-242-2677",
  //   caseNumber: "",
  //   familyPhone: "",
  //   namusUrl: "",
  //   reward: "",
  // },
];
