import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputBaseField from "../input/InputBaseField";
import style from "../../styles/modal.module.scss";
import CustomTextarea from "../input/TextArea";
import DropDownField from "../dropdown/DropDownField";
import ReCAPTCHA from "react-google-recaptcha";
import ButtonComponent from "../button/Button";

interface FormData {
  isOpen?: boolean;
  handleCloseModal?: () => void;
  title?: string;
}
const ModalData = (props: FormData) => {
  const { isOpen, handleCloseModal, title } = props;
  const optionLabelLocation = ["Noida", "Gurgaon", "Delhi"];
  const [isVerified, setVerified] = useState(false);

  const handleVerify = (token: any) => {
    if (token) {
      setVerified(true);
    }
  };
  return (
    <>
      <Modal
        show={isOpen}
        onHide={handleCloseModal}
        className={`${style.custom_modal}`}
        dialogClassName="modal-lg"
      >
        <Modal.Header className={style.model_header}>
          <Modal.Title className={style.modal_title}>
            <h3
              className={`${style.text_h3} ${style.text} ${style.text_enter}`}
              data-scroll="out"
              data-splitting=""
            >
              {" "}
              {title}
            </h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6 col-md-6 col-sm-12 mb-4">
              <InputBaseField
                className={style.inputfield}
                labelclassname={style.forlabel}
                placeholder="Enter Your Name"
                label="Name"
              />
            </div>
            <div className="col-6 col-md-6 col-sm-12 mb-4">
              <InputBaseField
                className={style.inputfield}
                label="Mobile No."
                labelclassname={style.forlabel}
                placeholder="Enter Your Mobile Number"
              />
            </div>
            <div className="col-6 col-md-6 col-sm-12 mb-4">
              <InputBaseField
                className={style.inputfield}
                label="Email"
                labelclassname={style.forlabel}
                placeholder="Enter Your Email"
              />
            </div>
            <div className="col-6 col-md-6 col-sm-12 mb-4">
              <DropDownField
                className={style.dropdown_data}
                optionlabel={optionLabelLocation}
                labelclassname={style.forlabel}
                label="Select Your Location"
              />
            </div>
            <div className="col-6 col-md-6 col-sm-12 mb-4">
              <CustomTextarea
                name="message"
                placeholder="Type your message here"
                rows={4}
                className={style.textArea}
                label="Message"
                labelclassname={style.forlabel}
              />
            </div>
            <div className="col-6 col-md-6 col-sm-12 mb-4">
              <div className={style.Recaptcha_google}>
                <ReCAPTCHA
                  sitekey="6LdJozMoAAAAAGLQ0PybXe-96SiE5kjEBw5roo9i"
                  onChange={handleVerify}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className={style.custom_footer}>
          <ButtonComponent
            buttonclassname={style.button_custom}
            label="Submit"
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalData;
