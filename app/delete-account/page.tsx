import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { COMPANY_SUPPORT_EMAIL, COMPANY_WEBSITE_URL } from "@/lib/company";

export const metadata: Metadata = {
  title: "Delete Account",
  description:
    "How to request deletion of your Quitify account and associated data.",
};

export default function DeleteAccountPage() {
  return (
    <LegalPageLayout
      eyebrow="Account"
      title="Delete your Quitify account"
      lastUpdated="July 6, 2026"
    >
      <p>
        You can request deletion of your Quitify account and the personal data
        linked to it. This page explains how to submit a request and what
        happens next.
      </p>

      <h2>How to request account deletion</h2>
      <ol>
        <li>
          Send an email from the address linked to your Quitify account to{" "}
          <a href={`mailto:${COMPANY_SUPPORT_EMAIL}`}>{COMPANY_SUPPORT_EMAIL}</a>
          {" "}(POTTY PAW LTD, the company behind Quitify).
        </li>
        <li>
          Use the subject line: <strong>Delete my Quitify account</strong>.
        </li>
        <li>
          In the message, include your Quitify username (if you have one) so we
          can locate your account quickly.
        </li>
        <li>
          We will confirm your request by email and process deletion within 30
          days.
        </li>
      </ol>

      <h2>What we delete</h2>
      <p>
        When your account is deleted, we remove or anonymize data associated with
        your account, including:
      </p>
      <ul>
        <li>Your email address, username, and profile information</li>
        <li>Habit journey data such as start date, streaks, goals, and plan progress</li>
        <li>Posts, comments, and other community content you created</li>
        <li>Chat messages and call history linked to your account</li>
        <li>Push notification tokens and in-app preferences</li>
        <li>Freedom points, badges, and related gamification records</li>
      </ul>

      <h2>What we may keep</h2>
      <p>
        We may retain limited information only when required by law, to resolve
        disputes, prevent fraud or abuse, or enforce our agreements. Any data
        kept for these reasons is stored only as long as necessary and is not
        used for other purposes.
      </p>

      <h2>Before you delete</h2>
      <p>
        Account deletion is permanent. You will lose access to your habit progress,
        community posts, messages, and premium benefits tied to that account. If
        you only want to stop using the app, you can uninstall Quitify without
        deleting your account.
      </p>

      <h2>Questions</h2>
      <p>
        For privacy questions, see our{" "}
        <Link href="/privacy">Privacy Policy</Link> or contact POTTY PAW LTD at{" "}
        <a href={COMPANY_WEBSITE_URL} target="_blank" rel="noopener noreferrer">
          www.pottypawltd.com
        </a>
        .
      </p>
    </LegalPageLayout>
  );
}
