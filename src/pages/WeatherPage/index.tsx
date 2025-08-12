import { useState } from "react";
import Banner from "@components/Banner";
import Modal from "@components/Modal";
import { UI_CONSTANTS } from "@constants/UI";
import { GlobalStyle, PageWrapper, Reset, WrapperContainer } from "@styles";

const WeekWeatherPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const { defaultErrorMessage, defaultErrorTitle } = UI_CONSTANTS.errorsModal;

  return (
    <PageWrapper>
      <WrapperContainer>
        <GlobalStyle />
        <Reset />
        <Banner />
        {isModalOpen && (
          <Modal
            onClose={handleCloseModal}
            title={defaultErrorTitle}
            message={defaultErrorMessage}
          />
        )}
      </WrapperContainer>
    </PageWrapper>
  );
};

export default WeekWeatherPage;
