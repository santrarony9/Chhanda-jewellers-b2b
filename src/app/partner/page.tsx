import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { PartnerContent } from "@/components/partner/partner-content"

export default function PartnerPage() {
    return (
        <main className="bg-background min-h-screen pt-28 md:pt-36">
            <Navbar />
            <PartnerContent />
            <Footer />
        </main>
    )
}
