import { lightTheme } from "@deskpro/deskpro-ui";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Filters } from "../Filters";

function renderComponent(site: { id: string; name?: string; brandingName?: string }) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <Filters
        isFetching={false}
        sites={[
          site,
        ]}
        siteId="dp-97"
        onChangeSearchQuery={jest.fn()}
        onChangeSite={jest.fn()}
      />
    </ThemeProvider>
  )
}


describe("Filters", () => {
  it.each([
    [{ id: "dp-97" }, "Unnamed Site (dp-97)"],
    [{ id: "dp-97", name: "Deskpro Site" }, "Deskpro Site"],
    [
      { id: "dp-97", name: "Deskpro Site", brandingName: "Deskpro Site (Branding)" },
      "Deskpro Site (Branding)",
    ],
  ])("correctly handles site name fallbacks", (site, target) => {
    const { getByText } = renderComponent(site)

    expect(getByText(target)).toBeInTheDocument()
  })
})
