import Button from "@mui/joy/Button";
type UpdateBtnProps = {
  setOpenReq: React.Dispatch<React.SetStateAction<boolean>>;
};

export function UpdateBtn({ setOpenReq }: UpdateBtnProps) {
  return <Button onClick={() => setOpenReq(true)}>Update</Button>;
}
