import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Quitify collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="June 28, 2026"
    >
      <p>
        Quitify (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the Quitify mobile
        application and this website. This Privacy Policy explains how we collect,
        use, disclose, and safeguard your information when you use our services.
      </p>

      <h2>1. Information we collect</h2>
      <h3>Account information</h3>
      <p>
        When you create an account, we may collect your email address, username,
        profile photo, and authentication details (for example, when you sign in
        with Google or email).
      </p>

      <h3>Profile and quit journey data</h3>
      <p>
        To personalize your experience, we collect information you provide during
        onboarding and in the app, such as:
      </p>
      <ul>
        <li>Reasons for quitting and motivation level</li>
        <li>Quit date and smoking habits (e.g. cigarettes per day, pack cost)</li>
        <li>Country and basic profile details you choose to share</li>
        <li>Progress through your quit plan, missions, streaks, and milestones</li>
        <li>Notes, posts, comments, and other community content you create</li>
      </ul>

      <h3>Usage and device data</h3>
      <p>
        We automatically collect certain technical information, including device
        type, operating system, app version, time zone, and general usage patterns
        (such as features used and session duration) to improve the app and fix
        issues.
      </p>

      <h3>Communications</h3>
      <p>
        If you use voice or video features, we process connection data required to
        enable those calls. We do not record calls unless clearly stated and with
        your consent.
      </p>

      <h2>2. How we use your information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, maintain, and personalize the Quitify app</li>
        <li>Generate your quit plan, tips, and progress tracking</li>
        <li>Send notifications you opt into (e.g. reminders and milestones)</li>
        <li>Enable community features and moderate content where applicable</li>
        <li>Respond to support requests and improve our services</li>
        <li>Protect against fraud, abuse, and security incidents</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>3. How we share information</h2>
      <p>
        We do not sell your personal information. We may share information only in
        these situations:
      </p>
      <ul>
        <li>
          <strong>Service providers:</strong> With trusted vendors who help us
          operate the app (hosting, analytics, authentication, push notifications),
          under contractual obligations to protect your data.
        </li>
        <li>
          <strong>Community visibility:</strong> Content you post publicly in the
          app (such as posts or profile information you choose to display) may be
          visible to other users.
        </li>
        <li>
          <strong>Legal requirements:</strong> When required by law, regulation,
          legal process, or to protect rights, safety, and security.
        </li>
        <li>
          <strong>Business transfers:</strong> In connection with a merger,
          acquisition, or sale of assets, with notice where required by law.
        </li>
      </ul>

      <h2>4. Data retention</h2>
      <p>
        We retain your information for as long as your account is active or as
        needed to provide services, comply with legal obligations, resolve
        disputes, and enforce our agreements. You may request deletion of your
        account and associated data by contacting us.
      </p>

      <h2>5. Your choices and rights</h2>
      <p>Depending on where you live, you may have the right to:</p>
      <ul>
        <li>Access, correct, or delete your personal information</li>
        <li>Object to or restrict certain processing</li>
        <li>Withdraw consent where processing is consent-based</li>
        <li>Request a copy of your data in a portable format</li>
        <li>Opt out of marketing communications</li>
      </ul>
      <p>
        You can manage notification preferences in your device settings and within
        the app where available.
      </p>

      <h2>6. Security</h2>
      <p>
        We use reasonable administrative, technical, and organizational measures to
        protect your information. No method of transmission or storage is 100%
        secure, and we cannot guarantee absolute security.
      </p>

      <h2>7. Children&apos;s privacy</h2>
      <p>
        Quitify is not intended for users under the age of 18 (or the minimum age
        required in your jurisdiction). We do not knowingly collect personal
        information from children. If you believe a child has provided us data,
        please contact us so we can delete it.
      </p>

      <h2>8. International transfers</h2>
      <p>
        Your information may be processed in countries other than your own. Where
        required, we use appropriate safeguards for cross-border data transfers.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will post the
        updated version on this page and update the &quot;Last updated&quot; date.
        Continued use of Quitify after changes means you accept the revised policy.
      </p>

      <h2>10. Contact us</h2>
      <p>
        If you have questions about this Privacy Policy or your data, contact us
        at{" "}
        <a href="mailto:privacy@quitify.app">privacy@quitify.app</a>.
      </p>
      <p>
        See also our{" "}
        <Link href="/terms">Terms &amp; Conditions</Link>.
      </p>
    </LegalPageLayout>
  );
}
