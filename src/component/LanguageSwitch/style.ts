import styled from "styled-components";

const LanguageSwitcherWrapper = styled.div`
  .flag {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    object-fit: contain;

    @media only screen and (max-width: 550px) {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

const MenuIconWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;

  img {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: contain;
    margin-right: 1rem;
    border-radius: 3px;
  }
`;

export { LanguageSwitcherWrapper, MenuIconWrapper };
