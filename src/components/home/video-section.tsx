"use client"

export function VideoSection() {
    return (
        <section className="py-8 md:py-12 bg-background">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(212,175,55,0.1)] border border-primary/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent z-20 pointer-events-none" />
                    
                    {/* Scale container to crop out YouTube UI */}
                    <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] lg:w-[130%] lg:h-[130%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
                        <iframe
                            src="https://www.youtube.com/embed/KJ64wNBC8Ug?autoplay=1&mute=1&loop=1&playlist=KJ64wNBC8Ug&controls=0&showinfo=0&rel=0&modestbranding=1&vq=hd1080"
                            title="Chhanda Jewellers Manufacturing"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
