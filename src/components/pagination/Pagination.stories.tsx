import { useArgs } from "@storybook/preview-api";
import Pagination from "./Pagination";

import type { Meta, StoryObj } from "@storybook/react";
import type { ChangeEvent } from "react";

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: "Components/Pagination",
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  decorators: [DefaultPagination],
  args: {
    count: 10,
    page: 1,
    limit: 20,
    totalItems: 200,
    filteredItems: 100,
    messages: {
      display: "แสดงข้อมูลที่",
      filter: "กรองข้อมูลจากทั้งหมด",
      info: "ข้อมูล",
      to: "ถึง",
      total: "จากทั้งหมด",
    },
  },
};

function DefaultPagination() {
  const [
    { page, count, limit, totalItems, filteredItems, messages },
    updateArgs,
  ] = useArgs();

  function onChangeHandler(_event: ChangeEvent<unknown>, page: number) {
    updateArgs({ page: page });
  }

  return (
    <Pagination
      onChange={onChangeHandler}
      shape="rounded"
      limit={limit}
      totalItems={totalItems}
      count={count}
      filteredItems={filteredItems}
      messages={messages}
      page={page}
    />
  );
}
