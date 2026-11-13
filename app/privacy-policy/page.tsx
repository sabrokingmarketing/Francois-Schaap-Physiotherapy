import type { Metadata } from "next";
import { seo, site, fullAddress } from "@/content/site";
import { PageIntro } from "@/components/page-intro";
import { ClosingCta } from "@/components/closing-cta";

export const metadata: Metadata = {
  title: seo.privacy.title,
  description: seo.privacy.description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: { title: seo.privacy.title, description: seo.privacy.description, url: "/privacy-policy" },
};

// TODO: ask your professional adviser to check this policy before going live,
// and confirm that Francois Schaap is the Information Officer.

export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="Privacy" title="Privacy Policy">
        <p className="lead">
          How we collect, use and protect your personal information under the Protection of Personal
          Information Act, 2013 (POPIA).
        </p>
      </PageIntro>

      <section className="section section--tight-top">
        <div className="wrap">
          <div className="prose">
            <h2>Who We Are</h2>
            <p>
              {site.name} is a physiotherapy practice at {fullAddress}. For this policy, we are the
              responsible party for the personal information you share with us. Francois Schaap is
              our Information Officer.
            </p>

            <h2>What We Collect</h2>
            <p>This website has no forms, logins or tracking tools. We only receive personal
              information when you contact us yourself, for example:</p>
            <ul>
              <li>your name and contact details, when you phone, WhatsApp or email us</li>
              <li>information about your health and treatment, when you become a patient</li>
            </ul>

            <h2>How We Use It</h2>
            <p>
              We use your information only to reply to you, book and manage appointments, and give you
              safe, appropriate physiotherapy care. Health information is special personal information
              under POPIA and is kept confidential, in line with the rules of the Health Professions
              Council of South Africa (HPCSA).
            </p>

            <h2>Sharing Your Information</h2>
            <p>
              We do not sell your information. We only share it when you agree to it, when it is needed
              for your care (for example, with your doctor), or when the law requires it.
            </p>

            <h2>Keeping It Safe</h2>
            <p>
              We take reasonable steps to keep your information secure and only keep it for as long as
              we need it, or as long as the law requires.
            </p>

            <h2>Your Rights</h2>
            <p>Under POPIA you have the right to:</p>
            <ul>
              <li>ask what personal information we hold about you</li>
              <li>ask us to correct or delete your information</li>
              <li>object to us using your information</li>
              <li>
                complain to the Information Regulator of South Africa (inforegulator.org.za) if you
                believe we have not protected your information
              </li>
            </ul>

            <h2>WhatsApp, Email And Maps</h2>
            <p>
              When you use the WhatsApp, email or Google Maps links on this site, you leave our website
              and that service&apos;s own privacy policy applies.
            </p>

            <h2>Contact Us About Privacy</h2>
            <p>
              Phone <a href={site.phone.href}>{site.phone.display}</a> or email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
