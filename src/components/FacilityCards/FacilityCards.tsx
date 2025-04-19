import React from 'react';

function InstallationDetails() {
  return (
    <div style={{
      backgroundColor: '#DEE3E9',
      padding: '20px',
      borderRadius: '10px',
      fontFamily: 'Arial, sans-serif',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '40px',
      width: '100%',
      maxWidth: '900px',
      margin: '0 auto'
    }}>

      
      <div>
        <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Nombre de la empresa</p>
        <p style={{ marginBottom: '10px' }}>Nombre del vendedor</p>
        <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Fecha programada de instalación</p>
        <p style={{ marginBottom: '10px' }}>dd/mm/yyy</p>
        <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Precio:</p>
        <p>--- MXN</p>
      </div>

      
      <div>
        <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Ubicación</p>
        <p style={{ marginBottom: '10px' }}>Ubicación general (Ciudad o colonia)</p>
        <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Estado actual</p>
        <p>(Pendiente/ En proceso/ Necesita revisión)</p>
      </div>

      
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
        <button style={{
          backgroundColor: '#257E84',
          color: 'white',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '25px',
          marginBottom: '10px',
          cursor: 'pointer'
        }}>
          Marcar instalación como terminada
        </button>
        <button style={{
          backgroundColor: '#C91212',
          color: 'white',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '25px',
          cursor: 'pointer'
        }}>
          Cancelar instalación
        </button>
      </div>
    </div>
  );
}

export default InstallationDetails;
