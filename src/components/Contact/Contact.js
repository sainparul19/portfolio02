import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mu8vuud",
        "template_ckj8zon",
        e.target,
        "TSxKF5rMSfHzYGmJp"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div
      className="container border"
      style={{
        marginTop: "50px",
        width: "70%",
        textAlign: "center",
        margin: "0 auto",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h2 style={{ marginTop: "25px" }}>Contact Form</h2>
      <form
        className="row"
        style={{ margin: "25px 50px 75px", width: "70%" }}
        onSubmit={sendEmail}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          style={{ margin: "10px" }}
        />

        <label>Email</label>
        <input
          type="email"
          name="user_email"
          className="form-control"
          style={{ margin: "10px" }}
        />

        <label>Message</label>
        <textarea
          name="message"
          rows="4"
          className="form-control"
          style={{ margin: "10px" }}
        />
        <input
          type="submit"
          value="Send"
          className="form-control btn btn-primary"
          style={{ margin: "10px" }}
        />
      </form>
    </div>
  );
};

export default Contact;
