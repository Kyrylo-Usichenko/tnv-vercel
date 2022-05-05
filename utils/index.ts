import { FormState } from '../types';

export const addSpaceToPhone = (
  event: any,
  phoneInputValue: string,
  callBack: React.Dispatch<React.SetStateAction<FormState>>,
) => {
  if ((phoneInputValue.length === 12 || event.code === 'Space') && event.code !== 'Backspace') {
    event.preventDefault();
  }

  if ((phoneInputValue.length === 2 || phoneInputValue.length === 7) && event.code !== 'Backspace') {
    callBack((prevState) => ({
      ...prevState,
      phone: prevState.phone + ' ',
    }));
  }
};
