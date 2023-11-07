import styled from "styled-components";

const DemoPageWrapper = styled.div`
  .title {
    font-size: 24px;

    height: 120%;
    background: #f2f2f2;
    border-bottom: #b4aeae;
  }

  .upload-text {
    font-size: 18px;
    margin: 5px 0;
  }

  .preview-image {
    height: 400px;
    width: 300px;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;

    .wrapper-item {
      flex: 0.3;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }

  .button-wrapper {
    display: flex;
    justify-content: center;

    .process,
    .reset {
      margin-top: 10px;
    }

    .reset {
      margin-left: 10px;
      background: red !important;
    }
  }

  .note {
    font-size: 18px;
  }

  .progress {
    max-width: 400px;
  }

  .result-image {
  }
`;

export { DemoPageWrapper };
