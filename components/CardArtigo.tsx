import Link from "next/link";
import styles from "./CardArtigo.module.css";

interface CardArtigoProps {
  slug: string;
  titulo: string;
  descricao: string;
}

export default function CardArtigo({
  slug,
  titulo,
  descricao,
}: CardArtigoProps) {
  return (
    <div className={styles.card}>
      <h2>{titulo}</h2>

      <p>{descricao}</p>

      <Link
        href={`/artigos/${slug}`}
        className={styles.botao}
      >
        Ler artigo
      </Link>
    </div>
  );
}