import Head from 'next/head'
import styled from 'styled-components';

export default function Home() {
  return (
    <GridLayout>
      {Array.from({ length: 5 }).map((a,index) => (
        <Card key={index} />
      ))}
    </GridLayout>
  )
}


const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
`;

const Card = styled.div`
  background: #303035;
  padding-top: 56.25%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;