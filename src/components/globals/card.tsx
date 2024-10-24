import React, { FC } from "react";
import { Card } from "antd";

interface CardComponentProps {
  title?: string;
  children: React.ReactNode;
}

export const CardComponent: FC<CardComponentProps> = ({ title, children }) => {
  return (
    <Card
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
      <h1 className="text-center w-full text-2xl font-light mb-8">{title}</h1>
      {children}
    </Card>
  );
};
