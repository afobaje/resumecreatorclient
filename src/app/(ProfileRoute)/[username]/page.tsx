'use client'
import Profile from "@/app/components/Profile";
import userService from "@/services/userService";
import { useQuery } from "@tanstack/react-query";

export default function UserProfile({ params: { username } }: { params: { username: string } }) {


  const { isPending, error, data } = useQuery({ queryKey: ['user'], queryFn: async () => await userService.GET_USER_WITH_USERNAME(username) })

  return (
    <div>
      <div className="l-container">
        <div className="m-auto pb-20">
          {isPending ?
            <div className="grid h-[100vh] place-content-center">
              <p>loading</p>
            </div> : data ?
              <Profile userData={data} /> :
              <div className="grid h-[100vh] place-content-center">
                <p>user not found</p>
              </div>
          }
        </div>
      </div>
    </div>
  )
}
