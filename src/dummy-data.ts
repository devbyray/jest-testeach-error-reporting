// Thanks ChatGPT for test data 👍
export const nestedData = [
  // Test case 1
  {
    testName: "Test case 1",
    request: {
      id: 1,
      name: "John",
      age: 30,
      contact: {
        email: "john@example.com",
        phone: {
          home: "123-456-7890",
          work: "987-654-3210",
        },
      },
      address: {
        location: {
          street: "123 Main St",
          city: "Springfield",
          coordinates: {
            lat: 40.7128,
            long: -74.006,
          },
        },
        zip: "62704",
      },
      employment: {
        company: "ABC Corp",
        position: {
          title: "Software Engineer",
          department: {
            name: "Engineering",
            floor: 3,
          },
        },
      },
      settings: {
        preferences: {
          theme: "dark",
          notifications: {
            email: true,
            sms: false,
          },
        },
      },
      friends: [
        {
          id: 2,
          name: "Jane",
          relationship: { type: "friend", since: "2020-01-01" },
        },
        {
          id: 3,
          name: "Bob",
          relationship: { type: "colleague", since: "2019-01-01" },
        },
      ],
      metadata: {
        activity: {
          lastLogin: "2021-09-01T12:00:00Z",
          lastPurchase: {
            date: "2021-08-01",
            amount: 100,
          },
        },
      },
    },
    response: {
      id: 1,
      name: "Jojojoopophn",
      age: 30,
      contact: {
        email: "joop@example.com",
        phone: {
          home: "123-456-7890",
          work: "987-654-3210",
        },
      },
      address: {
        location: {
          street: "123 Main St",
          city: "Springfield",
          coordinates: {
            lat: 40.7128,
            long: -74.006,
          },
        },
        zip: "62704",
      },
      employment: {
        company: "ABC Corp",
        position: {
          title: "Software Engineer",
          department: {
            name: "Engineering",
            floor: 3,
          },
        },
      },
      settings: {
        preferences: {
          theme: "dark",
          notifications: {
            email: true,
            sms: false,
          },
        },
      },
      friends: [
        {
          id: 2,
          name: "Jane",
          relationship: { type: "friend", since: "2020-01-01" },
        },
        {
          id: 3,
          name: "Bob",
          relationship: { type: "colleague", since: "2019-01-01" },
        },
      ],
      metadata: {
        activity: {
          lastLogin: "2021-09-01T12:00:00Z",
          lastPurchase: {
            date: "2021-08-01",
            amount: 100,
          },
        },
      },
    },
  },
  // Test case 2
  {
    testName: "Test case 2",
    request: {
      id: 2,
      name: "Jane",
      age: 25,
      contact: {
        email: "jane@example.com",
        phone: {
          home: "111-222-3333",
          work: "444-555-6666",
        },
      },
      address: {
        location: {
          street: "456 Elm St",
          city: "Shelbyville",
          coordinates: {
            lat: 34.0522,
            long: -118.2437,
          },
        },
        zip: "61616",
      },
      employment: {
        company: "XYZ Corp",
        position: {
          title: "Data Analyst",
          department: {
            name: "Analytics",
            floor: 2,
          },
        },
      },
      settings: {
        preferences: {
          theme: "light",
          notifications: {
            email: false,
            sms: true,
          },
        },
      },
      friends: [
        {
          id: 1,
          name: "John",
          relationship: { type: "friend", since: "2020-01-01" },
        },
        {
          id: 4,
          name: "Alice",
          relationship: { type: "colleague", since: "2018-01-01" },
        },
      ],
      metadata: {
        activity: {
          lastLogin: "2021-09-10T12:00:00Z",
          lastPurchase: {
            date: "2021-07-01",
            amount: 50,
          },
        },
      },
    },
    response: {
      id: 2,
      name: "Jane",
      age: 25,
      contact: {
        email: "jane@example.com",
        phone: {
          home: "111-222-3333",
          work: "444-555-6666",
        },
      },
      address: {
        location: {
          street: "456 Elm St",
          city: "Shelbyville",
          coordinates: {
            lat: 34.0522,
            long: -118.2437,
          },
        },
        zip: "61616",
      },
      employment: {
        company: "XYZ Corp",
        position: {
          title: "Data Analyst",
          department: {
            name: "Analytics",
            floor: 2,
          },
        },
      },
      settings: {
        preferences: {
          theme: "light",
          notifications: {
            email: false,
            sms: true,
          },
        },
      },
      friends: [
        {
          id: 1,
          name: "John",
          relationship: { type: "friend", since: "2020-01-01" },
        },
        {
          id: 4,
          name: "Alice",
          relationship: { type: "colleague", since: "2018-01-01" },
        },
      ],
      metadata: {
        activity: {
          lastLogin: "2021-09-10T12:00:00Z",
          lastPurchase: {
            date: "2021-07-01",
            amount: 50,
          },
        },
      },
    },
  },
  // Test case 3
  {
    testName: "Test case 3",
    request: {
      id: 3,
      name: "Joop",
      age: 25,
      contact: {
        email: "jane@example.com",
        phone: {
          home: "111-222-3333",
          work: "444-555-6666",
        },
      },
      address: {
        location: {
          street: "456 Elm St",
          city: "Shelbyville",
          coordinates: {
            lat: 34.0522,
            long: -118.2437,
          },
        },
        zip: "61616",
      },
      employment: {
        company: "XYZ Corp",
        position: {
          title: "Data Analyst",
          department: {
            name: "Analytics",
            floor: 2,
          },
        },
      },
      settings: {
        preferences: {
          theme: "light",
          notifications: {
            email: false,
            sms: true,
          },
        },
      },
      friends: [
        {
          id: 1,
          name: "John",
          relationship: { type: "friend", since: "2020-01-01" },
        },
        {
          id: 4,
          name: "Alice",
          relationship: { type: "colleague", since: "2018-01-01" },
        },
      ],
      metadata: {
        activity: {
          lastLogin: "2021-09-10T12:00:00Z",
          lastPurchase: {
            date: "2021-07-01",
            amount: 50,
          },
        },
      },
    },
    response: {
      id: 3,
      name: "Joop",
      age: 25,
      contact: {
        email: "jane@example.com",
        phone: {
          home: "111-222-3333",
          work: "444-555-6666",
        },
      },
      address: {
        location: {
          street: "456 Elm St",
          city: "Shelbyville",
          coordinates: {
            lat: 34.0522,
            long: -118.2437,
          },
        },
        zip: "61616",
      },
      employment: {
        company: "XYZ Corp",
        position: {
          title: "Data Analyst",
          department: {
            name: "Analytics",
            floor: 2,
          },
        },
      },
      settings: {
        preferences: {
          theme: "light",
          notifications: {
            email: false,
            sms: true,
          },
        },
      },
      friends: [
        {
          id: 1,
          name: "John",
          relationship: { type: "friend", since: "2020-01-01" },
        },
        {
          id: 4,
          name: "Alice",
          relationship: { type: "colleague", since: "2018-01-01" },
        },
      ],
      metadata: {
        activity: {
          lastLogin: "2021-09-10T12:00:00Z",
          lastPurchase: {
            date: "2021-07-01",
            amount: 50,
          },
        },
      },
    },
  },
];
