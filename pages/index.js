import Head from 'next/head'
import { CloudFirestore } from '../firebase/config';
import { useEffect, useState } from 'react';
import { containerModel } from '../model/containerModel';


export default function Home() {
  // useState containers
  const [containers, setContainers] = useState([containerModel])   
  useEffect(()=> {
    const unsub = CloudFirestore.getAllContainersRealTime(setContainers)
    return () => unsub
  },[])
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {containers.map(c =>
        <div key={c.id} >
          <a href={`/container/${c.id}`}>
            {c.name}
          </a>
        </div>
      )}
    </>
  )
}