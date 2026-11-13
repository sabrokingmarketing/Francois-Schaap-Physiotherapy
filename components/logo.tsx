import Link from "next/link";
import { logoSrc, site } from "@/content/site";

/**
 * Text logo shown until the real logo is added in content/site.ts (logoSrc).
 */
export function Logo() {
  return (
    <Link href="/" className="logo" aria-label={`${site.name}, home`}>
      {logoSrc ? (
        // A plain <img> keeps any logo file (PNG or SVG) sharp at every size.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logoSrc} alt="" width={160} height={44} />
      ) : (
        <>
          <span className="logo__mark" aria-hidden="true">
            FS
          </span>
          <span className="logo__text" aria-hidden="true">
            <span className="logo__name">Francois Schaap</span>
            <span className="logo__sub">Physiotherapy</span>
          </span>
        </>
      )}
    </Link>
  );
}
