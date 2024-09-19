import { useEffect, useState } from "react";

import styles from "@/components/shared/Header.module.scss";

import logoIcon from "@/assets/logo.png";
import eurIcon from "@/assets/europe-flag-icon.svg";
import usIcon from "@/assets/united-states-flag-icon.svg";
import Container from "./Container";
import { getRates } from "@/api/currencies";

const Header = () => {
    const [rates, setRates] = useState({ usd: "0", eur: "0" });

    useEffect(() => {
        getRates("UAH").then((data) => {
            setRates({
                usd: (1 / data.conversion_rates.USD).toFixed(2),
                eur: (1 / data.conversion_rates.EUR).toFixed(2),
            });
        });
    }, []);
    return (
        <header>
            <Container
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px",
                }}
            >
                <div className={styles.logo_wrapper}>
                    <img src={logoIcon} />
                    <p>Currency Converter</p>
                </div>

                <div className={styles.converter_wrapper}>
                    <div>
                        <p>{rates.usd}</p>
                        <img src={usIcon} />
                    </div>

                    <div>
                        <p>{rates.eur}</p>
                        <img src={eurIcon} />
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
