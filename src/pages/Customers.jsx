
import React, { useState } from "react";

const reviews = [
  { id: 1, name: "Mandala Zokie" },
  { id: 2, name: "Mandala Zokie" },
  { id: 3, name: "Mandala Zokie" },
  { id: 4, name: "Mandala Zokie" },
  { id: 5, name: "Mandala Zokie" },
  { id: 6, name: "Mandala Zokie" },
];

const Customers = () => {
  const [active, setActive] = useState(2);

  return (
    <section className="bg-gray-100 py-20 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-16 px-5">
        <h1 className="text-4xl md:text-5xl font-bold">
          Customers say about us
        </h1>

        <p className="text-gray-500 mt-6 text-lg">
          Bring your dream home to life with one-on-one design
          <br className="hidden md:block" />
          help & hand-picked products.
        </p>
      </div>

      {/* Carousel */}
      <div className="flex justify-center items-center gap-8">

        {reviews.map((review, index) => (
          <div
            key={review.id}
            onClick={() => setActive(index)}
            className={`w-80 shrink-0 p-8 rounded-xl
              cursor-pointer transition-all duration-500

              ${
                active === index
                  ? "bg-white shadow-2xl scale-105"
                  : "bg-transparent border border-gray-300"
              }
            `}
          >
            <span
              className={`text-4xl font-bold ${
                active === index
                  ? "text-orange-500"
                  : "text-gray-400"
              }`}
            >
              ❝
            </span>

            <p className="text-sm leading-7 mt-2">
              Mushrooms are edible fungus that can
              provide several important nutrients.
              The many kinds of mushroom have varying
              compositions and nutritional profiles.
            </p>

            <div className="border-t border-gray-300 mt-6 pt-5 flex justify-between items-center">

              <div className="flex items-center gap-3">
                <img
                  src="/profile.jpg"
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold">
                    {review.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    CEO of Creative Hub
                  </p>
                </div>
              </div>

              <span
                className={
                  active === index
                    ? "text-orange-500"
                    : "text-gray-400"
                }
              >
                ★★★★★
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-3 mt-12">
        {reviews.map((review, index) => (
          <button
            key={review.id}
            onClick={() => setActive(index)}
            aria-label={`Go to review ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              active === index
                ? "w-14 bg-orange-500"
                : "w-8 bg-gray-300"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Customers;
