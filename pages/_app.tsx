import "../styles/global.scss";
import type { AppProps } from "next/app";
import Navigation from "../components/navigation/Navigation";
const Child: React.FC = ({ children }) => {
  //max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
  return (
    <div className="*bg-hero-pattern3 bg-cover bg-opacity-30">{children}</div>
  );
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Child>
        <Navigation />
        <Component {...pageProps} />
      </Child>
    </>
  );
};
export default App;
