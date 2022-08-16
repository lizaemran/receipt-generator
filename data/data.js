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
            { id:  'cat-full-cut-1-a',type: "cat-single-coat", price: 1000, quantity: 1, discount: 0 },
            { id:  'cat-full-cut-2-a', type: "cat-double-coat", price: 2000, quantity: 1, discount: 0 },
            { id:  'cat-full-cut-3-a', type: "cat-triple-coat", price: 2500, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'cat-1-b',
          type: "lion-cut",
          subCategory: [
            { id:  'cat-lion-cut-1-a', type: "cat-single-coat", price: 1000, quantity: 1, discount: 0 },
            { id:  'cat-lion-cut-2-a', type: "cat-double-coat", price: 2000, quantity: 1, discount: 0 },
            { id:  'cat-lion-cut-3-a', type: "cat-triple-coat", price: 2500, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'cat-1-c',
          type: "medicated-cut",
          subCategory: [
            { id:  'cat-medicated-cut-1-a', type: "cat-medicated-cut", price: 2500, quantity: 1, discount: 0 },
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
            { id:  'cat-dry-1-a', type: "cat-single-coat", price: 1000, quantity: 1, discount: 0 },
            { id:  'cat-dry-2-a', type: "cat-double-coat", price: 1400, quantity: 1, discount: 0 },
            { id:  'cat-dry-3-a', type: "cat-triple-coat", price: 1800, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'cat-2-b',
          type: "wet",
          subCategory: [
            { id:  'cat-wet-1-a', type: "cat-single-coat", price: 1000, quantity: 1, discount: 0 },
            { id:  'cat-wet-2-a', type: "cat-double", price: 2000, quantity: 1, discount: 0 },
            { id:  'cat-wet-3-a', type: "cat-triple", price: 2500, quantity: 1, discount: 0 },
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
            { id:  'cat-PCH-1-a', type: "cat-PCH", price: 3000, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'cat-3-b',
          type: "Rabies",
          subCategory: [{ id:  'cat-Rabies-1-a', type: "cat-rabies", price: 1000, quantity: 1, discount: 0 }],
        },
        {
          id: 'cat-3-c',
          type: "Booster",
          subCategory: [
            { id:  'cat-booster-1-a', type: "cat-booster", price: 4000, quantity: 1, discount: 0 },
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
          subCategory: [{ id:  'cat-local-1-a', type: "cat-local", price: 500, quantity: 1, discount: 0 }],
        },
        {
          id: 'cat-4-b',
          type: "imported",
          subCategory: [
            { id:  'cat-imported-1-a', type: "cat-single", price: 1000, quantity: 1, discount: 0 },
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
          subCategory: [{ id:  'cat-caged-1-a', type: "cat-caged", price: 500, quantity: 1, discount: 0 }],
        },
        {
          id: 'cat-5-b',
          type: "open",
          subCategory: [{ id:  'cat-open-1-a', type: "cat-open", price: 700, quantity: 1, discount: 0 }],
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
          subCategory: [{ id:  'cat-mail-trimming-1-a', type: "cat-nail-trimming", price: 300, quantity: 1, discount: 0 }],
        },
        {
          id: 'cat-6-b',
          type: "Ear Cleaning",
          subCategory: [{ id:  'cat-ear-cleaning-1-a', type: "cat-ear-cleaning", price: 300, quantity: 1, discount: 0 }],
        },
        {
          id: 'cat-6-c',
          type: "Ear Mites Treatment",
          subCategory: [{ id:  'cat-ear-mites-treatment-1-a', type: "cat-ear-mites-treatment", price: 500, quantity: 1, discount: 0 }],
        },
        {
          id: 'cat-6-d',
          type: "Dental Scaling",
          subCategory: [
            { id:  'cat-dental-scaling-1-a', type: "cat-dental-scaling", price: 4000, quantity: 1, discount: 0 },
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
          subCategory: [{ id:  'cat-queen-1-a', type: "cat-queen", price: 700, quantity: 1, discount: 0 }],
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
            { id:  'cat-spay-1-a', type: "cat-spay", price: 8500, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'cat-8-b',
          type: "Neutering",
          subCategory: [
            { id:  'cat-neutering-1-a', type: "cat-neutering", price: 6000, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'cat-8-c',
          type: "Post Doc Care",
          subCategory: [{ id:  'cat-post-doc-care-1-a', type: "cat-post-doc", price: 700, quantity: 1, discount: 0 }],
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
            { id:  'cat-emergency-charges-1-a', type: "cat-emergengy", price: 2000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      id: 10,
      title: "Home Visit Charges",
      mainCategory: [
        {
          id: 'cat-10-a',
          type: "Within 10km Radius",
          subCategory: [
            { id:  'cat-home-visit-within-10-1-a', type: "cat-home-visit", price: 1000, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'cat-10-b',
          type: "Outside 10km Radius",
          subCategory: [
            { id:  'cat-home-visit-outside-10-1-a', type: "cat-home-visit", price: 2000, quantity: 1, discount: 0 },
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
            { id:  'dog-full-cut-1-a', type: "dog-single-coat", price: 1200, quantity: 1, discount: 0 },
            { id:  'dog-full-cut-1-b', type: "dog-double-coat", price: 1500, quantity: 1, discount: 0 },
            { id:  'dog-full-cut-1-c', type: "dog-triple-coat", price: 2000, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'dog-1-b',
          type: "lion-cut",
          subCategory: [
            { id:  'dog-lion-cut-1-a', type: "dog-single-coat", price: 1200, quantity: 1, discount: 0 },
            { id:  'dog-lion-cut-1-b', type: "dog-double-coat", price: 1500, quantity: 1, discount: 0 },
            { id:  'dog-full-cut-1-c', type: "dog-triple-coat", price: 2000, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'dog-1-c',
          type: "medicated-cut",
          subCategory: [
            { id:  'dog-medicated-cut-1-a', type: "dog-medicated-cut", price: 2000, quantity: 1, discount: 0 },
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
            { id:  'dog-dry-1-a', type: "dog-single-coat", price: 800, quantity: 1, discount: 0 },
            { id:  'dog-dry-1-b', type: "dog-double-coat", price: 1000, quantity: 1, discount: 0 },
            { id:  'dog-dry-1-c', type: "dog-triple-coat", price: 1200, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'dog-2-b',
          type: "wet",
          subCategory: [
            { id:  'dog-wet-1-a', type: "dog-single-coat", price: 1000, quantity: 1, discount: 0 },
            { id:  'dog-wet-1-b', type: "dog-double-coat", price: 1500, quantity: 1, discount: 0 },
            { id:  'dog-wet-1-c', type: "dog-triple-coat", price: 2000, quantity: 1, discount: 0 },
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
            { id:  'dog-puppy-1-a', type: "dog-puppy", price: 2000, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'dog-3-b',
          type: "Booster",
          subCategory: [
            { id:  'dog-booster-1-a', type: "dog-booster", price: 3000, quantity: 1, discount: 0 },
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
          subCategory: [{ id:  'dog-local-1-a', type: "dog-local", price: 400, quantity: 1, discount: 0 }],
        },
        {
          id: 'dog-4-b',
          type: "imported",
          subCategory: [
            { id:  'dog-imported-1-a', type: "dog-single", price: 700, quantity: 1, discount: 0 },
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
            { id:  'dog-caged-1-a', type: "dog-caged", price: 1000, quantity: 1, discount: 0 },
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
          subCategory: [{ id:  'dog-nail-trimming-1-a', type: "dog-nail-trimming", price: 500, quantity: 1, discount: 0 }],
        },
        {
          id: 'dog-6-b',
          type: "Ear Cleaning",
          subCategory: [{ id:  'dog-ear-cleaning-1-a', type: "dog-ear-cleaning", price: 500, quantity: 1, discount: 0 }],
        },
        {
          id: 'dog-6-c',
          type: "Dental Scaling",
          subCategory: [
            { id:  'dog-dental-scaling-1-a', type: "dog-dental-scaling", price: 5000, quantity: 1, discount: 0 },
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
            { id:  'dog-spay-1-a', type: "dog-spay", price: 12000, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'dog-7-b',
          type: "Neutering",
          subCategory: [
            { id:  'dog-neutering-1-a', type: "dog-neutering", price: 8000, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'dog-7-c',
          type: "Post Doc Care",
          subCategory: [
            { id:  'dog-post-doc-care-1-a', type: "dog-post-doc-care", price: 1000, quantity: 1, discount: 0 },
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
            { id:  'dog-emergency-charges-1-a', type: "dog-emergency-charges", price: 2000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      id: 9,
      title: "Home Visit Charges",
      mainCategory: [
        {
          id: 'dog-9-a',
          type: "Within 10km Radius",
          subCategory: [
            { id:  'dog-home-visit-within-10-1-a', type: "dog-home-visit", price: 1000, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'dog-9-b',
          type: "Outside 10km Radius",
          subCategory: [
            { id:  'dog-home-visit-outside-10-1-a', type: "dog-home-visit", price: 2000, quantity: 1, discount: 0 },
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
              { id:  'rabbit-purchase-1-a', type: "rabbit-purchase", price: 0, quantity: 1, discount: 0 },
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
            { id:  'rabbit-angora-cut-1-a', type: "rabbit-angora-cut", price: 1500, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'rabbit-2-b',
          type: "others",
          subCategory: [
            { id:  'rabbit-trimming-others-1-a', type: "rabbit-single-coat", price: 800, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'rabbit-2-c',
          type: "giant",
          subCategory: [
            { id:  'rabbit-trimming-giant-1-a', type: "rabbit-giant", price: 1500, quantity: 1, discount: 0 },
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
            { id:  'rabbit-grooming-angora-cut-1-a', type: "rabbit-angora-cut", price: 1000, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'rabbit-3-b',
          type: "others",
          subCategory: [
            { id:  'rabbit-grooming-others-1-a', type: "rabbit-others", price: 500, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'rabbit-3-c',
          type: "bunny",
          subCategory: [
            { id:  'rabbit-grooming-bunny-1-a', type: "rabbit-single-coat", price: 500, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'rabbit-3-d',
          type: "giant",
          subCategory: [
            { id:  'rabbit-grooming-giant-1-a', type: "rabbit-giant", price: 1000, quantity: 1, discount: 0 },
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
          subCategory: [{ id: 'rabbit-deworming-1-a', type: "rabbit-deworming", price: 500, quantity: 1, discount: 0 }],
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
          subCategory: [{ id: 'rabbit-caged-1-a', type: "rabbit-caged", price: 300, quantity: 1, discount: 0 }],
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
          subCategory: [{ id: 'rabbit-nail-trimming-1-a', type: "rabbit-nail-trimming", price: 300, quantity: 1, discount: 0 }],
        },
        {
            id: 'rabbit-6-b',
            type: "Scabies Treatment",
            subCategory: [{ id: 'rabbit-scabies-1-a', type: "rabbit-scabies", price: 500, quantity: 1, discount: 0 }],
          },
        {
          id: 'rabbit-6-c',
          type: "Ear Cleaning",
          subCategory: [{ id: 'rabbit-ear-cleaning-1-a', type: "rabbit-ear-cleaning", price: 300, quantity: 1, discount: 0 }],
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
            { id: 'rabbit-spay-1-a', type: "rabbit-spay", price: 6000, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'rabbit-7-b',
          type: "Neutering",
          subCategory: [
            { id: 'rabbit-neutering-1-a', type: "rabbit-neutering", price: 4000, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'rabbit-7-c',
          type: "Post Doc Care",
          subCategory: [{ id: 'rabbit-post-doc-care-1-a', type: "rabbit-post-doc", price: 500, quantity: 1, discount: 0 }],
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
            { id: 'rabbit-emergency-charges-1-a', type: "rabbit-emergency", price: 1000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
    {
      id: 9,
      title: "Home Visit Charges",
      mainCategory: [
        {
          id: 'rabbit-10-a',
          type: "Within 10km Radius",
          subCategory: [
            { id:  'rabbit-home-visit-within-10-1-a', type: "rabbit-home-visit", price: 1000, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'rabbit-10-b',
          type: "Outside 10km Radius",
          subCategory: [
            { id:  'rabbit-home-visit-outside-10-1-a', type: "rabbit-home-visit", price: 2000, quantity: 1, discount: 0 },
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
          subCategory: [{ id: 'birds-dna-testing-1-a', type: "birds-dna-testing", price: 2500, quantity: 1, discount: 0 }],
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
          subCategory: [{ id: 'birds-nails-clipping-1-a', type: "birds-nails-clipping", price: 500, quantity: 1, discount: 0 }],
        },
        {
          id: 'birds-2-b',
            type: "Feather Clipping",
            subCategory: [{ id: 'birds-feather-clipping-1-a', type: "birds-feather-clipping", price: 500, quantity: 1, discount: 0 }],
          },
      ],
    },
    {
      id: 3,
      title: "Home Visit Charges",
      mainCategory: [
        {
          id: 'bird-10-a',
          type: "Within 10km Radius",
          subCategory: [
            { id:  'bird-home-visit-within-10-1-a', type: "bird-home-visit", price: 1000, quantity: 1, discount: 0 },
          ],
        },
        {
          id: 'bird-10-b',
          type: "Outside 10km Radius",
          subCategory: [
            { id:  'bird-home-visit-outside-10-1-a', type: "bird-home-visit", price: 2000, quantity: 1, discount: 0 },
          ],
        },
      ],
    },
  ]),
];
