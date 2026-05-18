import { artigos } from "../../../data/artigos";
import Layout from "../../../components/Layout";
import styles from "./artigo.module.css";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return artigos.map((artigo) => ({
    slug: artigo.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps) {
  const { slug } = await params;

  const artigo = artigos.find(
    (item) => item.slug === slug
  );

  return {
    title: artigo?.titulo || "Artigo",
    description:
      artigo?.descricao || "Página de artigo",
  };
}

export default async function ArtigoPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const artigo = artigos.find(
    (item) => item.slug === slug
  );

  if (!artigo) {
    return (
      <Layout>
        <h2>Artigo não encontrado</h2>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.container}>
        <h2>{artigo.titulo}</h2>

        <p className={styles.info}>
          Autor: {artigo.autor}
        </p>

        <p className={styles.info}>
          Data: {artigo.data}
        </p>

        <p className={styles.conteudo}>
          {artigo.conteudo}
        </p>
      </div>
    </Layout>
  );
}