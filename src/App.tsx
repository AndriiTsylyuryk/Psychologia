import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return <div>
    <Routes>
      <Route path="/" element={<Layout/>}/><Route/>
      
    </Routes>
  </div>;
}

export default App;
