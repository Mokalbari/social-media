"use client"

import { User } from "@prisma/client"

type Props = {
  user: User
  updateUser: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

export function ProfileForm({ user, updateUser }: Props) {
  return (
    <div className="bg-slate-200 flex flex-col p-4">
      <h2 className="font-bold text-sm">Edit Your Profile</h2>
      <form onSubmit={updateUser} className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" defaultValue={user?.name ?? ""} />
        <label htmlFor="bio">Bio</label>
        <textarea
          name="bio"
          cols={30}
          rows={10}
          defaultValue={user?.bio ?? ""}
        ></textarea>
        <label htmlFor="age">Age</label>
        <input type="text" name="age" defaultValue={user?.age ?? 0} />
        <label htmlFor="image">Profile Image URL</label>
        <input type="text" name="image" defaultValue={user?.image ?? ""} />

        <button
          type="submit"
          className="bg-blue-300 rounded-sm self-center p-2"
        >
          Save
        </button>
      </form>
    </div>
  )
}
