export const suma = (a: number, b: number) => a + b;
describe('OneTest', () => {
  it('should return 3', () => {
    expect(suma(1, 2)).toBe(3);
  });
});

const succesCases = [
  [1, 2, 3],
  [2, 2, 4],
  [3, 2, 5]
];

describe.each(succesCases)('OneTest', (a, b, expected) => {
  it(`should return ${expected}`, () => {
    expect(suma(a, b)).toBe(expected);
  });
});

// describe("InMemoryUserRepository", () => {
//     let repository: InMemoryUserRepository;

//     beforeEach(() => {
//         repository = new InMemoryUserRepository();
//     });

//     describe("getById", () => {
//         it("should return the user when exists a user with that id", async () => {
//             const existingUserId = "1";
//             expect(await repository.getById(existingUserId)).toBeInstanceOf(User);
//         });

//         it("should return null when the user does not exist", async () => {
//             const nonExistingUserId = "10";
//             expect(await repository.getById(nonExistingUserId)).toBeNull();
//         });
//     });
// });
