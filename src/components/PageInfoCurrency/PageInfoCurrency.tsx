import { Radio, RadioChangeEvent, Spin } from "antd";
import { useCurrencyById } from "../../hooks/useCurrencyById";
import Chart from "../Chart/Chart";
import InfoSection from "../InfoSection/InfoSection";
import "./pageInfoCurrency.scss";
import { useCurrencyHistory } from "../../hooks/useCurrencyHistory";
import { useEffect, useState } from "react";
import { radioOptions } from "../../data/radioOptions";

export default function PageInfoCurrency() {
  const idCurrency = new URLSearchParams(window.location.search).get("id");
  const { isLoadingCurrency, currencyData } = useCurrencyById(idCurrency!);
  const [value, setValue] = useState("h1");
  const { status, refetch, data } = useCurrencyHistory(idCurrency!, value);

  useEffect(() => {
    if (value) {
      refetch();
    }
  }, [value]);

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    setValue(value);
  };

  return (
    <>
      {isLoadingCurrency || status !== "fulfilled" ? (
        <div className="spiner">
          <Spin size="large" />
        </div>
      ) : (
        <main className="infoPage">
          <InfoSection dataCurrency={currencyData} />
          <div className="chart">
            <Radio.Group
              options={radioOptions}
              onChange={onChange}
              value={value}
              optionType="button"
              buttonStyle="solid"
            />
            <Chart data={data} />
          </div>
        </main>
      )}
    </>
  );
}
