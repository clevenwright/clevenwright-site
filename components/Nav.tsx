import PyrigenMark from "./PyrigenMark";

export default function Nav() {
  return (
    <nav id="nav">
      <div className="nav-in">
        <a href="#top" className="nav-name">
          <PyrigenMark strokeWidth={2} />
          Cleven Wright
        </a>
        <div className="nav-links">
          <a href="#story">Story</a>
          <a href="#work">Work</a>
          <a href="#together">Work with me</a>
          <a href="#contact" className="nav-cta">
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
