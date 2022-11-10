import "./Tarjeta.css";

const Tarjeta = ({ titulo, img: { src, alt } }) => {
  return (
    <div className="tarjeta">
      <img src={src} alt={alt} />
      <p>{titulo}</p>
    </div>
  );
};

export default Tarjeta;
