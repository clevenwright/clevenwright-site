import PyrigenMark from "./PyrigenMark";

export default function Hero() {
  return (
    <header id="top">
      <div className="wrap">
        <PyrigenMark className="crest" strokeWidth={2.2} />
        <div className="kicker">Founder and CEO, Pyrigen</div>
        <h1>Cleven Wright</h1>
        <div className="roles">
          AI Strategist <span>&middot;</span> Sales Enablement Leader <span>&middot;</span> Builder
        </div>
        <p className="lede">
          I have spent 25 years turning emerging technology into results people can measure,
          from the front line to the founder&apos;s seat. Today I build the next generation of
          AI-powered software for human potential.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">
            Get in touch
          </a>
          <a href="#work" className="btn btn-ghost">
            See the work
          </a>
        </div>
      </div>
    </header>
  );
}
