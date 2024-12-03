import React, { useState } from "react";
import "../styles/ImportCalculator.css";

function ImportCalculator() {
  const [priceUSD, setPriceUSD] = useState(0);
  const [selectedTaxes, setSelectedTaxes] = useState({
    iva: false,
    arancel: false,
    estadistica: false,
  });
  const [exchangeRate, setExchangeRate] = useState(350);

  const handleTaxChange = (tax) => {
    setSelectedTaxes({ ...selectedTaxes, [tax]: !selectedTaxes[tax] });
  };

  const calculateTaxes = () => {
    let totalTaxes = 0;
    if (selectedTaxes.iva) totalTaxes += priceUSD * 0.21;
    if (selectedTaxes.arancel) totalTaxes += priceUSD * 0.35;
    if (selectedTaxes.estadistica) totalTaxes += priceUSD * 0.03;
    return totalTaxes;
  };

  const totalWithoutTaxes = parseFloat(priceUSD);
  const totalTaxes = calculateTaxes();
  const totalWithTaxes = totalWithoutTaxes + totalTaxes;
  const totalInPesos = totalWithTaxes * exchangeRate;

  return (
    <div className="calculator-container">
      <h1>Calculadora de Importación</h1>

      <form className="calculator-form">
        <div className="form-group">
          <label>Precio en USD</label>
          <input
            type="number"
            value={priceUSD}
            onChange={(e) => setPriceUSD(parseFloat(e.target.value) || 0)}
            placeholder="$0.00"
          />
        </div>

        <div className="form-group">
          <label>Tasa de cambio (USD a ARS)</label>
          <input
            type="number"
            value={exchangeRate}
            onChange={(e) => setExchangeRate(parseFloat(e.target.value) || 0)}
            placeholder="Ej. 350"
          />
        </div>

        <div className="form-group full-width">
          <h2>Impuestos</h2>
          <div className="taxes-checkboxes">
            <div className="checkbox">
              <input
                type="checkbox"
                id="iva"
                checked={selectedTaxes.iva}
                onChange={() => handleTaxChange("iva")}
              />
              <label htmlFor="iva">IVA 21%</label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                id="arancel"
                checked={selectedTaxes.arancel}
                onChange={() => handleTaxChange("arancel")}
              />
              <label htmlFor="arancel">Arancel 35%</label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                id="estadistica"
                checked={selectedTaxes.estadistica}
                onChange={() => handleTaxChange("estadistica")}
              />
              <label htmlFor="estadistica">Tasa Estadística 3%</label>
            </div>
          </div>
        </div>
      </form>

      <div className="summary">
        <h2>Resumen</h2>
        <table>
          <tbody>
            <tr>
              <td>Sin impuestos:</td>
              <td>${totalWithoutTaxes.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Impuestos totales:</td>
              <td>${totalTaxes.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Total en dólares:</td>
              <td>${totalWithTaxes.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Total en pesos:</td>
              <td>${totalInPesos.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ImportCalculator;
