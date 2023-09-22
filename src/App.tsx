import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody/HomeBody";
import Promotion from "./routes/Home/Promotion";
import Subscrition from "./routes/Home/Subscription";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />} >
            <Route index element={<HomeBody />} />
            <Route path="promotion" element={<Promotion />} />
            <Route path="sub" element={<Subscrition />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
