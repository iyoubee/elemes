import { Category, Hero, Navbar, Trending } from '@elements'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col p-7 lg:p-20">
        <Hero />
        <Category />
        <Trending />
      </main>
    </>
  )
}
