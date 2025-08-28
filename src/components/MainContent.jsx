export default function MainContent() {
  const images = [
    "woman-in-videocall",
    "women-videochatting",
    "men-in-meeting",
    "man-texting",
  ];
  return (
    <section
      className="main-content"
      role="region"
      aria-labelledby="main-heading"
    >
      <span className="number-circle" aria-hidden="true">
        01
      </span>
      <div className="image-container">
        {images.map((item, index) => (
          <img
            key={index}
            src={`/desktop/image-${item}.jpg`}
            alt={`${item[0].slice().toUpperCase()}${item
              .slice(1)
              .split("-")
              .join(" ")}`}
            aria-hidden="true"
            loading="lazy"
          />
        ))}
      </div>
      <div className="text-container">
        <h2 className="red-hat-3">Built for modern use</h2>

        <h3 id="main-heading" className="red-hat-2">
          Smarter meetings, all in one place
        </h3>

        <p>
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>
    </section>
  );
}
