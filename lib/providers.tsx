"use client";
import { Provider } from "react-redux";
import { store } from "@/store/index";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./query-client";
import { ConfigProvider } from "antd";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#000",
              borderRadius: 8,
            },
          }}
        >
          {children}
        </ConfigProvider>
      </QueryClientProvider>
    </Provider>
  );
}