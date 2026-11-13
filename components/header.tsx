import Link from "next/link";
import { nav, site, whatsappHref, fullAddress } from "@/content/site";
import { Logo } from "@/components/logo";
import { ArrowRightIcon, CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

/**
 * The header is the same on every page. The menu button and the
 * "current page" highlight are handled by /public/js/site.js.
 */
export function Header() {
  return (
    <>
      <header className="header" data-header>
        <div className="wrap header__inner">
          <Logo />

          <nav className="nav" aria-label="Main">
            <ul className="nav__list">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="nav__link" data-nav-link>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <a href={site.phone.href} className="btn btn--primary header__call">
              <PhoneIcon />
              {site.phone.display}
            </a>
            <button
              type="button"
              className="menu-btn"
              aria-expanded="false"
              aria-controls="mobile-menu"
              data-menu-button
            >
              <MenuIcon className="icon-open" />
              <CloseIcon className="icon-close" />
              <span className="sr-only" data-menu-label>
                Open menu
              </span>
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className="mobile-menu" data-menu inert>
        <nav aria-label="Mobile">
          <ul className="mobile-menu__list">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="mobile-menu__link" data-nav-link>
                  {item.label}
                  <ArrowRightIcon />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="btn-row">
          <a href={site.phone.href} className="btn btn--primary">
            <PhoneIcon />
            Call {site.phone.display}
          </a>
          <a href={whatsappHref} className="btn btn--quiet" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            WhatsApp us
          </a>
        </div>
        <div className="mobile-menu__contact">
          <span>{fullAddress}</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </>
  );
}
