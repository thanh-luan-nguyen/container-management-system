import Head from "next/head";

export default function Container({container}) {
  return (
	<>
	  <Head>
		<title>{container.name}</title>
	  </Head>
	  <div>
		<h1>{container.name}</h1>
	  </div>
	</>
  )
}

export async function getServerSideProps({params}) {
	const req = await fetch(`http://localhost:3000/containers.json`)
	const data = await req.json()
	const container = data.containers_list.find(c => c.id === params.id)

	return {
	  props: {container}
	}
  }