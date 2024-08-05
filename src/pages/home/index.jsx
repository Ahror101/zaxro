import "./styles.scss";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="texts">
        <h1>grehgy</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab ratione
          illum, quos facilis quibusdam alias harum soluta nobis quidem neque
          nam asperiores molestias tenetur, esse amet totam recusandae est sed.
        </p>
      </div>
      <img src={require("../../assets/home.png")} />
    </section>
  );
}
