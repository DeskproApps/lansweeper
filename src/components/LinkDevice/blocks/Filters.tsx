import { useMemo } from "react";
import { Search, Select } from "@deskpro/app-sdk";
import { Label } from "@/components/common";
import { getOptions } from "@/utils";
import type { FC } from "react";
import type { Maybe, Option } from "@/types";
import type { Site } from "@/services/lansweeper/types";

type Props = {
  sites: Site[];
  siteId: Maybe<Site["id"]>;
  isFetching: boolean;
  onChangeSearchQuery: (search: string) => void;
  onChangeSite: (siteId: Site["id"]) => void,
};

const Filters: FC<Props> = ({ sites, siteId, isFetching, onChangeSearchQuery, onChangeSite }) => {
  const options = useMemo(() => getOptions(sites, "brandingName"), [sites]) as Array<Option>;

  return (
    <>
      <Search
        isFetching={isFetching}
        onChange={onChangeSearchQuery}
      />
      <Label label="Site" required>
        <Select
          value={siteId}
          options={options}
          onChange={onChangeSite as () => void}
        />
      </Label>
    </>
  );
};

export { Filters };
