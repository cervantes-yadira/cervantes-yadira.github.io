import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="flex flex-btwn">
        <label for="name">Name</label>
        <input id="name" type="text" placeholder="Name"></input>
      </div>
      <div className="flex flex-btwn">
        <label for="email">Email</label>
        <input id="email" type="email" placeholder="Email"></input>
      </div>
      <div className="flex flex-btwn">
        <label for="message">Message</label>
        <textarea
          className="block"
          id="message"
          rows={6}
          placeholder="Message"
        ></textarea>
      </div>
      <div className="flex flex-end">
        <button className="form-btn" type="submit">
          Send!
        </button>
      </div>
    </form>
  );
}
