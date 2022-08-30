import styles from "./Profile.module.css";

const Profile = (props) => {
  let userId = window.location.pathname.split("/")[2];
  let user = props.function(userId);
  console.log(user);
  // console.log(userId);
  return (
    <div className="row">
      <div className="col-sm-4">
        <img className="img-fluid" src={user.avatar} alt="" />
      </div>
      <div className="col-sm-8">
        <h1 className={styles.about}>
          {user.name} {user.lastname}
        </h1>
        <h2 style={{ backgroundColor: "lightblue" }}>{user.about}</h2>
        <h3>E-mail: {user.email}</h3>
        <p className={styles.id}>Id: {user.id}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          beatae commodi, quaerat assumenda voluptas sint libero ab corporis
          atque, vitae obcaecati deserunt consequatur natus, magnam aut
          exercitationem optio nam dolore.
        </p>
      </div>
    </div>
  );
};
export default Profile;
