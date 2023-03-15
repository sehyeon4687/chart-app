import styled from "styled-components";

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <TooltipStyle className="custom-tooltip">
        <p>{`id: ${payload[0].payload.id}`}</p>
        <p>{`value_area: ${payload[0].payload.value_area}`}</p>
        <p>{`value_bar: ${payload[0].payload.value_bar}`}</p>
      </TooltipStyle>
    );
  }
  return null;
};

export default CustomTooltip;

const TooltipStyle = styled.div`
  background-color: white;
  border: 3px solid #8884d8;
  padding: 0 10px;
`;
