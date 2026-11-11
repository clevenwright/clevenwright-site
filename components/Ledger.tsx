const entries = [
  {
    year: "The early years",
    role: "The knock",
    note: "Sold door to door, nationally, business to business and direct to consumer, alongside retail management. No territory handed to me and no warm leads, just the next door. The work ethic was forged here.",
  },
  {
    year: "1997",
    role: "Co-Owner, first venture",
    note: "Ran a product sales and distribution business. Learned profit, contracts, and customers the hard way, by owning the outcome.",
  },
  {
    year: "2000",
    role: "The corporate climb begins",
    note: "Joined Boise Cascade Office Products in sales. It became OfficeMax, then Office Depot. The name on the building changed twice. I kept climbing.",
  },
  {
    year: "2020",
    role: "Senior Training Manager",
    note: "Took over leadership of the sales training team: the content, the delivery, and the people who delivered it.",
  },
  {
    year: "2022",
    role: "Senior Manager, Training Development",
    note: "Led enablement for the organization, then led the case for AI adoption across the business.",
  },
  {
    year: "2023",
    role: "Led AI for ODP Business",
    note: "Built the AI strategy and brought AI agents to 1,100+ people. Win rate rose 15% for the sellers using them.",
  },
  {
    year: "2025",
    role: "Senior AI Business Solutions Product Manager",
    note: "Built SKYLAR, an AI enablement solution that delivered 15 to 20 percent productivity gains.",
  },
  {
    year: "2026",
    role: "Founder and CEO, Pyrigen",
    note: "Building AI-powered software for human potential.",
  },
];

export default function Ledger() {
  return (
    <div className="ledger">
      {entries.map((entry) => (
        <div key={entry.year} className="entry reveal">
          <div className="entry-year">{entry.year}</div>
          <div className="entry-role">{entry.role}</div>
          <div className="entry-note">{entry.note}</div>
        </div>
      ))}
    </div>
  );
}
