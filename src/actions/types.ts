export interface FormState {
  status: "idle" | "success" | "error";
  message: string;
}

export const initialState: FormState = {
  status: "idle",
  message: "",
};
