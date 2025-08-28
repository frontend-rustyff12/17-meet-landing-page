export default function Hero() {
  return (
    <section
      className="hero-container"
      role="banner"
      aria-label="Main promotional section"
    >
      <div className="hero-image-container">
        <img
          className="hero-image left"
          src="/desktop/image-hero-left.png"
          alt="Hero promotional image of chat heads"
        />
        <img
          className="hero-image right"
          src="/desktop/image-hero-right.png"
          alt="Hero promotional image of chat heads"
        />
        <img
          className="hero-image tablet"
          src="/tablet/image-hero.png"
          alt="Hero promotional image of chat heads"
        />
      </div>
      <div className="hero-content">
        <h1 className="red-hat-1">Group Chat for Everyone</h1>
        <p className="red-hat-4">
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
        <div className="hero-buttons">
          <button className="red-hat-5">
            Download <span>v1.3</span>
          </button>
          <button className="red-hat-5">What is it?</button>
        </div>
      </div>
    </section>
  );
}
