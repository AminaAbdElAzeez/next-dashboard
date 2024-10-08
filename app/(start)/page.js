import Image from "next/image";
import welcomeImage from "@/public/welcome.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="welcome-page">
      <Image
        src={welcomeImage}
        alt="Welcome Page..."
        width="100%"
        height="200"
        priority
      />
      <Link href="/login" className="welcome-btn">
        Login...
      </Link>
    </div>
  );
}
