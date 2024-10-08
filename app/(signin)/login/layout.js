import "../../globals.css";

export const metadata = {
  title: "Login / Next Dashboard",
};

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="home">
          <div className="home-left">
            <div className="home-left-overlay">
              <h1 className="home-left-title">Welcome back!</h1>
              <p className="home-left-desc">
                Be first to know new features, best solutions, and great deals.
              </p>
            </div>
          </div>
          <div className="home-right">
            <h2 className="home-right-title">Login to your account</h2>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
