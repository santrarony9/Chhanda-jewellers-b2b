import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy | Chhanda Jewellers',
    description: 'Privacy Policy and Data Protection guidelines for Chhanda Jewellers B2B Platform.',
}

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-black text-white min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-serif text-primary mb-8">Privacy Policy</h1>
                <p className="text-gray-400 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

                <div className="space-y-12 text-gray-300 leading-relaxed font-light">
                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">1. Introduction</h2>
                        <p>
                            Welcome to Chhanda Jewellers ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data.
                            This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from)
                            and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">2. Information We Collect</h2>
                        <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-white">Identity Data:</strong> includes first name, last name, username or similar identifier, and title.</li>
                            <li><strong className="text-white">Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong className="text-white">Financial Data:</strong> includes bank account and payment card details (processed securely via third-party providers).</li>
                            <li><strong className="text-white">Transaction Data:</strong> includes details about payments to and from you and other details of products you have purchased from us.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">3. How We Use Your Data</h2>
                        <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., fulfilling wholesale orders).</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal or regulatory obligation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">4. Data Security</h2>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                            In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">5. Contact Us</h2>
                        <p>
                            If you have any questions about this privacy policy or our privacy practices, please contact us at: <br />
                            <span className="text-primary mt-2 block">contact@chhandajewellers.com</span>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
