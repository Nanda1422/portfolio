import React from "react";
import styled from "styled-components";
import { certificates } from "../../Data/constants";
import CertificateCard from "../Cards/CertificateCard";

const Section = styled.section`
  width: 100%;
  padding: 60px 0 40px 0;
  background: ${({ theme }) => theme.bg};
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 36px;
  font-size: 1.1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
`;

const Certificates = () => (
  <Section id="certificates">
    <Container>
      <Title>Certificates & Achievements</Title>
      <Subtitle>
        Continuous learning and improvement are the keys to success.
      </Subtitle>
      <Grid>
        {certificates.map((cert, idx) => (
          <CertificateCard key={idx} cert={cert} />
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Certificates;