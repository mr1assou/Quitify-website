import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-section">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-10">
        <div>
          <p className="text-sm font-semibold text-foreground">Quitify</p>
          <p className="mt-1 text-sm text-muted">
            Your companion for a smoke free life.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          <Link
            href="/privacy"
            className="text-muted transition-colors hover:text-primary"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-muted transition-colors hover:text-primary"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/delete-account"
            className="text-muted transition-colors hover:text-primary"
          >
            Delete account
          </Link>
        </div>
      </div>

      <div className="border-t border-border/70 px-4 py-4 sm:px-6">
        <p className="mx-auto max-w-6xl text-center text-xs text-muted">
          © {year} Quitify. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
