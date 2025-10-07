import JobsForm from '../components/JobsForm';

export default function JobsPage() {

  return (
    <main>
      <section className="contact" id="jobs">
        <div className="container">
          <h2 className="en">Careers</h2>
          <h2 className="fi hidden">Työnhakijalle</h2>
          <p className="section-intro en">Fill in the form to apply. We will contact you soon.</p>
          <p className="section-intro fi hidden">Täytä lomake hakeaksesi. Otamme sinuun pian yhteyttä.</p>

          <div className="contact-content">
            <div className="contact-form">
              <JobsForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


