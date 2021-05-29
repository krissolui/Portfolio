import { useState } from "react";
import emailjs from "emailjs-com";

const SendEmail = () => {
  const [user_name, setName] = useState("");
  const [user_email, setEmail] = useState("");
  const [message, setMsg] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!user_name) {
      alert("Please tell me your name");
      return;
    }
    if (!user_email) {
      alert("Please tell me your email");
      return;
    }
    if (!message) {
      alert("Message field is empty!");
      return;
    }

    emailjs.sendForm("service_96h4nxe", "template_sa4whz9", e.target, "user_Vlc3MZb3VjmdaXwvHCdfn").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    setName("");
    setEmail("");
    setMsg("");
  };
  return (
    <div className="email-form">
      <form className="send-email" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            value={user_name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            value={user_email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <textarea name="message" value={message} onChange={(e) => setMsg(e.target.value)} />
        </div>

        <input type="submit" value="Send Email" className="btn" />
      </form>
    </div>
  );
};

export default SendEmail;
