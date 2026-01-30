import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms & Conditions | Chhanda Jewellers',
    description: 'Terms of Service and Business Conditions for Chhanda Jewellers.',
}

export default function TermsConditionsPage() {
    return (
        <div className="bg-black text-white min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-serif text-primary mb-8">Terms & Conditions</h1>
                <p className="text-gray-400 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

                <div className="space-y-12 text-gray-300 leading-relaxed font-light">
                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">1. General Overview</h2>
                        <p>
                            These Terms and Conditions govern your use of the Chhanda Jewellers website and your relationship with us.
                            Please read them carefully as they affect your rights and liabilities under the law.
                            By accessing this site and placing orders, you agree to be bound by these Terms and Conditions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">2. Wholesale & B2B Services</h2>
                        <p>
                            Chhanda Jewellers primarily operates as a B2B manufacturer and wholesaler.
                            To access our wholesale pricing and catalog, businesses may be required to verify their trade credentials (e.g., GSTIN, Trade License).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">3. Orders & Customization</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>All orders are subject to acceptance and availability.</li>
                            <li><strong>Custom Orders:</strong> Designs provided by clients for custom manufacturing remain the intellectual property of the client, but Chhanda Jewellers retains the right to display the finished craftsmanship in portfolios unless an NDA is signed.</li>
                            <li><strong>Lead Times:</strong> Estimated manufacturing times are 14-21 days for standard orders, subject to complexity and volume.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">4. Pricing & Payment</h2>
                        <p>
                            Prices for Gold and Diamond products fluctuate based on current market rates (e.g., MCX Gold Rate).
                            Final invoice value will be calculated based on the metal rate on the date of booking/delivery as per agreed terms.
                            Payment terms for wholesale partners are strictly as per the agreed invoices.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">5. Returns & Quality Guarantee</h2>
                        <p>
                            We guarantee the purity and quality of our products (Hallmarked).
                            Any manufacturing defects must be reported within 7 days of receipt.
                            Due to the nature of bullion and custom jewelry, returns are generally not accepted except in cases of proven manufacturing defects.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">6. Limitation of Liability</h2>
                        <p>
                            Chhanda Jewellers shall not be liable for any indirect, incidental, special, consequential or punitive damages,
                            including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">7. Governing Law</h2>
                        <p>
                            These terms shall be governed by and construed in accordance with the laws of India.
                            Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Hooghly, West Bengal.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
