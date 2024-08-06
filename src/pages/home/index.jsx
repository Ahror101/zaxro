import "./styles.scss";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="texts">
        <h1>
          Natijalardan zavqlaning <span className="yozuv">Katta hosil</span>{" "}
          <br /> Osonlik bilan
        </h1>
        <p className="text1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab ratione
          illum, quos facilis quibusdam alias harum soluta nobis quidem neque
          nam asperiores molestias tenetur, esse amet totam recusandae est sed.
        </p>  
      </div>
      <div className="card">
        <img className="foto" src={require("../../assets/home.png")} />
        <h3>Yeguliklar Sabzavotlar</h3>
        <p>Maecenas est oson, convallis esa osonroq, massa esa qattiqroq.</p>
      </div>
    </section>
  );
}
