import React from 'react';
import { ArrowRight } from 'lucide-react';
import ImageSlider from '../components/home/ImageSlider';
import PenTestTools from '../components/home/PenTestTools';

export default function Home() {
  return (
    <div>
      {/* Hero Section with Slider */}
      <ImageSlider />

      {/* Penetration Testing Tools Section */}
      <PenTestTools />

      {/* CTA Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Snigdha OS?</h2>
          <p className="text-xl text-gray-600 mb-8">Join the next generation of secure computing</p>
          <a
            href="/download"
            className="bg-[#754ffe] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6344d5] transition-colors inline-flex items-center"
          >
            Download Snigdha OS
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}