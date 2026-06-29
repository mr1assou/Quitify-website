import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using the Quitify app and services.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Terms & Conditions"
      lastUpdated="June 28, 2026"
    >
      <p>
        These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of
        the Quitify mobile application, website, and related services
        (collectively, the &quot;Service&quot;) operated by Quitify (&quot;we,&quot;
        &quot;us,&quot; or &quot;our&quot;). By using the Service, you agree to these
        Terms.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 18 years old (or the age of majority in your
        jurisdiction) to use Quitify. By using the Service, you represent that you
        meet this requirement and have the legal capacity to enter into these Terms.
      </p>

      <h2>2. Your account</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account
        credentials and for all activity under your account. Notify us promptly if
        you suspect unauthorized access. We may suspend or terminate accounts that
        violate these Terms.
      </p>

      <h2>3. Health disclaimer</h2>
      <p>
        Quitify provides educational content, habit-tracking tools, and community
        support to help you quit smoking. <strong>Quitify is not a medical device
        and does not provide medical advice, diagnosis, or treatment.</strong> Always
        consult a qualified healthcare professional before making decisions about
        quitting nicotine, especially if you have underlying health conditions or
        use medications.
      </p>
      <p>
        You use the Service at your own risk. We do not guarantee that you will
        successfully quit smoking or achieve specific health outcomes.
      </p>

      <h2>4. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful purpose</li>
        <li>Harass, abuse, threaten, or impersonate others</li>
        <li>Post content that is hateful, sexually explicit, violent, or misleading</li>
        <li>Share spam, malware, or unauthorized advertising</li>
        <li>Attempt to reverse engineer, scrape, or disrupt the Service</li>
        <li>Circumvent security, moderation, or access controls</li>
        <li>Use another person&apos;s account without permission</li>
      </ul>
      <p>
        We may remove content, restrict features, or terminate accounts that violate
        these rules or applicable law.
      </p>

      <h2>5. Community content</h2>
      <p>
        You retain ownership of content you submit. By posting content in Quitify,
        you grant us a non-exclusive, worldwide, royalty-free license to host,
        display, reproduce, and distribute that content solely to operate and
        improve the Service.
      </p>
      <p>
        You represent that you have the rights to share any content you post and
        that it does not infringe the rights of others.
      </p>

      <h2>6. Intellectual property</h2>
      <p>
        The Quitify name, logo, app design, plan content, and other materials are
        owned by us or our licensors and protected by intellectual property laws.
        You may not copy, modify, or distribute our materials without prior written
        permission, except as allowed by these Terms or applicable law.
      </p>

      <h2>7. Subscriptions and payments</h2>
      <p>
        Some features may be offered for free while others require payment or a
        subscription. If paid features are offered, pricing, billing cycles, and
        cancellation terms will be shown before purchase. Payments are processed by
        third-party app stores or payment providers subject to their terms.
      </p>

      <h2>8. Third-party services</h2>
      <p>
        The Service may integrate with third-party services (such as Google Sign-In,
        push notification providers, or app stores). Your use of those services is
        governed by their own terms and privacy policies.
      </p>

      <h2>9. Privacy</h2>
      <p>
        Our collection and use of personal information is described in our{" "}
        <Link href="/privacy">Privacy Policy</Link>, which is incorporated into
        these Terms by reference.
      </p>

      <h2>10. Disclaimers</h2>
      <p>
        THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT
        WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING IMPLIED
        WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
        NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED,
        ERROR-FREE, OR SECURE.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, QUITIFY AND ITS AFFILIATES, OFFICERS,
        EMPLOYEES, AND PARTNERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
        SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA,
        OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICE.
      </p>
      <p>
        OUR TOTAL LIABILITY FOR ANY CLAIM RELATING TO THE SERVICE WILL NOT EXCEED
        THE GREATER OF (A) THE AMOUNT YOU PAID US IN THE TWELVE MONTHS BEFORE THE
        CLAIM OR (B) USD $50.
      </p>

      <h2>12. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Quitify from claims, damages, losses,
        and expenses (including reasonable legal fees) arising from your use of the
        Service, your content, or your violation of these Terms.
      </p>

      <h2>13. Termination</h2>
      <p>
        You may stop using the Service at any time. We may suspend or terminate
        access if you violate these Terms or if we discontinue the Service. Sections
        that by nature should survive termination will remain in effect.
      </p>

      <h2>14. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. We will post the updated version
        on this page and update the &quot;Last updated&quot; date. Material changes
        may also be communicated through the app. Continued use after changes means
        you accept the revised Terms.
      </p>

      <h2>15. Governing law</h2>
      <p>
        These Terms are governed by the laws applicable in the jurisdiction where
        Quitify is established, without regard to conflict-of-law principles. Any
        disputes will be resolved in the courts of that jurisdiction, unless
        mandatory consumer protection laws in your country require otherwise.
      </p>

      <h2>16. Contact us</h2>
      <p>
        Questions about these Terms? Contact us at{" "}
        <a href="mailto:legal@quitify.app">legal@quitify.app</a>.
      </p>
    </LegalPageLayout>
  );
}
