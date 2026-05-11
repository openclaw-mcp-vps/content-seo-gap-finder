import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Content SEO Gap Finder – Find content gaps competitors are missing",
  description: "Analyze competitor content, identify keyword gaps and content opportunities using search data. Built for content marketers and bloggers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="13a8f82a-4672-406d-a4de-e2a6f0f9854d"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
