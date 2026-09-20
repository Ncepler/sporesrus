import Link from "next/link";
import CallButton from "@/components/ui/CallButton";
import Button from "@/components/ui/Button";
import { SITE_NAME } from "@/lib/siteConfig";

export default function NotFound() {
  return (
    <div className="container-page section flex min-h-[50vh] flex-col items-start justify-center">
      <p className="font-display text-h3 font-semibold text-accent">404</p>
      <h1 className="mt-3 max-w-xl font-display text-h1 font-semibold text-ink">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 measure text-body-lg text-ink-soft">
        The page you&apos;re looking for isn&apos;t here — it may have moved. Head back to{" "}
        {SITE_NAME}&apos;s home page, or call us directly.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-6">
        <Button href="/" variant="outline">
          Back to Home
        </Button>
        <CallButton />
      </div>
    </div>
  );
}
