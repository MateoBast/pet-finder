import React, { useState } from 'react';
import "./ReportarModal.css";

const ReportarModal = ({ petName, petId, onClose, onReport }) => {
  const [nombre, setNombre] = useState(''); // Estado para el nombre
  const [telefono, setTelefono] = useState('');
  const [dondeLoViste, setDondeLoViste] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();

  const reportData = {
    petId,
    reporterName: nombre, // Agregar nombre aquí
    reporterPhone: telefono,
    location: dondeLoViste,
  };

  try {
    const response = await fetch('http://localhost:3000/api/reports', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reportData),
    });

    if (!response.ok) throw new Error('Error al reportar la información');

    alert('Información reportada con éxito');

    // Limpiar campos
    setNombre('');
    setTelefono('');
    setDondeLoViste('');

    onClose();
  } catch (error) {
    alert('Hubo un error al reportar la información. Intenta nuevamente.');
  }
};


  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Reportar info de {petName}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            NOMBRE
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </label>
          <label>
            TELÉFONO
            <input
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </label>
          <label>
            ¿DÓNDE LO VISTE?
            <input
              type="text"
              value={dondeLoViste}
              onChange={(e) => setDondeLoViste(e.target.value)}
              required
            />
          </label>
          <button type="submit">Enviar información</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default ReportarModal;
