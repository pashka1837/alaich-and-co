import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { ProileData } from "./ProfileComp";

type ProfileInfoProps = {
  data: ProileData;
};

export function ProfileInfo({ data }: ProfileInfoProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {data && (
        <>
          <Typography level="h2">Welcome, {data.fullname}!</Typography>
          <Typography level="title-lg">{data.email}</Typography>
        </>
      )}
    </Box>
  );
}

// import { useEffect, useState } from "react";
// import { getProfile } from "../../lib/apiCalls";
// import Box from "@mui/joy/Box";
// import Typography from "@mui/joy/Typography";

// type ProileData = {
//   fullname: string;
//   email: string;
// } | null;

// type ProfileInfoProps = {
//   token: string;
//   setLoading: React.Dispatch<React.SetStateAction<boolean>>;
// };

// export function ProfileInfo({ token, setLoading }: ProfileInfoProps) {
//   const [data, setData] = useState<ProileData>(null);
//   const [errorMsg, setError] = useState<string | null>(null);
//   useEffect(() => {
//     async function fetchData() {
//       setLoading(true);
//       try {
//         const resData = await getProfile(token!);
//         setData(resData);
//       } catch (error: any) {
//         setError(error.message);
//       }
//       setLoading(false);
//     }
//     fetchData();
//   }, []);
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       {!errorMsg && data ? (
//         <>
//           <Typography level="h2">Welcome, {data.fullname}!</Typography>
//           <Typography level="title-lg">{data.email}</Typography>
//         </>
//       ) : (
//         <Typography color="danger" level="title-lg">
//           {errorMsg}
//         </Typography>
//       )}
//     </Box>
//   );
// }
