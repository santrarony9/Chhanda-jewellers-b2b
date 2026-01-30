"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"

export function TimeDisplay() {
    const [times, setTimes] = useState<{ local: string; ist: string } | null>(null)

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()

            // Format Local Time
            const local = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })

            // Format IST
            const ist = now.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZone: 'Asia/Kolkata'
            })

            setTimes({ local, ist })
        }

        updateTime()
        const interval = setInterval(updateTime, 1000)
        return () => clearInterval(interval)
    }, [])

    if (!times) return null // Prevent hydration mismatch

    return (
        <div className="hidden lg:flex items-center gap-4 text-[10px] tracking-widest uppercase text-gray-500 font-medium">
            <div className="flex items-center gap-2">
                <Clock className="h-3 w-3" />
                <span>Local: <span className="text-primary-400">{times.local}</span></span>
            </div>
            <div className="h-3 w-[1px] bg-white/10" />
            <div>
                <span>IST: <span className="text-primary-400">{times.ist}</span></span>
            </div>
        </div>
    )
}
