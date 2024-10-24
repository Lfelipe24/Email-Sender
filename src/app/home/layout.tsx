"use client";
import React from "react";
import { PropsWithChildren } from "react";
import { Layout, Grid, Button, Avatar, Dropdown } from "antd";
import { useRouter, usePathname } from "next/navigation";
import { LogoutOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;
const { useBreakpoint } = Grid;

function LayoutHome({ children }: PropsWithChildren) {
  const router = useRouter();

  const onLogOut = () => {
    router.push("/auth/sign-in");
  };

  return (
    <Layout className="!min-h-[100vh] flex flex-col">
      <Header className="flex items-center justify-between">
        <div className="sm:flex sm:flex-row h-full">
          <div>{/* Image Logo */}</div>
        </div>
        <div className="flex items-center flex-1 justify-end">
          {/* About page */}
            <Dropdown
            className="hover:cursor-pointer"
              trigger={["click"]}
              menu={{
                items: [
                    {
                        key: "user",
                        label: "Felipe Fernandez",
                        disabled: true
                      },
                  {
                    key: "sign-out",
                    label: "Sign out",
                    icon: <LogoutOutlined />,
                    onClick: onLogOut,
                  },
                ],
              }}
            >
              <Avatar className="!bg-cyan-800 !text-white">FF</Avatar>
            </Dropdown>
        </div>
      </Header>
      <Content className="flex-1 flex flex-col">
        <div className="flex flex-1">{children}</div>
      </Content>
    </Layout>
  );
}

export default LayoutHome;
