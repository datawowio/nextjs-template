import type { PaginationProps as MUIPaginationProps } from "@mui/material/Pagination";
import type { BaseComponent } from "@/types/components";

export interface MessagesInfoProps {
  display: string;
  filter: string;
  info: string;
  to: string;
  total: string;
}

export interface PaginationInfoProps {
  limit: number;
  totalItems: number;
  filteredItems?: number;
  page?: number;
  messages?: MessagesInfoProps;
}

export interface PaginationProps extends BaseComponent, MUIPaginationProps {
  limit: number;
  totalItems: number;
  filteredItems?: number;
  messages?: MessagesInfoProps;
}
