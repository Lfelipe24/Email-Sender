import React, { FC } from "react";
import { Card } from "antd";

interface CardComponentProps {
    title?: string;
    children: React.ReactNode;
}

export const CardComponent: FC<CardComponentProps> = ({ title, children }) => {
    return (
        <Card title={<h1 className="text-center w-full">{title}</h1>}>
            {children}
        </Card>
    );
};
