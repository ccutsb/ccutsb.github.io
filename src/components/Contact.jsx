import { useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import SectionHeading from "./SectionHeading";
import styles from "./Contact.module.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdalebor";

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const serviceOptions = [
    { value: "Mantencion / Soporte pyme", label: t.contact.form.options.support },
    { value: "Desarrollo web / backend", label: t.contact.form.options.web },
    { value: "Automatizacion", label: t.contact.form.options.automation },
    { value: "Consultoria", label: t.contact.form.options.consulting },
    { value: "Otro", label: t.contact.form.options.other },
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto">
      <SectionHeading title={t.contact.title} sub={t.contact.sub} />

      <div className={styles.layout}>
        <aside className={styles.info}>
          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}># {t.contact.emailLabel}</h3>
            <a href="mailto:cristiancortesb@icloud.com" className={styles.infoLink}>
              cristiancortesb@icloud.com
            </a>
          </div>

          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}># {t.contact.locationLabel}</h3>
            <p className={styles.infoText}>Santiago, Chile 🇨🇱</p>
          </div>

          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}># {t.contact.socialTitle}</h3>
            <div className={styles.social}>
              <a
                href="https://github.com/ccutsb"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoLink}
              >
                [GitHub]
              </a>
              <a
                href="https://www.linkedin.com/in/ccortesbustamante/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoLink}
              >
                [LinkedIn]
              </a>
            </div>
          </div>
        </aside>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="nombre" className={styles.label}>
                {t.contact.form.name} <span aria-hidden="true">*</span>
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                className={styles.input}
                autoComplete="name"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                {t.contact.form.email} <span aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={styles.input}
                autoComplete="email"
              />
            </div>
          </div>

          <fieldset className={styles.fieldset}>
            <legend className={styles.label}>{t.contact.form.service}</legend>
            <div className={styles.radioGrid}>
              {serviceOptions.map((opt, i) => (
                <label key={opt.value} className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="servicio"
                    value={opt.value}
                    defaultChecked={i === 0}
                    className={styles.radio}
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className={styles.field}>
            <label htmlFor="mensaje" className={styles.label}>
              {t.contact.form.message} <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              required
              className={styles.input}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? t.contact.form.sending : t.contact.form.submit}
          </button>

          <p className={styles.status} role="status" aria-live="polite">
            {status === "success" && (
              <span className={styles.statusOk}>{t.contact.form.success}</span>
            )}
            {status === "error" && (
              <span className={styles.statusError}>{t.contact.form.error}</span>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
