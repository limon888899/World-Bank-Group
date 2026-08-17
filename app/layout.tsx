import "./globals.css";

export const metadata = {
  title: "Meridian Bank International",
  description: "নিরাপদ ও দ্রুত মোবাইল ব্যাংকিং",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
