import { Button, ContainerBtn } from './Feedback.styled';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <ContainerBtn>
      {options.map(option => {
        return (
          <Button
            style={{
              fontSize: 30,
            }}
            key={option}
            name={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        );
      })}
    </ContainerBtn>
  );
};
export default Feedback;
