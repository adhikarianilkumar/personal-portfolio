import "./globals.scss";

export const metadata = {
  title: "macOS Portfolio",
  description: "macOS-style developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
