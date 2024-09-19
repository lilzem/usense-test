import { FC } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

type Props = {
    options: string[];
    selected: string;
    onSelect: (v: string) => void;
};

const CurrencySelect: FC<Props> = ({ options, selected, onSelect }) => {
    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selected}
                onChange={(e) => onSelect(e.target.value)}
                label="Currencies"
            >
                {options.map((item, index) => (
                    <MenuItem key={index} value={item}>
                        {item}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CurrencySelect;
