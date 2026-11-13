import { site, whatsappHref } from "@/content/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

/** The call to action that ends every page. */
export function ClosingCta({
  title = "Book Your Appointment Today",
  text = "Call the practice or send us a WhatsApp, and we will find a time that suits you.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="close" aria-labelledby="close-title">
      <div className="wrap close__grid">
        <h2 id="close-title" className="close__title">
          {title}
        </h2>
        <div className="close__side">
          <p className="muted">{text}</p>
          <a href={site.phone.href} className="close__phone">
            {site.phone.display}
          </a>
          <div className="btn-row">
            <a href={site.phone.href} className="btn btn--primary">
              <PhoneIcon />
              Call to book
            </a>
            <a href={whatsappHref} className="btn btn--quiet" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
