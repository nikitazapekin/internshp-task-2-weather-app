import Banner from "@components/Banner";
import Modal from "@components/Modal";
import { GlobalStyle, PageWrapper, Reset, WrapperContainer } from "@styles";
import { useState } from "react";

const WeekWeatherPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PageWrapper>
      <WrapperContainer>
        <GlobalStyle />
        <Reset />
        <Banner />
        {isModalOpen && <Modal onClose={handleCloseModal} errorMessage="The error was occured" />}
      </WrapperContainer>
    </PageWrapper>
  );
};

export default WeekWeatherPage;
