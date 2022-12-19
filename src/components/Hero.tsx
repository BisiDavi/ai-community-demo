
export default function Hero() {
  return (
    <>
      <div className="4 hero-banner relative w-full"></div>
      <style jsx>
        {`
          .hero-banner {
            background-image: url("/hero-banner-1.webp");
            height: 70vh;
            background-size: contain;
          }
        `}
      </style>
    </>
  );
}
