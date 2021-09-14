import React, { FC } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";

interface IProps { };

const FormularioSimples: FC<IProps> = (props) => (
    <>
        <Input placeholder="username"/>
        <Input placeholder="password" type="password"/>
        <Button block loading={true}> Enviar </Button>
    </>
);

export default FormularioSimples;