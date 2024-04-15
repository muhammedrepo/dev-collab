import { db } from '@/db'

export default async function Home() {
  const items = await db.query.accounts.findMany()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {items.map((item) => (
        <div key={item.userId} className="flex flex-col items-center">
          <h2>{item.userId}</h2>
        </div>
      ))}
    </main>
  )
}
