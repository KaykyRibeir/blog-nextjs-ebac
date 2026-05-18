import Layout from "../components/Layout";
import CardArtigo from "../components/CardArtigo";
import { artigos } from "../data/artigos";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <Layout>
      <h2>Artigos do Blog</h2>

      <div className={styles.grid}>
        {artigos.map((artigo) => (
          <CardArtigo
            key={artigo.slug}
            slug={artigo.slug}
            titulo={artigo.titulo}
            descricao={artigo.descricao}
          />
        ))}
      </div>
    </Layout>
  );
}