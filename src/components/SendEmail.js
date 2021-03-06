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

    emailjs
      .sendForm(
        "service_96h4nxe",
        "template_sa4whz9",
        e.target,
        "user_Vlc3MZb3VjmdaXwvHCdfn"
      )
      .then(
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
      <form className="send-email text-purple-700" onSubmit={onSubmit}>
        <div className="form-control mb-2">
          <label className="mr-2">Name:</label>
          <input
            type="text"
            name="user_name"
            placeholder="Your Full Name"
            value={user_name}
            onChange={(e) => setName(e.target.value)}
            className="text-gray-700 rounded-md border border-solid border-purple-700"
          />
        </div>
        <div className="form-control mb-2">
          <label className="mr-2">Email:</label>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email Address"
            value={user_email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-gray-700 rounded-md border border-solid border-purple-700"
          />
        </div>
        <div className="form-control h-40 mb-2">
          <textarea
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMsg(e.target.value)}
            className="w-full h-full text-gray-700 rounded-lg border border-solid border-purple-700"
          />
        </div>

        <input
          type="submit"
          value="Send Email"
          className="btn py-2 px-4 my-1 rounded-lg border border-purple-700 shadow-lg font-medium bg-purple-50 text-purple-700 hover:bg-purple-700 hover:text-white hover:border-gray-300"
        />
      </form>
    </div>
  );
};

export default SendEmail;
