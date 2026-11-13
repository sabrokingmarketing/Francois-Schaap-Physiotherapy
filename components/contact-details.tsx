import { site, whatsappHref, mapsHref, fullAddress } from "@/content/site";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

export function ContactDetails() {
  return (
    <ul className="contact-list">
      <li className="contact-item">
        <span className="contact-item__icon" aria-hidden="true">
          <PhoneIcon />
        </span>
        <span>
          <span className="contact-item__label">Phone</span>
          <br />
          <a className="contact-item__value" href={site.phone.href}>
            {site.phone.display}
          </a>
        </span>
      </li>
      <li className="contact-item">
        <span className="contact-item__icon" aria-hidden="true">
          <WhatsAppIcon />
        </span>
        <span>
          <span className="contact-item__label">WhatsApp</span>
          <br />
          <a className="contact-item__value" href={whatsappHref} target="_blank" rel="noopener noreferrer">
            Send us a message
          </a>
        </span>
      </li>
      <li className="contact-item">
        <span className="contact-item__icon" aria-hidden="true">
          <MailIcon />
        </span>
        <span>
          <span className="contact-item__label">Email</span>
          <br />
          <a className="contact-item__value" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </span>
      </li>
      <li className="contact-item">
        <span className="contact-item__icon" aria-hidden="true">
          <MapPinIcon />
        </span>
        <span>
          <span className="contact-item__label">Address</span>
          <br />
          <a className="contact-item__value" href={mapsHref} target="_blank" rel="noopener noreferrer">
            {fullAddress}
          </a>
        </span>
      </li>
      <li className="contact-item">
        <span className="contact-item__icon" aria-hidden="true">
          <ClockIcon />
        </span>
        <span>
          <span className="contact-item__label">Appointment times</span>
          <br />
          {site.hours.length > 0 ? (
            <span className="hours">
              {site.hours.map((h) => (
                <span key={h.days} className="contact-item__value">
                  {h.days}: {h.times}
                </span>
              ))}
            </span>
          ) : (
            <span className="contact-item__value">Phone us for appointment times</span>
          )}
        </span>
      </li>
    </ul>
  );
}
