import { Header } from "ui/header/header";
import { Footer } from "ui/footer/footer";
export const Layout = ({children}) => {
    return (
        <div>
            <Header></Header>
                {children}
            <Footer></Footer>
        </div>
    );
  };