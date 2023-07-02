import Link from 'next/link'


export default function Home() {
  return (
    <main>
    <h1 className='text-center font-bold text-5xl'>Home</h1>
    <Link href='/about'> About Page </Link>
    </main>
  )
}
