import React, { ReactNode, CSSProperties } from "react";

interface GradientBackgroundComponentProps {
  children: ReactNode;
  style?: CSSProperties;
}

export const GradientBackgroundComponent: React.FC<GradientBackgroundComponentProps> = ({
  children,
  style,
}) => {
  return (
    <div
      className="bg-gradient-to-br from-gray-800 via-blue-900 to-gray-300"
      style={{ minHeight: "100vh", ...style }}
    >
      {children}
    </div>
  );
};
