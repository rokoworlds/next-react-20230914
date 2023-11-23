import Link from "next/link";
import styles from "./styles.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link className={styles.link} href='/restaurants'>Restaurants</Link>
          <Link className={styles.link} href='/details'>Details</Link>
        </header>
          {children}
        <footer>Footer</footer>
      </body>
    </html>
  )
}
