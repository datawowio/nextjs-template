import TableGridDataScreen from "@/screens/examples/table-grid-data";

export default function Page() {
  return <TableGridDataScreen />;
}

interface User {
  id: number;
  name: string;
  email: string;
  sex: string;
  gender: string;
  status: "active" | "inactive";
}
