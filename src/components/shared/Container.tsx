import styles from "@/components/shared/Container.module.scss";

import { ReactNode, FC, CSSProperties } from "react";

type Props = {
    style?: CSSProperties;
    children: ReactNode;
};

const Container: FC<Props> = ({ style, children }) => {
    return (
        <div style={style} className={`${styles.container}`}>
            {children}
        </div>
    );
};

export default Container;
