import { ButtonContainer, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

//функція для рендерінга реакт компонента (колекції кнопок);
export function FeedbackOptions  ({options, onLeaveFeedback}) {
    return(
        <ButtonContainer>
            {options.map(option =>(
                <Button type="button" key={option} onClick={() => onLeaveFeedback(option)}>
                    {option}
                </Button>
            ))}
        </ButtonContainer>
    )
};

FeedbackOptions.propTypes = {
    option: PropTypes.arrayOf(PropTypes.string),   //.isRequired ?
    onLeaveFeedback: PropTypes.func.isRequired,
};