import swimmer from "../img/swimmer.png";
import star from "../img/star.png";

export default function Card() {
  return (
    <div className="card">
      <img src={swimmer} alt="swimmer" className="card-image" />
      <div className="cards-stats">
        <img src={star} className="card-star" alt="star" />
        <span>5.0</span>
        <span className="grey">6 .</span>
        <span className="grey">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person{" "}
      </p>
    </div>
  );
}
