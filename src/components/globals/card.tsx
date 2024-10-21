import React, { FC } from "react";
import { Card } from "antd";

interface CardComponentProps {
  title?: string;
  children: React.ReactNode;
}

export const CardComponent: FC<CardComponentProps> = ({ title, children }) => {
  return (
    <Card
      title={<h1 className="text-center w-full text-2xl font-light">{title}</h1>}
      style={{
        borderRadius: "16px",
      }}
      styles={{
        body: {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      {children}
    </Card>
  );
};
