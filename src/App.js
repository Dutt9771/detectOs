import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [userClient, setUserClient] = useState("");
  useEffect(() => {
    setUserClient(detectOS());
  }, []);

  function detectOS() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone detection
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }

    // Windows detection
    if (/windows/i.test(userAgent) && !/windows phone/i.test(userAgent)) {
      return "Windows";
    }

    // iOS detection
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }

    // Android detection
    if (/android/i.test(userAgent)) {
      return "Android";
    }

    return "unknown";
  }

  console.log(detectOS());

  // console.log(detectOS());

  return (
    <div className="App">
      {userClient !== "unknown" ? (
        <div>You Are Using - {userClient}</div>
      ) : (
        <div>Your Device is Not Detecting ({userClient})</div>
      )}
    </div>
  );
}

export default App;
