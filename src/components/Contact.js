// import cat from "../img/cat.jfif";

export default function Contact({ img, name, phone, email }) {
  return (
    <div className="contact-card">
      <img src={img} alt="cat" />
      <h3>{name}</h3>
      <div className="info-group">
        {/* <img /> */}
        <p>{phone}</p>
      </div>
      <div className="info-group">
        {/* <img /> */}
        <p>{email}</p>
      </div>
    </div>
  );
}
