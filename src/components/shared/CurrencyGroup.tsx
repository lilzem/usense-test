import styles from "@/components/shared/CurrencyGroup.module.scss";

import { FC } from "react";
import Select from "../ui/Select";
import { CURRENCIES } from "@/lib/constants";
import { Input } from "@mui/material";

type Props = {
    value: number;
    handleValueChange: (v: number) => void;
    currency: string;
    handleCurrencyChange: (v: string) => void;
};

const CurrencyGroup: FC<Props> = ({
    value,
    currency,
    handleCurrencyChange,
    handleValueChange,
}) => {
    return (
        <div className={styles.container}>
            <Input
                placeholder="type in..."
                value={value}
                onChange={(e) => handleValueChange(+e.target.value)}
            />
            <Select
                options={CURRENCIES}
                onSelect={handleCurrencyChange}
                selected={currency}
            />
        </div>
    );
};

export default CurrencyGroup;
