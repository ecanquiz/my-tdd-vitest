export async function func1(): Promise<string> {
  let test = await func2();
  return test;
}

export async function func2(): Promise<string> {
  console.log("func2 OG");
  return "Returning from func2";
}
