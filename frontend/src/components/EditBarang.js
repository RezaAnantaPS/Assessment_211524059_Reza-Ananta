import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBarang = () => {
  const [kodeBarang, setKodeBarang] = useState("");
  const [namaBarang, setNamaBarang] = useState("");
  const [satuan, setSatuan] = useState("");
  const [hargaSatuan, setHargaSatuan] = useState("");
  const [stok, setStok] = useState("");
  const navigate = useNavigate();
  const { kodeBarangParam } = useParams(); // Use the correct parameter name

  useEffect(() => {
    console.log("kodeBarangParam:", kodeBarangParam); // Add this line for debugging
    getBarangById();
  }, []);

  const updateBarang = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/barang/${kodeBarangParam}`, {
        KodeBarang: kodeBarang,
        NamaBarang: namaBarang,
        Satuan: satuan,
        HargaSatuan: hargaSatuan,
        Stok: stok,
      });
      navigate("/barang"); // Redirect to the list of barang
    } catch (error) {
      console.log(error);
    }
  };

  const getBarangById = async () => {
    const response = await axios.get(
      `http://localhost:5000/barang/${kodeBarangParam}`
    );
    setKodeBarang(response.data.KodeBarang);
    setNamaBarang(response.data.NamaBarang);
    setSatuan(response.data.Satuan);
    setHargaSatuan(response.data.HargaSatuan);
    setStok(response.data.Stok);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateBarang}>
          <div className="field">
            <label className="label">Kode Barang</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={kodeBarang}
                onChange={(e) => setKodeBarang(e.target.value)}
                placeholder="Kode Barang"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Nama Barang</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={namaBarang}
                onChange={(e) => setNamaBarang(e.target.value)}
                placeholder="Nama Barang"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Satuan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={satuan}
                onChange={(e) => setSatuan(e.target.value)}
                placeholder="Satuan"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Harga Satuan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={hargaSatuan}
                onChange={(e) => setHargaSatuan(e.target.value)}
                placeholder="Harga Satuan"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Stok</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={stok}
                onChange={(e) => setStok(e.target.value)}
                placeholder="Stok"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBarang;
