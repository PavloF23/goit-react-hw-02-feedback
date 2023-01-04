import { ButtonContainer, Button } from './Feedbacks.styled';
import PropTypes from 'prop-types';

export function Feedbacks ({feedbacks, onLeaveFeedback}) {
    return(
        <ButtonContainer>
            {feedbacks.map(feedback =>(
                <Button type="button" key={feedback} onClick={() => onLeaveFeedback(feedback)}>
                    {feedback}
                </Button>
            ))}
        </ButtonContainer>
    )
}

Feedbacks.propTypes = {
    feedback: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};