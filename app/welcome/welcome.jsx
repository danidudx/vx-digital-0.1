import React from "react";

export function Welcome() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to React Router!</h1>
        <p className="text-xl mb-8">
          A modern, production-ready template for building full-stack React
          applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
          <FeatureCard
            title="Server-side Rendering"
            description="Improve performance and SEO with server-side rendering."
          />
          <FeatureCard
            title="Hot Module Replacement"
            description="Enjoy a seamless development experience with HMR."
          />
          <FeatureCard
            title="Asset Optimization"
            description="Automatic bundling and optimization of your assets."
          />
          <FeatureCard
            title="Data Management"
            description="Built-in data loading and mutation capabilities."
          />
          <FeatureCard
            title="TypeScript Support"
            description="First-class TypeScript support out of the box."
          />
          <FeatureCard
            title="Tailwind CSS"
            description="Beautiful styling with the popular utility-first CSS framework."
          />
        </div>
        <div className="mt-12">
          <a
            href="https://reactrouter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Read the Docs
          </a>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
