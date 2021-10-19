import "../styles/global.scss";
import type { AppProps } from "next/app";
import Navigation from "../components/navigation/Navigation";
const Child: React.FC = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">{children}</div>
  );
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navigation />
      <Child>
        <Component {...pageProps} />
      </Child>
    </>
  );
};
export default App;
