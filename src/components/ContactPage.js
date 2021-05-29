import SendEmail from "./SendEmail"

const ContactPage = () => {
  const sendEmail = () => {

  }
  
  return (
    <div className="contact-page">
      <h3>CONTACT</h3>

      <section class="contact-main">
        <div class="contact-info">
          <div class="sns">
            <a href="#" class="btn sns-btn">
              <i class="fab fa-github"></i>
            </a>
            <a href="#" class="btn sns-btn">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>

          <p class="fullname">Kris Lui</p>
          <p>Email: krissolui@gmail.com</p>
          <p>Phone: +(852)6088 9331</p>
        </div>

        <SendEmail onSend={sendEmail} />
      </section>
    </div>
  );
};

export default ContactPage;
