import Animal from "../modals/Animal";

export const ANIMALS = [
  new Animal(1, "Cat", [
    {
      id: 1,
      title: "trimming",
      mainCategory: [
        {
          id: 'cat-1-a',
          type: "full-cut",
          subCategory: [
            { type: "single", price: 1000, quantity: 1, discount: 0 },
            { type: "double", price: 2000, quantity: 1, discount: 0 },
            { type: "triple", price: 2500, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'cat-1-b',
          type: "lion-cut",
          subCategory: [
            { type: "single", price: 1000, quantity: 1, discount: 0 },
            { type: "double", price: 2000, quantity: 1, discount: 0 },
            { type: "triple", price: 2500, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'cat-1-c',
          type: "medicated-cut",
          subCategory: [
            { type: "none", price: 2500, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "grooming",
      mainCategory: [
        {
          id: 'cat-2-a',
          type: "dry",
          subCategory: [
            { type: "single", price: 1000, quantity: 1, discount: 0 },
            { type: "double", price: 1400, quantity: 1, discount: 0 },
            { type: "triple", price: 1800, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'cat-2-b',
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
      id: 3,
      title: "vaccination",
      mainCategory: [
        {
          id:'cat-3-a',
          type: "PCH",
          subCategory: [
            { type: "none", price: 2500, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'cat-3-b',
          type: "Rabies",
          subCategory: [{ type: "none", price: 700, quantity: 1, discount: 0 }],
        },
        {
          id: 'cat-3-c',
          type: "Booster",
          subCategory: [
            { type: "none", price: 3000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "deworming",
      mainCategory: [
        {
          id: 'cat-4-a',
          type: "local",
          subCategory: [{ type: "none", price: 500, quantity: 1, discount: 0 }],
        },
        {
          id: 'cat-4-b',
          type: "imported",
          subCategory: [
            { type: "single", price: 1000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      id: 5,
      title: "boarding",
      mainCategory: [
        {
          id: 'cat-5-a',
          type: "caged",
          subCategory: [{ type: "none", price: 500, quantity: 1, discount: 0 }],
        },
        {
          id: 'cat-5-b',
          type: "open",
          subCategory: [{ type: "none", price: 700, quantity: 1, discount: 0 }],
        },
      ],
    },
    {
      id: 6,
      title: "Nails, Ears and Dental Care",
      mainCategory: [
        {
          id: 'cat-6-a',
          type: "Nail Trimming",
          subCategory: [{ type: "none", price: 300, quantity: 1, discount: 0 }],
        },
        {
          id: 'cat-6-b',
          type: "Ear Cleaning",
          subCategory: [{ type: "none", price: 300, quantity: 1, discount: 0 }],
        },
        {
          id: 'cat-6-c',
          type: "Ear Mites Treatment",
          subCategory: [{ type: "none", price: 500, quantity: 1, discount: 0 }],
        },
        {
          id: 'cat-6-d',
          type: "Dental Scaling",
          subCategory: [
            { type: "none", price: 4000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      id: 7,
      title: "Foster Care",
      mainCategory: [
        {
          id: 'cat-7-a',
          type: "Queen",
          subCategory: [{ type: "none", price: 700, quantity: 1, discount: 0 }],
        },
      ],
    },
    {
      id: 8,
      title: "Surgery",
      mainCategory: [
        {
          id: 'cat-8-a',
          type: "Spay",
          subCategory: [
            { type: "none", price: 8500, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'cat-8-b',
          type: "Neutering",
          subCategory: [
            { type: "none", price: 6000, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'cat-8-c',
          type: "Post Doc Care",
          subCategory: [{ type: "none", price: 700, quantity: 1, discount: 0 }],
        },
      ],
    },
    {
      id: 9,
      title: "emergengy",
      mainCategory: [
        {
          id: 'cat-9-a',
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
      id: 1,
      title: "trimming",
      mainCategory: [
        {
          id: 'dog-1-a',
          type: "full-cut",
          subCategory: [
            { type: "single", price: 1200, quantity: 1, discount: 0 },
            { type: "double", price: 1500, quantity: 1, discount: 0 },
            { type: "triple", price: 2000, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'dog-1-b',
          type: "lion-cut",
          subCategory: [
            { type: "single", price: 1200, quantity: 1, discount: 0 },
            { type: "double", price: 1500, quantity: 1, discount: 0 },
            { type: "triple", price: 2000, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'dog-1-c',
          type: "medicated-cut",
          subCategory: [
            { type: "none", price: 2000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "grooming",
      mainCategory: [
        {
          id: 'dog-2-a',
          type: "dry",
          subCategory: [
            { type: "single", price: 800, quantity: 1, discount: 0 },
            { type: "double", price: 1000, quantity: 1, discount: 0 },
            { type: "triple", price: 1200, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'dog-2-b',
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
      id: 3,
      title: "vaccination",
      mainCategory: [
        {
          id: 'dog-3-a',
          type: "Puppy",
          subCategory: [
            { type: "none", price: 2000, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'dog-3-b',
          type: "Booster",
          subCategory: [
            { type: "none", price: 3000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "deworming",
      mainCategory: [
        {
          id: 'dog-4-a',
          type: "local",
          subCategory: [{ type: "none", price: 400, quantity: 1, discount: 0 }],
        },
        {
          id: 'dog-4-b',
          type: "imported",
          subCategory: [
            { type: "single", price: 700, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      id: 5,
      title: "boarding",
      mainCategory: [
        {
          id: 'dog-5-a',
          type: "caged",
          subCategory: [
            { type: "none", price: 1000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Nails, Ears and Dental Care",
      mainCategory: [
        {
          id: 'dog-6-a',
          type: "Nail Trimming",
          subCategory: [{ type: "none", price: 500, quantity: 1, discount: 0 }],
        },
        {
          id: 'dog-6-b',
          type: "Ear Cleaning",
          subCategory: [{ type: "none", price: 500, quantity: 1, discount: 0 }],
        },
        {
          id: 'dog-6-c',
          type: "Dental Scaling",
          subCategory: [
            { type: "none", price: 5000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      id: 7,
      title: "Surgery",
      mainCategory: [
        {
          id: 'dog-7-a',
          type: "Spay",
          subCategory: [
            { type: "none", price: 12000, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'dog-7-b',
          type: "Neutering",
          subCategory: [
            { type: "none", price: 8000, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'dog-7-c',
          type: "Post Doc Care",
          subCategory: [
            { type: "none", price: 1000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      id: 8,
      title: "emergengy",
      mainCategory: [
        {
          id: 'dog-8-a',
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
      id: 1,
        title: "Purchase",
        mainCategory: [
          {
            id: 'rabbit-1-a',
            type: "rabbit",
            subCategory: [
              { type: "none", price: 0, quantity: 1, discount: 0 },
            ],
          },
        ],
      },
    {
      id: 2,
      title: "trimming",
      mainCategory: [
        {
          id: 'rabbit-2-a',
          type: "angora-cut",
          subCategory: [
            { type: "none", price: 1500, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'rabbit-2-b',
          type: "others",
          subCategory: [
            { type: "single", price: 800, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'rabbit-2-c',
          type: "giant",
          subCategory: [
            { type: "none", price: 1500, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "grooming",
      mainCategory: [
        {
          id: 'rabbit-3-a',
          type: "angora-cut",
          subCategory: [
            { type: "none", price: 1000, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'rabbit-3-b',
          type: "others",
          subCategory: [
            { type: "single", price: 500, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'rabbit-3-c',
          type: "bunny",
          subCategory: [
            { type: "single", price: 500, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'rabbit-3-d',
          type: "giant",
          subCategory: [
            { type: "none", price: 1000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "deworming",
      mainCategory: [
        {
          id: 'rabbit-4-a',
          type: "local",
          subCategory: [{ type: "none", price: 500, quantity: 1, discount: 0 }],
        },
      ],
    },
    {
      id: 5,
      title: "boarding",
      mainCategory: [
        {
          id: 'rabbit-5-a',
          type: "caged",
          subCategory: [{ type: "none", price: 300, quantity: 1, discount: 0 }],
        },
      ],
    },
    {
      id: 6,
      title: "Nails, Ears and Scabies Care",
      mainCategory: [
        {
          id: 'rabbit-6-a',
          type: "Nail Trimming",
          subCategory: [{ type: "none", price: 300, quantity: 1, discount: 0 }],
        },
        {
            id: 'rabbit-6-b',
            type: "Scabies Treatment",
            subCategory: [{ type: "none", price: 500, quantity: 1, discount: 0 }],
          },
        {
          id: 'rabbit-6-c',
          type: "Ear Cleaning",
          subCategory: [{ type: "none", price: 300, quantity: 1, discount: 0 }],
        },
      ],
    },
    {
      id: 7,
      title: "Surgery",
      mainCategory: [
        {
          id: 'rabbit-7-a',
          type: "Spay",
          subCategory: [
            { type: "none", price: 6000, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'rabbit-7-b',
          type: "Neutering",
          subCategory: [
            { type: "none", price: 4000, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'rabbit-7-c',
          type: "Post Doc Care",
          subCategory: [{ type: "none", price: 500, quantity: 1, discount: 0 }],
        },
      ],
    },
    {
      id: 8,
      title: "emergengy",
      mainCategory: [
        {
          id: 'rabbit-8-a',
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
      id: 1,
      title: "DNA testing",
      mainCategory: [
        {
          id: 'birds-1-a',
          type: "local",
          subCategory: [{ type: "none", price: 2500, quantity: 1, discount: 0 }],
        },
      ],
    },
    {
      id: 2,
      title: "Nails and Feather Care",
      mainCategory: [
        {
          id: 'birds-2-a',
          type: "Nail Clipping",
          subCategory: [{ type: "none", price: 500, quantity: 1, discount: 0 }],
        },
        {
          id: 'birds-2-b',
            type: "Feather Clipping",
            subCategory: [{ type: "none", price: 500, quantity: 1, discount: 0 }],
          },
      ],
    },
  ]),
];
