import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "../redux-toolkit/store";
import 'react-multi-carousel/lib/styles.css';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
   
        <Component {...pageProps} />
    
    </Provider>
  );
}

export default MyApp;
