import UserCard from "../components/UserCard";
import { user } from "../types/User";
import { getUsers } from "../services/userService";

export default async function UsersPage() {
    const users: user[] = await getUsers()
     return (
    <main className="min-h-screen bg-black p-10">
      <h1 className="text-3xl text-white mb-8">
        User Management Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </main>
  )
    
}

