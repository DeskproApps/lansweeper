import { useMemo } from "react";
import { get } from "lodash";
import { Search, Select } from "@deskpro/app-sdk";
import { Label } from "../../common";
import { getOptions } from "../../../utils";
import type { FC } from "react";

type Props = {
  sites: any[];
  isFetching: boolean;
  onChangeSearchQuery: (search: string) => void;
  onChangeSite: (siteId: any) => void,
};

const Filters: FC<Props> = ({ sites, isFetching, onChangeSearchQuery, onChangeSite }) => {
  const options = useMemo(() => getOptions(sites, "companyName"), [sites]);

  return (
    <>
      <Search
        isFetching={isFetching}
        onChange={onChangeSearchQuery}
      />
      <Label label="Site" required>
        <Select
          initValue=""
          options={options}
          onChange={onChangeSite}
        />
      </Label>
    </>
  );
};

export { Filters };
