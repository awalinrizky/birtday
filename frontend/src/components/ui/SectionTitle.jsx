export default function SectionTitle({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="text-center">
      {eyebrow && (
        <p className="eyebrow justify-center">
          {eyebrow}
        </p>
      )}

      {title && (
        <h2
          className="mt-5 text-5xl md:text-6xl text-ink"
          style={{
            fontFamily: "var(--font-display)",
          }}
        >
          {title}
        </h2>
      )}

      {description && (
        <p className="max-w-2xl mx-auto mt-6 leading-8 text-ink-soft">
          {description}
        </p>
      )}
    </div>
  );
}