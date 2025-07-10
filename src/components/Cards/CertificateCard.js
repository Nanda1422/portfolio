import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  box-shadow: 0 2px 12px ${({ theme }) => theme.primary}22;
  padding: 24px 20px;
  display: flex;
  align-items: center;
  gap: 18px;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 24px ${({ theme }) => theme.primary}44;
  }
`;

const Icon = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.primary}33;
  background: ${({ theme }) => theme.bgLight || "#fff"};
`;

const Info = styled.div`
  flex: 1;
`;

const CertTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const CertIssuer = styled.div`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 2px;
`;

const CertDate = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text_secondary};
`;

const CertLink = styled.a`
  display: inline-block;
  margin-top: 6px;
  color: ${({ theme }) => theme.primary};
  font-size: 0.95rem;
  text-decoration: underline;
`;

const CertificateCard = ({ cert }) => (
  <Card>
    <Icon src={cert.image} alt={cert.title} />
    <Info>
      <CertTitle>{cert.title}</CertTitle>
      <CertIssuer>{cert.issuer}</CertIssuer>
      <CertDate>{cert.date}</CertDate>
      {cert.url && (
        <CertLink href={cert.url} target="_blank" rel="noopener noreferrer">
          View Certificate
        </CertLink>
      )}
    </Info>
  </Card>
);

export default CertificateCard;