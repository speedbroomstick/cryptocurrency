import { Button, Radio, RadioChangeEvent, Result, Spin } from "antd";
import { useCurrencyById } from "../../hooks/useCurrencyById";
import Chart from "../Chart/Chart";
import InfoSection from "../InfoSection/InfoSection";
import "./pageInfoCurrency.scss";
import { useCurrencyHistory } from "../../hooks/useCurrencyHistory";
import { useState } from "react";
import { radioOptions } from "../../data/radioOptions";

export default function PageInfoCurrency() {
  const idCurrency = new URLSearchParams(window.location.search).get("id");
  const { isLoadingCurrency, isError, currencyData } = useCurrencyById(idCurrency!);
  const [value, setValue] = useState("h1");
  const { status, data } = useCurrencyHistory(idCurrency!, value);

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    setValue(value);
  };

  if (isError) {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="link" href="/">
            Back Home
          </Button>
        }
      />
    );
  }

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
