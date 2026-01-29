import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ContactForm } from "@/components/contact/form"
import { ContactInfo } from "@/components/contact/info"

export const metadata = {
    title: "Contact Us | Chhanda Jewellers - Bulk Enquiry",
    description: "Get in touch for manufacturing quotes, bulk supply, or to visit our Singur factory.",
}

export default function ContactPage() {
    return (
        <main className="bg-background min-h-screen pt-20">
            <Navbar />

            <section className="py-12 bg-surface-dark border-b border-surface-light">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">Let's Build Together</h1>
                    <p className="text-gray-400">Get a custom quote for your bulk jewellery requirements</p>
                </div>
            </section>

            <section className="py-20 bg-background relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-surface-dark/50 to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
