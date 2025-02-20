import type { AppProps } from "next/app";
import "../styles/global.scss";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AxiosProvider from "@/app/context/AxiosContext";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { LoadingContext } from "@/app/context/LoadingContext";
import { useLoading } from "@/app/context/LoadingContext";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { isLoading, setIsLoading } = useLoading();

  const queryClient = new QueryClient();

  return (
    <div className={montserrat.className}>
      <AppCacheProvider {...pageProps}>
        <NextIntlClientProvider
          locale={router.locale}
          timeZone="Europe/Vienna"
          messages={pageProps.messages}
        >
          <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            <QueryClientProvider client={queryClient}>
              <AxiosProvider>
                <ToastContainer />
                <Component {...pageProps} />
              </AxiosProvider>
            </QueryClientProvider>
          </LoadingContext.Provider>
        </NextIntlClientProvider>
      </AppCacheProvider>
    </div>
  );
}
