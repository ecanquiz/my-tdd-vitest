import { vi, expect, test } from "vitest";
// import { func1, func2 } from "./main.ts";
import * as mod from './main.ts'

const expectedResponse = "returning from MOCK";

test("test Spy", async () => {
  vi.mock("./main.ts", async (importOriginal) => {
    const mod = await importOriginal<typeof import("./main.ts")>();

    return {
      ...mod,
      func2: vi.fn().mockImplementation(async () => "returning from MOCK"),
    };
  });
    
  const spy = vi.spyOn(mod, 'func1').mockImplementation(() => mod.func2());  
  const response = await mod.func1();
  
  console.log(`response: ${response}`);
  console.log(`expectedResponse: ${expectedResponse}`);
  
  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveReturnedWith(expectedResponse);  
  expect(response).equals(expectedResponse);
  expect(await mod.func2()).equals(expectedResponse);
});

 

