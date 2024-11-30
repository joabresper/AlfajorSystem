const ABM = () => {
    const styles = {
        container: {
          width: '100vw',
          height: '100vh',
          position: 'relative',
          background: '#E6D9B6',
        },
        imageSmall: {
          width: 140,
          height: 114,
          position: 'absolute',
          left: 0,
          bottom: 0,
        },
        imageLarge: {
          width: '58%', // Escala según el tamaño de la pantalla
          height: '100%',
          position: 'absolute',
          left: '21%',
          top: 0,
          opacity: 0.25,
        },
        darkBox: {
          width: '78%', // Escala según la pantalla
          height: '28%',
          position: 'absolute',
          left: '11%',
          top: '50%',
          background: '#41301C',
          borderRadius: '8px',
        },
        card: {
          width: '12%',
          height: '20%',
          padding: '12px',
          position: 'absolute',
          background: '#CF7C20',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid #2C2C2C',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          display: 'inline-flex',
          textAlign: 'center',
          color: '#F5F5F5',
          fontSize: '1.2rem',
          fontFamily: 'Roboto',
          fontWeight: '400',
          lineHeight: '1.4rem',
          wordWrap: 'break-word',
        },
        greeting: {
          width: '38%',
          height: 'auto',
          position: 'absolute',
          left: '31%',
          top: '22%',
          textAlign: 'center',
          color: 'black',
          fontSize: '2.5rem',
          fontFamily: 'Inter',
          fontWeight: '700',
          lineHeight: '1.2',
          wordWrap: 'break-word',
        },
      };
    
      return (
        <div style={styles.container}>
          <img
            style={styles.imageSmall}
            src="public/simbolos y alfajores/Alfajorchico.png"
            alt="Small placeholder"
          />
          <img
            style={styles.imageLarge}
            src="public/simbolos y alfajores/alfactory.png"
            alt="Large placeholder"
          />
          <div style={styles.darkBox}></div>
          <div style={{ ...styles.card, left: '15%', top: '55%' }}>
            <div>LISTA <br />CLIENTES</div>
          </div>
          <div style={{ ...styles.card, left: '44%', top: '55%' }}>
            <div>ABM <br />USUARIOS</div>
          </div>
          <div style={{ ...styles.card, left: '73%', top: '55%' }}>
            <div>LISTA <br />VEHÍCULOS</div>
          </div>
          <div style={styles.greeting}>¡Hola Gerente!</div>
        </div>
      );
    };

export default ABM;