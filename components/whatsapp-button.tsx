import { whatsappHref } from "@/content/site";
import { WhatsAppIcon } from "@/components/icons";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      className="wa-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon />
      <span className="wa-float__label" aria-hidden="true">
        WhatsApp us
      </span>
    </a>
  );
}
