import { ConfigProvider} from "antd";
import "./App.scss";
import PageInfoCurrency from "./components/PageInfoCurrency/PageInfoCurrency";
import TableCurrency from "./components/Table/Table";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { theme } from "./data/themeForAnt";
import Header from "./components/Header/Header";
import { useAppSelector } from "./hooks/hooks";
import { useActions } from "./hooks/useActions";
import { useState } from "react";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import ProductItem from "./components/ProductItem/ProductItem";
import { addIntoBriefCase } from "./features/addIntoBriefCase";

const router = createBrowserRouter([
  {
    path: "/cryptocurrency",
    element: (
      <div className="tableContent">
        <TableCurrency />
      </div>
    ),
  },
  {
    path: "/cryptocurrency/currencyInfo",
    element: <PageInfoCurrency />,
  },
]);

export default function App() {
  const activeAddModal = useAppSelector((state) => state.activeAddModal);
  const { setActiveAddModal } = useActions();
  const [count, setCount] = useState(1);
  const { value } = useAppSelector((state) => state.dataCurrencyForBuy);
  const handleCancel = () => {
    setActiveAddModal(false);
  };
  const addIntoBriefCaseParams = {
    product: {
      name: value.id,
      icon: value.icon,
      count,
      priceUsd: value.priceUsd,
    },
    setActiveAddModal,
  };

  return (
    <ConfigProvider theme={theme}>
      <Header />
      <ModalWindow
        title="Add in briefcase:"
        open={activeAddModal.value}
        onOk={() => addIntoBriefCase(addIntoBriefCaseParams)}
        onCancel={handleCancel}
      >
        {value ? (
          <ProductItem
            icon={value.icon}
            name={value.id}
            cost={value.priceUsd}
            count={count}
            setCount={setCount}
          />
        ) : (
          <h1>No info yet</h1>
        )}
      </ModalWindow>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}
