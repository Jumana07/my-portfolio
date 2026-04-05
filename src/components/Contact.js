function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" /><br />
        <input type="email" placeholder="Your Email" /><br />
        <textarea placeholder="Message" /><br />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
