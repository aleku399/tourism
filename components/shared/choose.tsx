import React from 'react';

const WhyChooseUs = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold text-gray-800">Why Choose Us</h2>
                <p className="text-lg text-gray-600 mt-2">Here is why we make a good fit to handle your upcoming African Safari</p>
                <div className="flex flex-wrap justify-center mt-8">
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-800">1. We are local.</h3>
                            <p className="text-gray-600 mt-2">
                                This means we know what we are selling and where we are taking you for your Safari.
                            </p>
                        </div>
                    </div>
                    
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-800">2. Passionate team</h3>
                            <p className="text-gray-600 mt-2">
                                We are not just going through the motions, we enjoy every part of helping people travel and enjoy East Africa.
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-800">3. Strong partners</h3>
                            <p className="text-gray-600 mt-2">
                                To ensure the best experiences for you, we have built a network of important partners with hotels, airlines, national bodies, and more.
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-800">4. We are green</h3>
                            <p className="text-gray-600 mt-2">
                                We are committed to the conservation environment in all the destinations we take our guests to.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
