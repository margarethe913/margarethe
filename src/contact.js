import './style/index.css';
import './style/contact.css';
import Header from './components/header'

function Contact() {
  return (
    <>
    <Header />
    <section id="contact">
    <h1>Get in touch! Send me a message: </h1>
    <form action="https://formspree.io/f/xbjebzew" method="POST">
            <label for="Name" class="fcf-label">Your name</label>
            <div class="fcf-input-group">
                <input type="text" id="Name" name="Name" class="fcf-form-control" required />
            </div>
        <div class="fcf-form-group">
            <label for="Email" class="fcf-label">Your email address</label>
            <div class="fcf-input-group">
                <input type="email" id="Email" name="Email" class="fcf-form-control" required />
            </div>
        </div>
        <div class="fcf-form-group">
            <label for="Message" class="fcf-label">Your message</label>
            <div class="fcf-input-group">
                <textarea id="Message" name="Message" class="fcf-form-control" rows="6" maxlength="3000" required></textarea>
            </div>
        </div>
        <div class="fcf-form-group">
            <button type="submit" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send</button>
        </div>
    </form>
    </section>
    </>
  );
}

export default Contact;