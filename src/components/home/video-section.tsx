"use client"

export function VideoSection() {
    return (
        <section className="py-12 md:py-20 bg-background relative overflow-hidden">
            {/* Ambient Background Glow for Glassmorphism to interact with */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />
            
            <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
                {/* Glassmorphic Frame Bezel */}
                <div className="relative p-2 md:p-4 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                    
                    {/* Inner Video Container */}
                    <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-black border border-black/50 shadow-inner">
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-20 pointer-events-none" />
                        
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
            </div>
        </section>
    )
}
