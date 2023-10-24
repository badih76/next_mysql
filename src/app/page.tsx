import Image from 'next/image'
import styles from './page.module.css'

export default async function Home() {
  
  const req = await fetch(`http://localhost:3000/api/mysql/students/`,
  {
    method: 'get',
    cache: 'no-store' 
  })
  
  const data = await req.json();

  console.log(data);

  return (
    <main>
      <h1>MySQL in Next.js</h1>
    </main>
  )
}
