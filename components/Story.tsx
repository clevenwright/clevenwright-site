import Ledger from "./Ledger";

export default function Story() {
  return (
    <section id="story">
      <div className="wrap">
        <div className="reveal">
          <div className="eyebrow">The through-line</div>
          <h2>The work is the credential.</h2>
        </div>
        <div className="prose reveal">
          <p>
            I did not take the usual path, and that is the point. I started by knocking on doors, literally,
            selling to whoever would open one. <strong>Nobody hands you anything in that job, so I learned to
            earn it.</strong> I built a career from there one result at a time, no degree and no shortcut,
            just an obsession with figuring out what actually works and then teaching it to everyone around me.
          </p>
          <p>
            That path carried me from the sales floor to the executive seat, and it taught me the thing most
            technologists miss. <strong>Technology only matters when it changes how a real person performs,
            decides, or believes.</strong>
          </p>
          <p>
            Inside a national enterprise, I led AI adoption across the organization and built SKYLAR, an AI
            enablement solution that delivered 15 to 20 percent productivity gains. Then I did the thing
            25 years had prepared me for. I founded Pyrigen, a studio building AI-powered products that
            help people grow, learn, and prove what they are capable of.
          </p>
        </div>
        <Ledger />
      </div>
    </section>
  );
}
