import { Button, Sheet, Typography } from "@mui/joy";
import { MyInput } from "./MyInput";
import { FormEvent, useState } from "react";
import { postLogin } from "../../lib/apiCalls";
import { useAppDispatch } from "../../lib/hooks";
import { saveToken } from "../../feature/authSlice";
import { useNavigate } from "react-router";
import { links } from "../../constants/links";

export function SignForm() {
  const dispatch = useAppDispatch();
  const naviate = useNavigate();
  const [formError, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formEl = e.currentTarget;
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      setError("Enter valid data");
      formEl.reset();
      return;
    }

    try {
      const { token } = await postLogin({ email, password });
      dispatch(saveToken(token));
      naviate(links["profile"].href);
    } catch (error: any) {
      setError(error.message);
    }
    setLoading(false);
    formEl.reset();
    return;
  }

  return (
    <Sheet
      variant="outlined"
      sx={{ display: "flex", flexDirection: "column", gap: "10px", p: 4 }}
      component={"form"}
      onSubmit={handleSubmit}
    >
      <MyInput
        name="email"
        type="email"
        placehldr="Enter email"
        label="Email address"
      />
      <MyInput
        name="password"
        type="password"
        placehldr="Password"
        label="Password"
      />
      {formError ? (
        <Typography color="danger" level="body-sm">
          {formError}
        </Typography>
      ) : (
        <span style={{ height: "21px" }}></span>
      )}
      <Button loading={isLoading} type="submit">
        Submit
      </Button>
    </Sheet>
  );
}
