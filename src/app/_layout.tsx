import { Stack } from "expo-router";

const Layout = (): JSX.Element => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#467FD3",
        },
        headerTintColor: "#ffffff",
        headerTitle: "メモ帳",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: "bold",
        },
        headerBackTitle: "戻る",
        headerBackTitleStyle: {
          fontSize: 22,
          fontFamily: "bold",
        },
      }}
    />
  );
};

export default Layout;
