import Settings from "./components/settings/Settings";
import LeftBar from "./layouts/leftBar/LeftBar";
import Navbar from "./layouts/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="flex">
        <LeftBar />

        <Settings />
      </div>
    </>
  );
}

export default App;
