import React from "react";
import styled from "styled-components";

const InfoBox = ({label, value, color}) => {
    const InfoBoxElement = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;
      background-color: white;
      padding: 2rem;
      margin-left: 1rem;
    `
    const BadgeBox = styled.div`
      height: 48px;
      width: 48px;
      background-color: ${color};
      border-radius: 1rem;
      margin-right: 1rem;
    `
    const InfoLabel = styled.div`
      color: var(--clr-light-text);
      font-weight: 600;
    `
    const InfoValue = styled.h2`
      margin: 0;
      padding: 0;
      
    `
    return (
        <InfoBoxElement>
            <BadgeBox />

            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <InfoLabel >
                    {label}
                </InfoLabel>
                <InfoValue >
                    {value}
                </InfoValue>
            </div>
        </InfoBoxElement>
    )
}

export default InfoBox