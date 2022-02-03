import Home from "pages/index"
import { render, screen } from "../testUtils"

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />)

    const heading = screen.getByRole("heading", {
      name: "MUI v5 + Next.js with TypeScript example",
    })

    expect(heading).toBeInTheDocument()
  })
})
