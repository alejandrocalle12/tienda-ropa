import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem", color: "#333" }}>Bienvenido a <span style={{ color: "#D81B60" }}>Teji2Fera</span></h1>
      <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
        Descubre una colección única de ropa en tendencia.  
      </p>
      
      <img 
        src="/img/tejis2fera.jpg" 
        alt="Moda tejida" 
        style={{ width: "100%", maxWidth: "600px", margin: "2rem auto", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }} 
      />

      <p style={{ fontSize: "1rem", marginTop: "1rem", color: "#555" }}>
        Estilo joven y casual, tenemos todo para complementar tu estilo único.
      </p>

      <Link to="/productos">
        <button 
          style={{
            marginTop: "2rem",
            padding: "1rem 2rem",
            fontSize: "1rem",
            backgroundColor: "#D81B60",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s"
          }}
        >
          Explorar Colección
        </button>
      </Link>
    </div>
  );
}

export default Home;
