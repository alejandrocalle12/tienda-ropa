function Contact() {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", color: "#D81B60" }}>Contáctanos</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        ¿Tienes alguna duda, pedido personalizado o comentario? Estamos aquí para ayudarte.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center", justifyContent: "center" }}>
        {/* Imagen */}
        <img
          src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
          alt="Contacto"
          style={{ width: "300px", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}
        />

        {/* Formulario */}
        <form style={{ flex: 1, minWidth: "280px" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label>Nombre:</label><br />
            <input type="text" placeholder="Tu nombre" style={inputStyle} />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>Correo:</label><br />
            <input type="email" placeholder="tu@correo.com" style={inputStyle} />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>Mensaje:</label><br />
            <textarea placeholder="Escribe tu mensaje..." style={{ ...inputStyle, height: "100px" }} />
          </div>
          <button
            type="submit"
            style={{
              padding: "0.7rem 1.5rem",
              backgroundColor: "#D81B60",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  border: "1px solid #ccc",
  borderRadius: "6px",
  boxSizing: "border-box"
};

export default Contact;
