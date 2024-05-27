import { type FormReturnType, type Schema, form } from "@tarcltd/form";
import { type ComputedRef, computed, reactive } from "vue";

/**
 * Generate a form object with Zod validation from a schema definition.
 *
 * @param schema - A schema definition.
 * @param state - The form state.
 * @param options - Options for the form.
 *   - `defaults`: The default values for the form.
 *   - `impl`: The implementation object for the form.
 * @returns An object with the following properties:
 * - `input`: The form schema definition.
 * - `state`: The form state.
 * - `schema`: The parsed `ZodObject` schema.
 * - `reset`: Reset the form to its default values.
 * - `isValid`: A computed property that returns whether the form is valid.
 */
function useForm<T = Record<string, any>>(
  schema: Schema,
  options: Partial<{
    /* biome-ignore lint/suspicious/noExplicitAny: */
    defaults: Record<string, any>;
    impl: T;
  }> = {
    defaults: {},
    impl: {} as T,
  }
): FormReturnType & {
  isValid: ComputedRef<boolean>;
} & T {
  const state = reactive({});
  const ret = form<T>(schema, state, options);

  return {
    ...ret,
    isValid: computed(() => ret.schema.safeParse(ret.state).success),
  };
}

export default useForm;
