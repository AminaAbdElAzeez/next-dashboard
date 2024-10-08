import "../globals.css";

export const metadata = {
  title: "Welcome / Next Dashboard",
  description: "Next Dashboard in Apps Square Trainning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
