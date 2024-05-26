import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [userClient, setUserClient] = useState("");
  useEffect(() => {
    setUserClient(detectOS());
    setTimeout(() => {
      openStore();
    }, 2000);
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

    // macOS detection
    if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)) {
      return "macOS";
    }

    // Linux detection
    if (/Linux/.test(userAgent) && !/android/i.test(userAgent)) {
      return "Linux";
    }

    return "unknown";
  }

  function openStore() {
    var os = detectOS();

    if (os === "iOS") {
      window.location.href = "https://apps.apple.com"; // Redirect to Apple App Store
    } else if (os === "Android") {
      window.location.href = "https://play.google.com/store"; // Redirect to Google Play Store
    } else if (os === "Windows" || os === "Windows Phone") {
      window.location.href = "https://www.microsoft.com/store/apps"; // Redirect to Microsoft Store
    } else {
      console.log("Unsupported OS or unable to detect the OS.");
    }
  }

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
