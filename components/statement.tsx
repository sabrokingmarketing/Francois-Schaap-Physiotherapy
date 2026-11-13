/**
 * The statement moment. Each word is wrapped so it can light up as the
 * statement scrolls past the middle of the screen. Words written as *word*
 * in content/site.ts turn teal. Screen readers read the plain sentence.
 */
export function Statement({ text, label }: { text: string; label: string }) {
  const plain = text.replace(/\*/g, "");
  const words = text.split(/\s+/);
  return (
    <section className="section" aria-label={label}>
      <div className="wrap statement-section">
        <p className="eyebrow">{label}</p>
        <p className="statement" data-statement>
          <span className="sr-only">{plain}</span>
          <span aria-hidden="true">
            {words.map((w, i) => {
              const strong = /^\*.*\*[.,!?]?$/.test(w);
              const clean = w.replace(/\*/g, "");
              return (
                <span key={i}>
                  <span className={strong ? "w w--strong" : "w"}>{clean}</span>
                  {i < words.length - 1 ? " " : ""}
                </span>
              );
            })}
          </span>
        </p>
      </div>
    </section>
  );
}
