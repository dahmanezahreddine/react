import logo from "./logo.svg";
import "./App.css";
import Address from "./Component/profile/Address";
import ProfilePhoto from "./Component/profile/ProfilePhoto";
import FullName from "./Component/profile/FullName";
import ProfileComponent from "./Profile/ProfileComponent";

function App() {
  const Name = "Poutin";
  const LastName = "Vladimir";
  const Profession = "Président de la fédération de Russie";
  const alertcheckpoint = () => {
    alert(Name);
  };
  const myStyle = {
    color: "red",
  };
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Address />
      <ProfileComponent
        Name={Name}
        LastName={LastName}
        Profession={Profession}
        alertcheckpoint={alertcheckpoint}
        myStyle={myStyle}
      >
        <img src="./images/Vladimir_Putin_(2020-02-20).jpg" alt="pop"></img>
      </ProfileComponent>
    </div>
  );
}

export default App;
