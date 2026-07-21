export default function SectionHeading({ title, sub }) {
  return (
    <>
      <h2 className="section-comment">
        <span className="comment-slashes" aria-hidden="true">
          //
        </span>
        <span className="comment-title">{title}</span>
      </h2>
      {sub && <p className="section-sub">{sub}</p>}
    </>
  );
}
