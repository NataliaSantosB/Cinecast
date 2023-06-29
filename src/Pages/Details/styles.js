import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem;

  img {
    width: 300px;
    border-radius: 2.5rem;
  }

  button {
    background: #6655da;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: all 0.3s;
  }

  button:hover {
    background: #5848c2;
  }

  span {
    font-weight: normal;
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 100%;
  }

  li {
    text-decoration: none;
  }

  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    max-width: 50%;
  }
  .release-date {
    opacity: 0.7;
    font-weight: 100;
    margin: 1rem 0;
  }

  .genero {
    font-size: 14px;
  }

  .lista {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .genres {
    padding-right: 4px;
    font-size: 14px;
  }

  .title-original {
    font-weight: 100;
    font-size: 12px;
    opacity: 0.7;
    padding-right: 4px;
    font-style: italic;
  }

  .title {
    text-align: left;
    margin: 0.5rem 0;
    font-weight: 600;
    color: #00bfff;
  }
`;
