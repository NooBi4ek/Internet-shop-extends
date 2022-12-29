import styled from 'styled-components';

export const Wrapper = styled.div`
  float: left;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 5vh 2vw 0 0;
  border: 1px solid #a5a5a5;
  padding: 5vh 1vw;
  width: 400px;
`;

export const PhoneName = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const PhoneInfo = styled.div`
  font-size: 20px;
  margin: 1vh 0;
  font-weight: 600;
`;

export const PhoneChar = styled.span`
  font-size: 18px;
`;

export const Price = styled(PhoneChar)`
  color: ${(props) => (props.max.price === props.price ? 'green' : '#000')};
  font-weight: ${(props) => (props.max.price === props.price ? '700' : '600')};
`;

export const Threads = styled(PhoneChar)`
  color: ${(props) =>
    props.max_threads.quantity_threads === props.threads ? 'green' : '#000'};
  font-weight: ${(props) =>
    props.max_threads.quantity_threads === props.threads ? '700' : '600'};
`;

export const Fill = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15%;
  font-size: 64px;
  font-weight: 600;
  font-style: italic;
`;
