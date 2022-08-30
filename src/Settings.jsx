import some_img from "./assets/img/coffee.jpg";
const Settings = () => {
  return (
    <div className="row">
      <div className="col-8">
        <section
          style={{
            backgroundImage: `url(${some_img})`,
            backgroundSize: "contain",
            width: "480px",
            height: "320px",
          }}
        ></section>
      </div>
    </div>
  );
};

export default Settings;
