import { TestBed } from "@angular/core/testing";
import { UsersService } from "./users.service";

describe("UsersService", () => {

    let usersService: UsersService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UsersService]
        })

        usersService = TestBed.inject(UsersService);
    })

    it("Create userService", async () => {
        expect(usersService).toBeTruthy();
    });
    
});