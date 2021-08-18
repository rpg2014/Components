// Generated with util/create-component.js
import React from "react";

import { ButtonProps } from "./Button.types";

import "./Button.scss";

const Button: React.FC<ButtonProps> = ({ label, onClick }: ButtonProps) => (
    <>
    <button data-testid="Button" className="button" onClick={onClick}>{label}</button>
    </>
);

export default Button;

