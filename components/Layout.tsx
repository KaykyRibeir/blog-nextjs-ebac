import Link from "next/link";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className={styles.header}>
        <h1>Blog Next.js</h1>

        <nav>
          <ul className={styles.menu}>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>© 2026 Blog Next.js</p>
      </footer>
    </>
  );
}