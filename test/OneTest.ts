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