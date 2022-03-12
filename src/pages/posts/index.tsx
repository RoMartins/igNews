import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>12 de março de 2021</time>
            <strong>Creating a monorepo with lerna e yarn worspaces</strong>
            <p>In this guide, you will learn how to create a monorepo to manage multiple packages with a shared build, test and reliase process</p>
          </a>
          <a>
            <time>12 de março de 2021</time>
            <strong>Creating a monorepo with lerna e yarn worspaces</strong>
            <p>In this guide, you will learn how to create a monorepo to manage multiple packages with a shared  build, test and reliase process</p>
          </a>
          <a>
            <time>12 de março de 2021</time>
            <strong>Creating a monorepo with lerna e yarn worspaces</strong>
            <p>In this guide, you will learn how to create a monorepo to manage multiple packages with a shared  build, test and reliase process</p>
          </a>
        </div>
      </main>
    </>
  )
}