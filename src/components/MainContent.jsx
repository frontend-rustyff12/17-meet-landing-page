export default function MainContent() {
  const images = [
    "woman-in-videocall",
    "women-videochatting",
    "men-in-meeting",
    "man-texting",
  ];
  return (
    <section className="main-content">
      <span className="number-circle">01</span>
      <div className="image-container">
        {images.map((item, index) => (
          <img
            className=""
            key={index}
            src={`/desktop/image-${item}.jpg`}
            // src="/desktop/image-man-texting.jpg"
            alt={item.split("-").join("")}
          />
        ))}
      </div>
      <div className="text-container">
        <h3 className="red-hat-3">Built for modern use</h3>

        <h2 className="red-hat-2">Smarter meetings, all in one place</h2>

        <p className="">
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>
    </section>
  );
}
