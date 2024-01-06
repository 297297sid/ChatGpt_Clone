import "./App.css";
import MainPage from "./components/main/MainPage";
import SidebarPage from "./components/sidebar/SidebarPage";
const App = () => {
  return (
    <div className="App">
      <SidebarPage></SidebarPage>
      <MainPage></MainPage>

      {/* <input
        tpye="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={handleSend}>send data</button> */}
    </div>
  );
};

export default App;
