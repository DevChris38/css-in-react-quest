import styled from "styled-components";

const Img = styled.img`
  position: absolute;
  top: 0;
  height: 201px;
  width: 473px;
  border: none;
  z-index: 0;
`;

const DivImg = styled.div`
  position: absolute;
  top: 0;
  height: 201px;
  width: 473px;
  z-index: 1;
  background-color: hsla(0, 0%, 0%, 0%);
  color: hsla(0, 0%, 0%, 0%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  &:hover {
    background-color: hsla(0, 0%, 0%, 50%);
    color: lightgrey;
  }
`;

const Title = styled.h1`
  background-color: hsla(0, 0%, 0%, 0%);
  width: 100%;
  text-align: center;
  height: fit-content;
`;

const P = styled.p`
  background-color: hsla(0, 0%, 0%, 0%);
  width: 100%;
  text-align: center;
  height: fit-content;
`;

export default function FilmComponent() {
  return (
    <>
      <DivImg>
        <Title>Cauchemar de rêve</Title>
        <P>
          Ecrit et réalisé par Noé SAMSON <br /> MONKEEZ production
        </P>
      </DivImg>
      <Img src="src/assets/film-noe.png" alt=""></Img>
    </>
  );
}
