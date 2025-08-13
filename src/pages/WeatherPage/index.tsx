import { useState } from "react";
import Banner from "@components/Banner";
import ErrorModal from "@components/ErrorModal";
import { UI_CONSTANTS } from "@constants/UI";
import { GlobalStyle, PageWrapper, Reset, WrapperContainer } from "@styles";

const WeekWeatherPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleCloseModal = (): void => {
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
          <ErrorModal
            errorMessage={defaultErrorMessage}
            errorTitle={defaultErrorTitle}
            onClose={handleCloseModal}
          />
        )}
      </WrapperContainer>
    </PageWrapper>
  );
};

export default WeekWeatherPage;
