import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BarangList } from "./components/BarangList";
import AddBarang from "./components/AddBarang";
import EditBarang from "./components/EditBarang";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/barang" element={<BarangList />} />
        <Route path="/barang/add" element={<AddBarang />} />
        <Route path="/barang/edit/:kodeBarangParam" element={<EditBarang />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
