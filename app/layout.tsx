import "./globals.css";

export const metadata = {
  title: "Project Portal",
  description: "Engineering & Software Project Solutions",
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
