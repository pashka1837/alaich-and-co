import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: "pavel@example.com",
        password: "xxx11122",
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        fetch(`/api/profile?token=${json.data.token}`)
          .then((res) => res.json())
          .then((json) => console.log(json));
      });
  }, []);
  return <div>Home</div>;
}
