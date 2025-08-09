import Banner from "@components/Banner";
import Modal from "@components/Modal";
import { GlobalStyle, PageWrapper, Reset, WrapperContainer } from "@styles";
import { useState } from "react";

const WeekWeatherPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PageWrapper>
      <WrapperContainer>
        <GlobalStyle />
        <Reset />
        <Banner />
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      </WrapperContainer>
    </PageWrapper>
  );
};

export default WeekWeatherPage;
