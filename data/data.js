import Animal from "../modals/Animal";

export const ANIMALS = [
  new Animal(1, "Cat", [
    {
      title: "trimming",
      mainCategory: [
        {
          type: "full-cut",
          subCategory: [
            { type: "single", price: 1000, quantity: 1, discount: 0 },
            { type: "double", price: 2000, quantity: 1, discount: 0 },
            { type: "triple", price: 2500, quantity: 1, discount: 0 },
          ],
        },
        {
          type: "lion-cut",
          subCategory: [
            { type: "single", price: 1000, quantity: 1, discount: 0 },
            { type: "double", price: 2000, quantity: 1, discount: 0 },
            { type: "triple", price: 2500, quantity: 1, discount: 0 },
          ],
        },
        {
          type: "medicated-cut",
          subCategory: [
            { type: "none", price: 2500, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      title: "grooming",
      mainCategory: [
        {
          type: "dry",
          subCategory: [
            { type: "single", price: 1000, quantity: 1, discount: 0 },
            { type: "double", price: 1400, quantity: 1, discount: 0 },
            { type: "triple", price: 1800, quantity: 1, discount: 0 },
          ],
        },
        {
          type: "wet",
          subCategory: [
            { type: "single", price: 1000, quantity: 1, discount: 0 },
            { type: "double", price: 2000, quantity: 1, discount: 0 },
            { type: "triple", price: 2500, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      title: "vaccination",
      mainCategory: [
        {
          type: "PCH",
          subCategory: [
            { type: "none", price: 2500, quantity: 1, discount: 0 },
          ],
        },
        {
          type: "Rabies",
          subCategory: [{ type: "none", price: 700, quantity: 1, discount: 0 }],
        },
        {
          type: "Booster",
          subCategory: [
            { type: "none", price: 3000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      title: "deworming",
      mainCategory: [
        {
          type: "local",
          subCategory: [{ type: "none", price: 500, quantity: 1, discount: 0 }],
        },
        {
          type: "imported",
          subCategory: [
            { type: "single", price: 1000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      title: "boarding",
      mainCategory: [
        {
          type: "caged",
          subCategory: [{ type: "none", price: 500, quantity: 1, discount: 0 }],
        },
        {
          type: "open",
          subCategory: [{ type: "none", price: 700, quantity: 1, discount: 0 }],
        },
      ],
    },
    {
      title: "Nails, Ears and Dental Care",
      mainCategory: [
        {
          type: "Nail Trimming",
          subCategory: [{ type: "none", price: 300, quantity: 1, discount: 0 }],
        },
        {
          type: "Ear Cleaning",
          subCategory: [{ type: "none", price: 300, quantity: 1, discount: 0 }],
        },
        {
          type: "Ear Mites Treatment",
          subCategory: [{ type: "none", price: 500, quantity: 1, discount: 0 }],
        },
        {
          type: "Dental Scaling",
          subCategory: [
            { type: "none", price: 4000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      title: "Foster Care",
      mainCategory: [
        {
          type: "Queen",
          subCategory: [{ type: "none", price: 700, quantity: 1, discount: 0 }],
        },
      ],
    },
    {
      title: "Surgery",
      mainCategory: [
        {
          type: "Spay",
          subCategory: [
            { type: "none", price: 8500, quantity: 1, discount: 0 },
          ],
        },
        {
          type: "Neutering",
          subCategory: [
            { type: "none", price: 6000, quantity: 1, discount: 0 },
          ],
        },
        {
          type: "Post Doc Care",
          subCategory: [{ type: "none", price: 700, quantity: 1, discount: 0 }],
        },
      ],
    },
    {
      title: "emergengy",
      mainCategory: [
        {
          type: "Charges",
          subCategory: [
            { type: "none", price: 2000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
  ]),
  new Animal(2, "Dog", [
    {
      title: "trimming",
      mainCategory: [
        {
          type: "full-cut",
          subCategory: [
            { type: "single", price: 1200, quantity: 1, discount: 0 },
            { type: "double", price: 1500, quantity: 1, discount: 0 },
            { type: "triple", price: 2000, quantity: 1, discount: 0 },
          ],
        },
        {
          type: "lion-cut",
          subCategory: [
            { type: "single", price: 1200, quantity: 1, discount: 0 },
            { type: "double", price: 1500, quantity: 1, discount: 0 },
            { type: "triple", price: 2000, quantity: 1, discount: 0 },
          ],
        },
        {
          type: "medicated-cut",
          subCategory: [
            { type: "none", price: 2000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      title: "grooming",
      mainCategory: [
        {
          type: "dry",
          subCategory: [
            { type: "single", price: 800, quantity: 1, discount: 0 },
            { type: "double", price: 1000, quantity: 1, discount: 0 },
            { type: "triple", price: 1200, quantity: 1, discount: 0 },
          ],
        },
        {
          type: "wet",
          subCategory: [
            { type: "single", price: 1000, quantity: 1, discount: 0 },
            { type: "double", price: 1500, quantity: 1, discount: 0 },
            { type: "triple", price: 2000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      title: "vaccination",
      mainCategory: [
        {
          type: "Puppy",
          subCategory: [
            { type: "none", price: 2000, quantity: 1, discount: 0 },
          ],
        },
        {
          type: "Booster",
          subCategory: [
            { type: "none", price: 3000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      title: "deworming",
      mainCategory: [
        {
          type: "local",
          subCategory: [{ type: "none", price: 400, quantity: 1, discount: 0 }],
        },
        {
          type: "imported",
          subCategory: [
            { type: "single", price: 700, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      title: "boarding",
      mainCategory: [
        {
          type: "caged",
          subCategory: [
            { type: "none", price: 1000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      title: "Nails, Ears and Dental Care",
      mainCategory: [
        {
          type: "Nail Trimming",
          subCategory: [{ type: "none", price: 500, quantity: 1, discount: 0 }],
        },
        {
          type: "Ear Cleaning",
          subCategory: [{ type: "none", price: 500, quantity: 1, discount: 0 }],
        },
        {
          type: "Dental Scaling",
          subCategory: [
            { type: "none", price: 5000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      title: "Surgery",
      mainCategory: [
        {
          type: "Spay",
          subCategory: [
            { type: "none", price: 12000, quantity: 1, discount: 0 },
          ],
        },
        {
          type: "Neutering",
          subCategory: [
            { type: "none", price: 8000, quantity: 1, discount: 0 },
          ],
        },
        {
          type: "Post Doc Care",
          subCategory: [
            { type: "none", price: 1000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      title: "emergengy",
      mainCategory: [
        {
          type: "Charges",
          subCategory: [
            { type: "none", price: 2000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
  ]),
  new Animal(3, "Rabbit", [
    {
        title: "Purchase",
        mainCategory: [
          {
            type: "rabbit",
            subCategory: [
              { type: "none", price: 0, quantity: 1, discount: 0 },
            ],
          },
        ],
      },
    {
      title: "trimming",
      mainCategory: [
        {
          type: "angora-cut",
          subCategory: [
            { type: "none", price: 1500, quantity: 1, discount: 0 },
          ],
        },
        {
          type: "others",
          subCategory: [
            { type: "single", price: 800, quantity: 1, discount: 0 },
          ],
        },
        {
          type: "giant",
          subCategory: [
            { type: "none", price: 1500, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      title: "grooming",
      mainCategory: [
        {
          type: "angora-cut",
          subCategory: [
            { type: "none", price: 1000, quantity: 1, discount: 0 },
          ],
        },
        {
          type: "others",
          subCategory: [
            { type: "single", price: 500, quantity: 1, discount: 0 },
          ],
        },
        {
          type: "bunny",
          subCategory: [
            { type: "single", price: 500, quantity: 1, discount: 0 },
          ],
        },
        {
          type: "giant",
          subCategory: [
            { type: "none", price: 1000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      title: "deworming",
      mainCategory: [
        {
          type: "local",
          subCategory: [{ type: "none", price: 500, quantity: 1, discount: 0 }],
        },
      ],
    },
    {
      title: "boarding",
      mainCategory: [
        {
          type: "caged",
          subCategory: [{ type: "none", price: 300, quantity: 1, discount: 0 }],
        },
      ],
    },
    {
      title: "Nails, Ears and Scabies Care",
      mainCategory: [
        {
          type: "Nail Trimming",
          subCategory: [{ type: "none", price: 300, quantity: 1, discount: 0 }],
        },
        {
            type: "Scabies Treatment",
            subCategory: [{ type: "none", price: 500, quantity: 1, discount: 0 }],
          },
        {
          type: "Ear Cleaning",
          subCategory: [{ type: "none", price: 300, quantity: 1, discount: 0 }],
        },
      ],
    },
    {
      title: "Surgery",
      mainCategory: [
        {
          type: "Spay",
          subCategory: [
            { type: "none", price: 6000, quantity: 1, discount: 0 },
          ],
        },
        {
          type: "Neutering",
          subCategory: [
            { type: "none", price: 4000, quantity: 1, discount: 0 },
          ],
        },
        {
          type: "Post Doc Care",
          subCategory: [{ type: "none", price: 500, quantity: 1, discount: 0 }],
        },
      ],
    },
    {
      title: "emergengy",
      mainCategory: [
        {
          type: "Charges",
          subCategory: [
            { type: "none", price: 1000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
  ]),
  new Animal(4, "Birds", [

    {
      title: "DNA testing",
      mainCategory: [
        {
          type: "local",
          subCategory: [{ type: "none", price: 2500, quantity: 1, discount: 0 }],
        },
      ],
    },
    {
      title: "Nails and Feather Care",
      mainCategory: [
        {
          type: "Nail Clipping",
          subCategory: [{ type: "none", price: 500, quantity: 1, discount: 0 }],
        },
        {
            type: "Feather Clipping",
            subCategory: [{ type: "none", price: 500, quantity: 1, discount: 0 }],
          },
      ],
    },
  ]),
];
