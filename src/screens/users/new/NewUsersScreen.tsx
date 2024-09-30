"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { useTranslations } from "next-intl";
import { debounce } from "radash";
import useSwr, { mutate } from "swr";
import { useImmerReducer } from "use-immer";

import Header from "@/components/header";
import Pagination from "@/components/pagination";
import { ROUTE } from "@/constants/routes";
import TableData from "@/components/table-data";
import InvitationService from "@/services/invitation-service";
import UserService from "@/services/user-service";
import queryString from "@/utils/queryString";

import ActionButton from "./ActionButton";
import Filters from "./Filters";
import { MOCK_PAGINATION_DATA_FROM_API } from "./fixtures";
import reducer, { initialState } from "./reducer";
import { styles } from "./styles";

import type { ChangeEvent, SyntheticEvent } from "react";
import type { UserInfo } from "@/services/user-service";
import type { OrderType } from "@/types/sort";
import { useToast } from "@/hooks/use-toast";

const userService = new UserService();
const invitationService = new InvitationService();

const fetcher = (url: string) => invitationService.getInviteUsers(url);

export default function NewUsersScreen() {
  // Hooks
  const toast = useToast();
  const t = useTranslations("screens.users.new");
  const tCommon = useTranslations("common");
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  // Computed Variables
  function debouncedFilter(value: string) {
    debounce({ delay: 1000 }, function () {
      dispatch({ type: "UPDATE_FILTER", payload: { key: "name", value } });
    })();
  }

  const query = queryString({
    search: state.filters.name,
    page: state.pagination.page,
    pageSize: state.pagination.limit,
  });

  const { data, isLoading } = useSwr(`/app/invitation/users?${query}`, fetcher);

  // Variables

  const actionMessages = {
    resend: t("actions.resend"),
    invite: t("actions.invite"),
  };

  const breadcrumbs = [
    {
      href: ROUTE.users.path,
      name: t("breadcrumbs.usermanagement"),
    },
    {
      name: t("title"),
    },
  ];

  const filterMessages = {
    search: t("filters.search"),
    show: tCommon("pagination.show"),
    perPage: tCommon("pagination.perPage"),
  };

  const paginationMessages = {
    display: tCommon("pagination.display"),
    filter: tCommon("pagination.filter"),
    info: tCommon("pagination.info"),
    to: tCommon("pagination.to"),
    total: tCommon("pagination.total"),
  };

  // Functions
  function onChangeInput(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    debouncedFilter(event.target.value);
  }

  function onChangeSelectPagination(_: SyntheticEvent, options: any) {
    dispatch({
      type: "UPDATE_PAGINATION",
      payload: {
        key: "limit",
        value: options?.value,
      },
    });
  }

  function handleSortColumn(key: string, orderBy: OrderType) {
    dispatch({ type: "UPDATE_SORT", payload: { key, value: orderBy } });
  }

  function handleChangePagination(_e: ChangeEvent<unknown>, page: number) {
    dispatch({
      type: "UPDATE_PAGINATION",
      payload: {
        key: "page",
        value: page,
      },
    });
  }

  async function onInvite(samAccount: string) {
    try {
      const response = await invitationService.invite(samAccount);
      if (response.status !== 200) {
        console.error(response.error);
      }
      toast.showToast(response.message, "success");
      mutate(`/app/invitation/users?${query}`);
      return;
    } catch (error) {
      console.error("Error inviting user:", error);
    }
  }

  async function onCancelInvite(samAccount: string) {
    try {
      const response = await invitationService.cancelInvite(samAccount);
      if (response.status !== 200) {
        console.error(response.error);
      }
      toast.showToast(response.message, "success");
      mutate(`/app/invitation/users?${query}`);
      return;
    } catch (error) {
      console.error("Error inviting user:", error);
    }
  }

  async function onReinvite(samAccount: string) {
    try {
      const response = await invitationService.reInvite(samAccount);
      if (response.status !== 200) {
        console.error(response.error);
      }
      toast.showToast(response.message, "success");
      mutate(`/app/invitation/users?${query}`);
      return;
    } catch (error) {
      console.error("Error inviting user:", error);
    }
  }

  const formattedData = {
    headers: [
      { key: "name", label: t("table.label.name") },
      { key: "email", label: t("table.label.email") },
      { key: "action", label: "" },
    ],
    rows:
      data?.data?.map((item: UserInfo) => {
        return {
          id: item.id,
          name: item.fullname,
          email: item.email,
          action: (
            <ActionButton
              onInvite={() => onInvite(item.samAccount)}
              onCancelInvite={() => onCancelInvite(item.samAccount)}
              onReinvite={() => onReinvite(item.samAccount)}
              messages={actionMessages}
              status={item.status}
            />
          ),
        };
      }) ?? [],
  };

  return (
    <Stack sx={styles.root}>
      <Header
        text={t("title")}
        breadcrumbs={breadcrumbs}
        hrefBack={ROUTE.users.path}
      />
      <Box sx={styles.card}>
        <Filters
          onChangeInput={onChangeInput}
          onChangeSelectPagination={onChangeSelectPagination}
          messages={filterMessages}
        />
        <TableData
          data={formattedData}
          orderBy={state.sort.orderBy}
          sortColumn={state.sort.key}
          onSortColumn={handleSortColumn}
        />
        <Pagination
          count={MOCK_PAGINATION_DATA_FROM_API.totalPages}
          page={state.pagination.page}
          limit={state.pagination.limit}
          totalItems={MOCK_PAGINATION_DATA_FROM_API.totalItems}
          messages={paginationMessages}
          onChange={handleChangePagination}
          sx={styles.wrapper}
        />
      </Box>
    </Stack>
  );
}
