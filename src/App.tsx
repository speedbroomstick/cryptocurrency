import { ConfigProvider } from "antd";
import "./App.scss";
import PageInfoCurrency from "./components/PageInfoCurrency/PageInfoCurrency";
import TableCurrency from "./components/Table/Table";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { theme } from "./data/themeForAnt";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="tableContent">
        <TableCurrency />
      </div>
    ),
  },
  {
    path: "/currencyInfo",
    element: <PageInfoCurrency />,
  },
]);

export default function App() {
  return (
    <ConfigProvider theme={theme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}
