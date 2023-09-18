    import React from 'react';

    const Services = () => {
    return (
        <div>
        <section className="bg-white container mx-auto" id="Our Services">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md text-center text-gray-800 mx-auto">
    <h2 className="mb-4 text-4xl font-bold tracking-tight text-primary-600">What We Offer</h2>
    <p className="text-lg">Our consulting expertise enables us to tap into a wealth of insights, delivering exceptional business solutions to our esteemed clients.</p>
    <div className="border-t-2 border-red-600 w-16 mx-auto my-4"></div>
</div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {/* Service 1 */}
                <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto rounded-full bg-primary-600">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Marketing Consultancy</h3>
                <p className="text-gray-600 dark:text-gray-400">We collaborate with businesses and organizations to create, execute, and enhance marketing strategies and campaigns aimed at achieving precise objectives.</p>
                </div>

                {/* Service 2 */}
                <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto rounded-full bg-primary-600">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                    </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Business Consulting</h3>
                <p className="text-gray-600 dark:text-gray-400">Our team of business consultants collaborates closely with our clients to evaluate their existing operations, pinpoint areas that require enhancement, and craft strategies for fostering beneficial transformations.</p>
                </div>

                {/* Service 3 */}
                <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto rounded-full bg-primary-600">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011-1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                    </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Performance Management</h3>
                <p className="text-gray-600 dark:text-gray-400">Performance management is a continuous and strategic process aimed at aligning employees' efforts with the overarching mission and objectives of the company. It encompasses a range of activities and tools designed to evaluate and enhance performance.</p>
                </div>

                {/* Service 4 */}
                <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto rounded-full bg-primary-600">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Personnel Mentoring and Training</h3>
                <p className="text-gray-600 dark:text-gray-400">Personnel mentoring and training programs provide mentorship, guidance, and training to employees within an organization to support their growth and development.</p>
                </div>

                {/* Service 5 */}
                <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto rounded-full bg-primary-600">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                    </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Brand Management</h3>
                <p className="text-gray-600 dark:text-gray-400">Brand management is a comprehensive marketing discipline focused on creating and maintaining a strong and positive brand identity for a product, service, or organization.</p>
                </div>

                {/* Service 6 */}
                <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto rounded-full bg-primary-600">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.532 1.532 0 01-2.287-.947c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">STRATEGIC PERSONNEL RECRUITMENT FORMULATION</h3>
                <p className="text-gray-600 dark:text-gray-400">We audit through staffing thus strategic recruitment formulation at ALL levels.</p>
                </div>
            </div>
            </div>
        </section>
        </div>
    );
    };

    export default Services;
