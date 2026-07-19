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
        These Terms and Conditions govern your access to and use of the Quitify
        mobile application, website, and related services. By using Quitify, you
        agree to these terms.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 18 years old or the age of majority in your
        jurisdiction to use Quitify. By using Quitify, you represent that you
        meet this requirement and have the legal capacity to enter into these terms.
      </p>

      <h2>2. Your account</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account
        credentials and for all activity under your account. Contact Quitify promptly if
        you suspect unauthorized access. Accounts that violate these terms may be
        suspended or terminated.
      </p>

      <h2>3. Health disclaimer</h2>
      <p>
        Quitify provides educational content, habit tracking tools, and community
        support to help you quit smoking. <strong>Quitify is not a medical device
        and does not provide medical advice, diagnosis, or treatment.</strong> Always
        consult a qualified healthcare professional before making decisions about
        quitting nicotine, especially if you have underlying health conditions or
        use medications.
      </p>
      <p>
        You use Quitify at your own risk. Quitify does not guarantee that you will
        successfully quit smoking or achieve specific health outcomes.
      </p>

      <h2>4. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use Quitify for any unlawful purpose</li>
        <li>Harass, abuse, threaten, or impersonate others</li>
        <li>Post content that is hateful, sexually explicit, violent, or misleading</li>
        <li>Share spam, malware, or unauthorized advertising</li>
        <li>Attempt to reverse engineer, scrape, or disrupt Quitify</li>
        <li>Circumvent security, moderation, or access controls</li>
        <li>Use another person&apos;s account without permission</li>
      </ul>
      <p>
        Content may be removed, features restricted, or accounts terminated when
        these rules or applicable law are violated.
      </p>

      <h2>5. Community content</h2>
      <p>
        You retain ownership of content you submit. By posting content in Quitify,
        you grant Quitify a non exclusive, worldwide, royalty free license to host,
        display, reproduce, and distribute that content solely to operate and
        improve Quitify.
      </p>
      <p>
        You represent that you have the rights to share any content you post and
        that it does not infringe the rights of others.
      </p>

      <h2>6. Intellectual property</h2>
      <p>
        The Quitify name, logo, app design, plan content, and other materials are
        owned by Quitify or its licensors and protected by intellectual property laws.
        You may not copy, modify, or distribute Quitify materials without prior written
        permission, except as allowed by these terms or applicable law.
      </p>

      <h2>7. Subscriptions and payments</h2>
      <p>
        Some features may be offered for free while others require payment or a
        subscription. If paid features are offered, pricing, billing cycles, and
        cancellation terms will be shown before purchase. Payments are processed by
        third party app stores or payment providers subject to their terms.
      </p>

      <h2>8. Third party services</h2>
      <p>
        Quitify may integrate with third party services such as Google sign in,
        push notification providers, or app stores. Your use of those services is
        governed by their own terms and privacy policies.
      </p>

      <h2>9. Privacy</h2>
      <p>
        The collection and use of personal information is described in the{" "}
        <Link href="/privacy">Privacy Policy</Link>, which is incorporated into
        these terms by reference.
      </p>

      <h2>10. Disclaimers</h2>
      <p>
        QUITIFY IS PROVIDED AS IS AND AS AVAILABLE WITHOUT WARRANTIES OF ANY KIND,
        WHETHER EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE, AND NON INFRINGEMENT. QUITIFY DOES NOT
        WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR FREE, OR SECURE.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, QUITIFY AND ITS AFFILIATES, OFFICERS,
        EMPLOYEES, AND PARTNERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
        SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA,
        OR GOODWILL, ARISING FROM YOUR USE OF QUITIFY.
      </p>
      <p>
        QUITIFY&apos;S TOTAL LIABILITY FOR ANY CLAIM WILL NOT EXCEED THE GREATER OF
        THE AMOUNT YOU PAID QUITIFY IN THE TWELVE MONTHS BEFORE THE CLAIM OR USD $50.
      </p>

      <h2>12. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Quitify from claims, damages, losses,
        and expenses including reasonable legal fees arising from your use of Quitify,
        your content, or your violation of these terms.
      </p>

      <h2>13. Termination</h2>
      <p>
        You may stop using Quitify at any time. Access may be suspended or terminated
        if you violate these terms or if Quitify is discontinued. Sections that by
        nature should survive termination will remain in effect.
      </p>

      <h2>14. Changes to these terms</h2>
      <p>
        These terms may be updated from time to time. The updated version will be
        posted on this page with a revised last updated date. Material changes may
        also be communicated through the app. Continued use after changes means you
        accept the revised terms.
      </p>

      <h2>15. Governing law</h2>
      <p>
        These terms are governed by the laws applicable in the jurisdiction where
        Quitify is established, without regard to conflict of law principles. Any
        disputes will be resolved in the courts of that jurisdiction, unless
        mandatory consumer protection laws in your country require otherwise.
      </p>

      <h2>16. Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href="mailto:lahcini.moaa@gmail.com">lahcini.moaa@gmail.com</a>.
      </p>
    </LegalPageLayout>
  );
}
