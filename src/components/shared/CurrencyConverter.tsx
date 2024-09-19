import styles from "@/components/shared/CurrencyConverter.module.scss";

import { FC, useEffect, useState } from "react";
import CurrencyGroup from "./CurrencyGroup";
import { getRates } from "@/api/currencies";

type Props = {};

const CurrencyConverter: FC<Props> = ({}) => {
    const [rates, setRates] = useState<any>(null);
    const [from, setFrom] = useState({ value: 0, currency: "USD" });
    const [to, setTo] = useState({ value: 0, currency: "EUR" });

    console.log("from", from);
    console.log("to", to);

    const convert = (value: number, from: string, to: string) => {
        if (!rates[from] || !rates[to]) return 0;

        console.log(value, rates[to], rates[from]);
        console.log(
            "result",
            (value * rates[to]) / rates[from],
            (value * rates[from]) / rates[to]
        );

        return Math.round((value * rates[to]) / rates[from]);
    };

    const handleValueChange = (field: string, value: number) => {
        if (field == "from") {
            setFrom({ ...from, value: value });
            setTo({ ...to, value: convert(value, from.currency, to.currency) });

            return;
        }

        setTo({ ...to, value: value });
        setFrom({ ...from, value: convert(value, from.currency, to.currency) });
    };

    const handleCurrencyChange = (field: string, value: string) => {
        if (field == "from") {
            setFrom({ ...from, currency: value });
            setTo({
                ...to,
                value: convert(from.value, value, to.currency),
            });

            return;
        }

        setTo({ ...to, currency: value });
        setFrom({
            ...from,
            value: convert(to.value, value, from.currency),
        });
    };

    useEffect(() => {
        getRates("USD").then((data) => setRates(data.conversion_rates));
    }, []);

    return (
        <div className={styles.container}>
            <CurrencyGroup
                value={from.value}
                handleValueChange={(value) => handleValueChange("from", value)}
                currency={from.currency}
                handleCurrencyChange={(value) =>
                    handleCurrencyChange("from", value)
                }
            />
            <CurrencyGroup
                value={to.value}
                handleValueChange={(value) => handleValueChange("to", value)}
                currency={to.currency}
                handleCurrencyChange={(value) =>
                    handleCurrencyChange("to", value)
                }
            />
        </div>
    );
};

export default CurrencyConverter;
