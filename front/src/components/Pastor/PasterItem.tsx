import React from "react";
import styled from "styled-components";
import pastorEx from "../../img/pastorEx.jpg";

export const PastorItem = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 15px;
  margin: 15px;
  gap: 5px;
`;

interface PasterItem {
  name: string;
  phone?: string;
}

export default function PasterItem({ name, phone }: PasterItem) {
  return (
    <PastorItem>
      <img src={pastorEx} alt="" width="100%" height="100%" />
      <p>{name}</p>
      <p>{phone}</p>
    </PastorItem>
  );
}
