import React from "react";
import { FaCircleNotch } from "react-icons/fa";
import {ButtonSpinner} from "./styles"


interface ISpinnerProps {
    loadding:boolean;
}

const Spinner: React.FC<ISpinnerProps> = ({loadding}) => (
    <ButtonSpinner loadding={loadding} >
        <FaCircleNotch />
    </ButtonSpinner>
);

export default Spinner;