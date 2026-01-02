import { Search, Select } from "@deskpro/app-sdk";
import { Label } from "@/components/common";
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
  const siteOptions: Option[] = sites.map((site) => ({
    value: site.id,
    label: site.brandingName || site.name || `Unnamed Site (${site.id})`,
    key: site.id,
    type: "value",
  }))

  return (
    <>
      <Search
        isFetching={isFetching}
        onChange={onChangeSearchQuery}
      />
      <Label label="Site" required>
        <Select
          value={siteId}
          options={siteOptions}
          onChange={onChangeSite as () => void}
        />
      </Label>
    </>
  );
};

export { Filters };
