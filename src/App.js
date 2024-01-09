import "./App.css";
import Body from "./dashboard/Body";
import Header from "./dashboard/Header";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <div className="flex justify-center bg-gray-300">
      <div className="flex flex-row max-w-[1440px]">
        <Navbar />
        <div>
          <Header />
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
