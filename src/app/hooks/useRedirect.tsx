import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useRedirect() {
    const router = useRouter()
    const { data } = useSession()
    const session = data;

    useEffect(() => {
        if (session) {
            router.push('/explore')
        }
    }, [session,router])

    return null;
}