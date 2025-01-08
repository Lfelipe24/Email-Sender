import React, { FC } from "react";
import { Card } from "antd";

interface CardComponentProps {
  title?: string;
  children: React.ReactNode;
}

export const CardComponent: FC<CardComponentProps> = ({ title, children }) => {
  return (
    <Card
      className="!rounded-2xl w-full h-full"
    >
      {title && <h1 className="w-full text-center text-xl font-light mb-8">{title}</h1>}
      {children}
    </Card>
  );
};
