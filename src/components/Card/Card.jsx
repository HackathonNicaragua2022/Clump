import "./Card.css";

const Card = ({ title, img: { src, alt }, ...props }) => {
  return (
    <div className="card" {...props}>
      <img src={src} alt={alt} />
      <div className="title">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
