"use client";

import CheckboxGroup from "@/components/common/CheckboxGroup";
import { Text } from "@/components/ui";
import Error from "@/components/ui/Error";
import { I18NS } from "@/constants/I18NS";
import { useSizesQuery } from "@/lib/graphql/schema.generated";
import { Skeleton } from "@mui/material";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import Box from "../../../ui/Box";

interface SizesFilterProps extends WithTranslation {
  selectedValues: string[];
  handleFilterChange: (value: string) => void;
  field?: "id" | "code";
}

const SizesFilter: FC<SizesFilterProps> = ({ selectedValues, handleFilterChange, field, t }) => {
  const { data, loading, error } = useSizesQuery();

  if (error) return <Error message={t("content.filter.sizes.error", { message: error.message })!} />;
  if (loading || !data) return <Skeleton variant={"rectangular"} height={180} width={"100%"} />;

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Text variant={"p"}>{t("content.filter.sizes.label")}</Text>
      <CheckboxGroup
        options={data.sizes.nodes}
        selectedValues={selectedValues}
        onClick={handleFilterChange}
        field={field}
      />
    </Box>
  );
};

export default withTranslation(I18NS.Catalog)(SizesFilter);
