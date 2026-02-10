import aboutImage from "../assets/aboutus.png";

export default function About() {
  return (
    <section className="w-full">
      <img
        src={aboutImage}
        alt="About us"
        className="w-full h-auto block"
      />
    </section>
  );
}
