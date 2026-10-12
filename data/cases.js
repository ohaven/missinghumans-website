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
  {
    id: "sample-2026-001",
    status: "missing",
    name: "Sample Entry — Replace Me",
    age: 34,
    caseType: "adult",
    dateMissing: "2026-10-01",
    city: "Albuquerque",
    state: "NM",
    photo: "",
    height: "5'11\"",
    weight: "180 lbs",
    hair: "Black, short",
    eyes: "Brown",
    distinguishingMarks: "Tattoo of a compass on left forearm",
    lastSeenWearing: "Gray hooded sweatshirt, dark jeans, white sneakers",
    medical: "May need daily medication",
    vehicle: "",
    summary:
      "This is a placeholder so you can see how a case displays. Delete it once real cases are added.",
    agency: "Albuquerque Police Department",
    agencyPhone: "505-242-COPS",
    caseNumber: "",
    familyPhone: "",
    namusUrl: "",
    reward: "",
  },
];
