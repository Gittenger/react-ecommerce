import styled from "styled-components";

import device from "../../styles.utils";

const { tablet } = device;

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  h1 {
    font-size: 28px;
    margin-bottom: 25px;
  }

  @media ${tablet} {
    align-items: center;
  }
`;

export const CollectionPreviewItems = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;
