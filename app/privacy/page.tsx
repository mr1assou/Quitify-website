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
        Quitify operates the Quitify mobile application and this website. This
        Privacy Policy explains how personal information is collected, used,
        disclosed, and safeguarded when you use Quitify services.
      </p>

      <h2>1. Information collected</h2>
      <h3>Account information</h3>
      <p>
        When you create an account, Quitify may collect your email address,
        username, profile photo, and authentication details when you sign in with
        Google or email.
      </p>

      <h3>Profile and quit journey data</h3>
      <p>
        To personalize your experience, Quitify collects information you provide
        during onboarding and in the app, such as:
      </p>
      <ul>
        <li>Reasons for quitting and motivation level</li>
        <li>Quit date and smoking habits like cigarettes per day and pack cost</li>
        <li>Country and basic profile details you choose to share</li>
        <li>Progress through your quit plan, missions, streaks, and milestones</li>
        <li>Notes, posts, comments, and other community content you create</li>
      </ul>

      <h3>Usage and device data</h3>
      <p>
        Certain technical information is collected automatically, including device
        type, operating system, app version, time zone, and general usage patterns
        such as features used and session duration to improve the app and fix issues.
      </p>

      <h3>Communications</h3>
      <p>
        If you use voice or video features, connection data required to enable
        those calls is processed. Calls are not recorded unless clearly stated and
        with your consent.
      </p>

      <h2>2. How your information is used</h2>
      <p>Collected information is used to:</p>
      <ul>
        <li>Provide, maintain, and personalize the Quitify app</li>
        <li>Generate your quit plan, tips, and progress tracking</li>
        <li>Send notifications you opt into like reminders and milestones</li>
        <li>Enable community features and moderate content where applicable</li>
        <li>Respond to support requests and improve Quitify services</li>
        <li>Protect against fraud, abuse, and security incidents</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>3. How information is shared</h2>
      <p>
        Quitify does not sell your personal information. Information may be shared
        only in these situations:
      </p>
      <ul>
        <li>
          <strong>Service providers:</strong> With trusted vendors who help
          operate the app through hosting, analytics, authentication, and push
          notifications, under contractual obligations to protect your data.
        </li>
        <li>
          <strong>Community visibility:</strong> Content you post publicly in the
          app such as posts or profile information you choose to display may be
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
        Your information is retained for as long as your account is active or as
        needed to provide services, comply with legal obligations, resolve
        disputes, and enforce agreements. You may request deletion of your account
        and associated data by contacting Quitify.
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
        Reasonable administrative, technical, and organizational measures are used
        to protect your information. No method of transmission or storage is 100%
        secure, and absolute security cannot be guaranteed.
      </p>

      <h2>7. Children&apos;s privacy</h2>
      <p>
        Quitify is not intended for users under the age of 18 or the minimum age
        required in your jurisdiction. Personal information from children is not
        knowingly collected. If you believe a child has provided data to Quitify,
        please get in touch so it can be deleted.
      </p>

      <h2>8. International transfers</h2>
      <p>
        Your information may be processed in countries other than your own. Where
        required, appropriate safeguards are used for cross border data transfers.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        This Privacy Policy may be updated from time to time. The updated version
        will be posted on this page with a revised last updated date. Continued use
        of Quitify after changes means you accept the revised policy.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about this Privacy Policy or your data can be sent to{" "}
        <a href="mailto:privacy@quitify.app">privacy@quitify.app</a>.
      </p>
      <p>
        See also the{" "}
        <Link href="/terms">Terms &amp; Conditions</Link>.
      </p>
    </LegalPageLayout>
  );
}
