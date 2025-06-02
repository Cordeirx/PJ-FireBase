import styles from '../styles/Layout.module.css';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#121212',
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      gap: '2rem',
    }}>
      <h1 style={{ marginBottom: '2rem', textAlign: 'center', fontWeight: 'bold' }}>
        Faça login ou se cadastre para continuar
      </h1>
      
      <div style={{
        display: 'flex',
        gap: '2rem',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '700px',
        flexWrap: 'nowrap', // aqui força lado a lado sem quebra
      }}>
        {/* Card Login */}
        <div style={{
          backgroundColor: '#1E1E1E',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
          flex: '1 1 300px',
          color: '#FFFFFF',
          textAlign: 'center',
          minWidth: '300px',  // garante largura mínima
        }}>
          <h2 style={{ marginBottom: '1rem' }}>Login</h2>
          <p>Acesse sua conta para continuar.</p>
          <a
            href="/Login"
            style={{
              marginTop: '1rem',
              display: 'inline-block',
              padding: '0.7rem 1.5rem',
              borderRadius: '4px',
              backgroundColor: '#FFFFFF',
              color: '#121212',
              fontWeight: 'bold',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'background 0.3s',
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#E0E0E0'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#FFFFFF'}
          >
            Ir para Login
          </a>
        </div>

        {/* Card Cadastro */}
        <div style={{
          backgroundColor: '#1E1E1E',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
          flex: '1 1 300px',
          color: '#FFFFFF',
          textAlign: 'center',
          minWidth: '300px',
        }}>
          <h2 style={{ marginBottom: '1rem' }}>Cadastro</h2>
          <p>Crie uma nova conta para começar.</p>
          <a
            href="/Register"
            style={{
              marginTop: '1rem',
              display: 'inline-block',
              padding: '0.7rem 1.5rem',
              borderRadius: '4px',
              backgroundColor: '#FFFFFF',
              color: '#121212',
              fontWeight: 'bold',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'background 0.3s',
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#E0E0E0'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#FFFFFF'}
          >
            Ir para Cadastro
          </a>
        </div>
      </div>
    </div>
  );
}



