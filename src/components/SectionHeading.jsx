export default function SectionHeading({ title, sub }) {
  return (
    <div className="section-head">
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}
