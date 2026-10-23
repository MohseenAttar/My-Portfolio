import ContactForm from './contact/ContactForm.jsx';
import ContactInfo from './contact/ContactInfo.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="max-w-content mx-auto px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <SectionHeading
          title="Contact"
          subtitle="Open to full-time roles and freelance projects. Send a message and let's talk."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
