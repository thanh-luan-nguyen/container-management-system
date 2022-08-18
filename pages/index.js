import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({containers}) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {containers.map(container =>
        <div key={container.id} >
          <a href={`/container/${container.id}`}>
            {container.name}
          </a>
        </div>
      )}
    </>
  )
}

export async function getServerSideProps() {
  const req = await fetch(`http://localhost:3000/containers.json`)
  const data = await req.json()

  return {
    props: {
      containers: data.containers_list,
    },
  }
}