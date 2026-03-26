import { User } from "../types/User";

interface Props {
    user:User
}

export default function UserCard({ user }: Props) {
  return (
    <div className="bg-gray-900 text-white p-5 rounded-lg shadow">
      <h2 className="text-xl font-bold">{user.name}</h2>

      <p className="text-gray-400">@{user.username}</p>

      <p className="mt-2">{user.email}</p>
      <p>{user.phone}</p>

      <p className="mt-2 text-sm text-gray-400">
        Company: {user.company.name}
      </p>

      <a
        href={`https://${user.website}`}
        target="_blank"
        className="text-blue-400 text-sm"
      >
        {user.website}
      </a>
    </div>
  )
}