import React from 'react';
import aboutImage from '@/assets/images/about-bg.jpg';


export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">About Dorper Sheep</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              We have Registered full blood Dorper’s & White Dorper’s
              Breeding Quality sheep from Johnny Powell, Glenn Land Farm
              Hijo Dorper’s, Zermeno Ranch, Mo. Dorpers, and Axtel Quality Dorpers.
              Registered Breeding Stock Available.
              ​We are also Members of the following:
              ​American Dorper Sheep Breeders Society
              ​California Wool Growers Association
            </p>
            <p className="text-lg">
              Dorper sheep, developed in South Africa, are renowned for their exceptional meat quality
              and adaptability. These hardy animals thrive in various climates and are known for
              their excellent mothering abilities and rapid growth rates.
            </p>
            <p className="text-lg">
              White Dorpers, a variant of the breed, share the same superior characteristics but
              feature a completely white coat. Both varieties are highly sought after for their
              efficient feed conversion and superior carcass characteristics.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { title: 'Adaptability', desc: 'Thrives in diverse climates and conditions' },
                { title: 'Growth Rate', desc: 'Rapid weight gain and excellent feed conversion' },
                { title: 'Meat Quality', desc: 'Superior carcass characteristics and taste' },
                { title: 'Maintenance', desc: 'Low maintenance, self-shedding coat' }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={aboutImage}
              alt="Dorper sheep in pasture"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-4 rounded-lg">
              <p className="font-semibold">Premium Quality</p>
              <p className="text-sm">Registered Breeding Stock</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}