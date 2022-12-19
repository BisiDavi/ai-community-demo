export default function Hero() {
  return (
    <>
      <div className="hero-banner relative w-full"></div>
      <style jsx>
        {`
          .hero-banner {
            background-image: url("/hero-banner-1.webp");
            height: 80vh;
            background-size: contain;
          }
        `}
      </style>
    </>
  );
}
