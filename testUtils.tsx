/* eslint-disable import/no-extraneous-dependencies */
import { FC, ReactElement, ReactNode } from "react"
import { render, RenderOptions } from "@testing-library/react"
// import ThemeProvider from "./theme/ThemeProvider"
import { ThemeProvider } from "@mui/material/styles"
import theme from "./src/styles/theme"

interface Props {
  children?: ReactNode
}

const defaultProps = {
  children: <></>,
}

const Wrapper: FC = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

Wrapper.defaultProps = defaultProps

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => {
  return render(ui, { wrapper: Wrapper, ...options })
}
// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
