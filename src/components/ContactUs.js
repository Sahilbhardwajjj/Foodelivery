const ContactUs = () => {
  return (
    <div
      className="about-container"
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "2rem",
        background: "#fff0f2",
        borderRadius: "16px",
        boxShadow: "0 4px 16px rgba(255,46,99,0.07)",
      }}
    >
      <h1 style={{ color: "#ff2e63" }}>Contact Us</h1>
      <p>
        We'd love to hear from you! Whether you have a question about our menu,
        reservations, or anything else, our team is ready to answer all your
        questions.
      </p>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          placeholder="Your Name"
          style={{
            padding: "0.7rem 1rem",
            borderRadius: "8px",
            border: "1.5px solid #ff4d6d",
            fontSize: "1rem",
          }}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          style={{
            padding: "0.7rem 1rem",
            borderRadius: "8px",
            border: "1.5px solid #ff4d6d",
            fontSize: "1rem",
          }}
          required
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          style={{
            padding: "0.7rem 1rem",
            borderRadius: "8px",
            border: "1.5px solid #ff4d6d",
            fontSize: "1rem",
            resize: "vertical",
          }}
          required
        />
        <button
          type="submit"
          style={{
            padding: "0.7rem 1.2rem",
            backgroundColor: "#ff2e63",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background 0.2s, transform 0.2s",
            boxShadow: "0 2px 8px rgba(255, 46, 99, 0.08)",
          }}
        >
          Send Message
        </button>
      </form>
      <div style={{ marginTop: "2rem" }}>
        <strong>Address:</strong> 123 Foodie Lane, Koregaon Park, Pune
        <br />
        <strong>Phone:</strong> +91 98765 43210
        <br />
        <strong>Email:</strong> info@spicesymphony.com
      </div>
    </div>
  );
};

export default ContactUs;
