import Head from "next/head";
import { useEffect, useState } from "react";
import { CloudFirestore } from "../../firebase/config";
import { containerModel } from "../../model/containerModel";

export default function Container({id}) {
	const [container, setContainer] = useState({id:'', name:''})

  useEffect(() => {
		const unsub = CloudFirestore.getOneContainerSnapshot(id, setContainer)
		return () => unsub
  }, [id])	
	
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

export function getServerSideProps({ params }) {
	return {
		props: {
			id: params.id
		}
	}
}