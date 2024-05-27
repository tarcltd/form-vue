import form from "../src/index";

describe("vue", () => {
  it("should use Vue reactivity", () => {
    const { state, isValid } = form(
      {
        type: "object",
        properties: {
          string: {
            type: "string",
            enum: ["test"],
          },
        },
        required: ["string"],
      },
      {
        defaults: { other: "test" },
      }
    );

    expect(state).toEqual({ other: "test" });
    expect(isValid.value).toBe(false);

    state.string = "test";
    expect(state).toEqual({ string: "test", other: "test" });
    expect(isValid.value).toBe(true);
  });
});
