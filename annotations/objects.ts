const profile = {
  name: 'Alex',
  age: 20,
  coordinates: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// Destructuring and annotating.
const { age }: { age: number } = profile;

// Destructuring and annotating nested objects
const {
  coordinates: { lat, lng }
}: {
  coordinates: {
    lat: number;
    lng: number;
  };
} = profile;
