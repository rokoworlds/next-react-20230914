"use client"

import { useRouter } from "next/navigation"

export default function LandingPage () {
    const router = useRouter()
    return (
    <div onClick={() => {
        router.push("/details")
    }}>
        Hello! This site for authorized users only!
        <button >Go to Details!</button>
    </div>
    )
}