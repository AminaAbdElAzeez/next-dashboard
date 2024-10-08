"use client";
import "../../globals.css";
import { useState, useEffect } from "react";
import {
  BarChartOutlined,
  HomeOutlined,
  LineChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, theme, Dropdown, Avatar, Typography } from "antd";
import { useRouter } from "next/navigation";
import NavLinks from "@/app/_components/nav-links";
import { isAuthenticated } from "@/app/_actions/isAuthenticated";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [themeState, setThemeState] = useState("light");
  const [userName, setUserName] = useState("");
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    } else {
      const cookies = document.cookie.split("; ");
      const nameCookie = cookies.find((row) => row.startsWith("name="));
      if (nameCookie) {
        const nameValue = decodeURIComponent(nameCookie.split("=")[1]);
        setUserName(nameValue);
      }
    }

    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
  }, [router]);

  const handleLogout = () => {
    document.cookie = "token=; Max-Age=0; Path=/;";
    document.cookie = "name=; Max-Age=0; Path=/;";
    router.push("/login");
  };

  const changeTheme = (newTheme) => {
    setThemeState(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    document.cookie = `theme=${newTheme}; Path=/;`;
    localStorage.setItem("theme", newTheme);
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    document.cookie = `language=${newLanguage}; Path=/;`;
    localStorage.setItem("language", newLanguage);
  };

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") ||
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("theme="))
        ?.split("=")[1];

    if (savedTheme) {
      setThemeState(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const defaultTheme = prefersDark ? "dark" : "light";
      setThemeState(defaultTheme);
      document.documentElement.setAttribute("data-theme", defaultTheme);
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      const newTheme = e.matches ? "dark" : "light";
      if (themeState === "system") {
        setThemeState(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [themeState]);

  const themeMenuItems = [
    {
      key: "light",
      label: (
        <Button
          type={themeState === "light" ? "primary" : "default"}
          onClick={() => changeTheme("light")}
        >
          Light
        </Button>
      ),
    },
    {
      key: "dark",
      label: (
        <Button
          type={themeState === "dark" ? "primary" : "default"}
          onClick={() => changeTheme("dark")}
        >
          Dark
        </Button>
      ),
    },
    {
      key: "system",
      label: (
        <Button
          type={themeState === "system" ? "primary" : "default"}
          onClick={() => changeTheme("system")}
        >
          System
        </Button>
      ),
    },
  ];

  return (
    <html lang={language} dir={language === "ar" ? "rtl" : "ltr"}>
      <body>
        <div style={{ width: "100%", height: "100%" }}>
          <Layout
            style={{
              minHeight: "100vh",
              backgroundColor: "var(--sidebar)",
            }}
          >
            <Sider
              trigger={null}
              collapsible
              collapsed={collapsed}
              style={{ backgroundColor: "var(--sidebar)" }}
            >
              <div
                style={{ padding: "100px 15px 20px 15px", textAlign: "center" }}
              >
                <Avatar
                  icon={
                    <UserOutlined
                      style={{ fontSize: collapsed ? "20px" : "25px" }}
                    />
                  }
                  style={{
                    marginBottom: "10px",
                    width: collapsed ? "50px" : "65px",
                    height: collapsed ? "50px" : "65px",
                    transition: "width 0.5s , height 0.5s",
                    backgroundColor: "#bfbfbf",
                  }}
                />
                {!collapsed && (
                  <Text
                    style={{
                      color: "var(--primary-color)",
                      fontSize: "18px",
                      marginBottom: "10px",
                      textTransform: "capitalize",
                      display: "block",
                      fontWeight: "700",
                    }}
                  >
                    {userName || "User"}
                  </Text>
                )}
              </div>
              <ul className="nav-links">
                <li>
                  <NavLinks href="/dashboard">
                    <HomeOutlined
                      style={{
                        fontSize: "23px",
                        margin: "0 7px",
                        paddingLeft: "4px",
                        fontWeight: "900",
                      }}
                    />
                    {!collapsed && <span>dashboard</span>}
                  </NavLinks>
                </li>
                <li>
                  <NavLinks href="/dashboard/team">
                    <UsergroupAddOutlined
                      style={{
                        fontSize: "23px",
                        margin: "0 7px",
                        paddingLeft: "4px",
                        fontWeight: "900",
                      }}
                    />
                    {!collapsed && <span>team</span>}
                  </NavLinks>
                </li>
                <li>
                  <NavLinks href="/dashboard/line-chart">
                    <LineChartOutlined
                      style={{
                        fontSize: "23px",
                        margin: "0 7px",
                        paddingLeft: "4px",
                        fontWeight: "900",
                      }}
                    />
                    {!collapsed && <span>Line chart</span>}
                  </NavLinks>
                </li>
                <li>
                  <NavLinks href="/dashboard/bar-chart">
                    <BarChartOutlined
                      style={{
                        fontSize: "23px",
                        margin: "0 7px",
                        paddingLeft: "4px",
                        fontWeight: "900",
                      }}
                    />
                    {!collapsed && <span>bar chart</span>}
                  </NavLinks>
                </li>
                <li>
                  <NavLinks href="/dashboard/radial-chart">
                    <PieChartOutlined
                      style={{
                        fontSize: "23px",
                        margin: "0 7px",
                        paddingLeft: "4px",
                        fontWeight: "900",
                      }}
                    />
                    {!collapsed && <span>Radial chart</span>}
                  </NavLinks>
                </li>
              </ul>
            </Sider>
            <Layout>
              <Header
                style={{
                  padding: 0,
                  background: "var(--sidebar)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0 16px",
                }}
              >
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: "16px",
                    width: 64,
                    height: 64,
                    color: "var(--collapse-btn)",
                  }}
                />

                <div>
                  <Dropdown
                    menu={{ items: themeMenuItems }}
                    trigger={["click"]}
                  >
                    <Button>
                      {themeState.charAt(0).toUpperCase() + themeState.slice(1)}
                      <span aria-hidden="true"> ▼</span>
                    </Button>
                  </Dropdown>

                  <Button
                    type="default"
                    onClick={() =>
                      changeLanguage(language === "en" ? "ar" : "en")
                    }
                    style={{ marginLeft: "8px" }}
                  >
                    {language === "en" ? "العربية" : "English"}
                  </Button>

                  <Button
                    type="primary"
                    onClick={handleLogout}
                    style={{ marginLeft: "8px" }}
                  >
                    Logout
                  </Button>
                </div>
              </Header>
              <Content
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  minHeight: 280,
                  background: "var(--sec-background)",
                  borderRadius: borderRadiusLG,
                }}
              >
                {children}
              </Content>
            </Layout>
          </Layout>
        </div>
      </body>
    </html>
  );
}
