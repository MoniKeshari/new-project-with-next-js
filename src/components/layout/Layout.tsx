
import { ReactNode } from "react";
import NavBar from "../navbar/NavBar";
import FooterComponent from "../footer/FooterComponent";
import ModalData from "../modal/ModalData";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";
import { closeModal } from "@/redux-toolkit/firstslice";
type LayoutProps = {
  children: ReactNode;
  className?: string;
};

const Layout = ({ children }: LayoutProps) => {
  const { isOpen } = useSelector((state: RootState) => state.modalSlice);
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <>

      <NavBar />
      <div className="my-layout">
        {children}
      </div>

      <ModalData
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        title="Contact Form"
      />

      <FooterComponent />

    </>
  );
};

export default Layout;






