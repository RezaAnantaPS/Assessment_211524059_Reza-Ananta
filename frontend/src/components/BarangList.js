import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const BarangList = () => {
  const [barang, setBarang] = useState([]);

  useEffect(() => {
    getBarang();
  }, []);

  const getBarang = async () => {
    try {
      const response = await axios.get("http://localhost:5000/barang");
      setBarang(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBarang = async (kodeBarang) => {
    try {
      await axios.delete(`http://localhost:5000/barang/${kodeBarang}`);
      getBarang();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Kode Barang</th>
              <th>Nama Barang</th>
              <th>Satuan</th>
              <th>Harga Satuan</th>
              <th>Stok</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {barang.map((item, index) => (
              <tr key={item.KodeBarang}>
                <td>{index + 1}</td>
                <td>{item.KodeBarang}</td>
                <td>{item.NamaBarang}</td>
                <td>{item.Satuan}</td>
                <td>{item.HargaSatuan}</td>
                <td>{item.Stok}</td>
                <td>
                  <Link
                    to={`edit/${item.KodeBarang}`}
                    className="button is-small is-info"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteBarang(item.KodeBarang)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
