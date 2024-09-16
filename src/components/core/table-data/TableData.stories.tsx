import Chip from "@mui/material/Chip";
import TableData from "./TableData";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TableData> = {
  component: TableData,
  title: "Core/TableData",
};

export default meta;

type Story = StoryObj<typeof TableData>;

export const Default: Story = {
  args: {
    data: {
      headers: [
        { key: "id", label: "ID", hidden: true },
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "sex", label: "Sex" },
        { key: "gender", label: "Gender" },
        { key: "status", label: "Status" },
      ],
      rows: [
        {
          id: 1,
          name: "Jacquelyn Roberts",
          email: "Werner47@gmail.com",
          sex: "male",
          gender: "Cis woman",
          status: <Chip label="active" color="primary" />,
        },
        {
          id: 2,
          name: "Lee Beier",
          email: "Emelia_Gulgowski@hotmail.com",
          sex: "male",
          gender: "FTM",
          status: <Chip label="inactive" />,
        },
        {
          id: 3,
          name: "Pablo Prosacco",
          email: "Christa_Kautzer@yahoo.com",
          sex: "male",
          gender: "Two* person",
          status: <Chip label="active" color="primary" />,
        },
        {
          id: 4,
          name: "Carroll Terry",
          email: "Rozella31@gmail.com",
          sex: "female",
          gender: "Demiflux",
          status: <Chip label="active" color="primary" />,
        },
        {
          id: 5,
          name: "Laurie Erdman I",
          email: "Jaunita.Kunde94@gmail.com",
          sex: "male",
          gender: "Transsexual woman",
          status: <Chip label="inactive" />,
        },
        {
          id: 6,
          name: "Leigh Homenick",
          email: "Gwen.Grimes@hotmail.com",
          sex: "female",
          gender: "Demiflux",
          status: <Chip label="active" color="primary" />,
        },
        {
          id: 7,
          name: "Cesar Kessler",
          email: "Lisandro.Buckridge17@gmail.com",
          sex: "female",
          gender: "Pangender",
          status: <Chip label="active" color="primary" />,
        },
        {
          id: 8,
          name: "Janis Kreiger",
          email: "Ervin2@gmail.com",
          sex: "female",
          gender: "Two* person",
          status: <Chip label="inactive" />,
        },
        {
          id: 9,
          name: "Dr. Rolando Rodriguez",
          email: "Luigi84@yahoo.com",
          sex: "female",
          gender: "Transgender female",
          status: <Chip label="inactive" />,
        },
        {
          id: 10,
          name: "Cary Weber",
          email: "Prudence4@hotmail.com",
          sex: "male",
          gender: "Transsexual person",
          status: <Chip label="inactive" />,
        },
      ],
    },
    orderBy: "asc",
    sortColumn: "id",
  },
};
