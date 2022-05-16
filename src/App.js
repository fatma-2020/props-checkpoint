import React from "react";
import "./App.css";
import Profile from "./Profile/Profile";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const alertByName = (name) => alert(name);

  return (
    <div className="App">
      <div style={{ backgroundColor: "#93b5fa" }}>
        <h2>Beautiful paintings</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Profile
            fullName="A Girl by the Window 2000"
            bio="Oil on canvas , 75 x 55 cm (29.5 x 21.7 in.)"
            profession="Painter : Iman Maleki, Iranian Realist painter"
            alertByName={alertByName}
            style={{ width: 600 }}
          >
            <figure>
              <img
                src="/girl.jpg"
                alt="paintimg"
                style={{ height: 300, width: 200 }}
              />
            </figure>
          </Profile>
          <Profile
            fullName="El aroma en la camisa de los amados profetas Jacob y José"
            bio="Galería de Arte Islámico y Fotografía"
            profession="Artista Profesor : Mahmud Farshchian"
            alertByName={alertByName}
            style={{ width: 550 }}
          >
            <figure>
              <img
                src="/jacob.jpg"
                alt="paintimg2"
                style={{ height: 300, width: 200 }}
              />
            </figure>
          </Profile>
        </div>
      </div>
    </div>
  );
}

export default App;
