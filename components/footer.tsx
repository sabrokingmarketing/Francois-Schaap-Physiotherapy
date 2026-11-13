import Link from "next/link";
import { nav, serviceGroups, site, fullAddress, mapsHref, whatsappHref } from "@/content/site";
import { Logo } from "@/components/logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo />
            <p>
              Personalised, evidence-based physiotherapy in Rant-en-Dal, Krugersdorp. Registered
              with the HPCSA.
            </p>
          </div>

          <div className="footer__col">
            <p className="footer__title">Pages</p>
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/privacy-policy">Privacy policy</Link>
          </div>

          <div className="footer__col">
            <p className="footer__title">Services</p>
            {serviceGroups.map((g) => (
              <Link key={g.id} href={`/services#${g.id}`}>
                {g.short}
              </Link>
            ))}
          </div>

          <div className="footer__col">
            <p className="footer__title">Contact</p>
            <a href={site.phone.href}>{site.phone.display}</a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              WhatsApp us
            </a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={mapsHref} target="_blank" rel="noopener noreferrer">
              {fullAddress}
            </a>
            {site.social.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {site.name}
          </span>
          <span>
            Your information is protected under POPIA. <Link href="/privacy-policy">Read our privacy policy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
