import {useState, useEffect, SetStateAction, Dispatch} from "react";

type TEmail = {
  isValid: number;
  mailOne: string;
  mailTwo: string;
  validate: Function;
  setEmails: Function;
};

const useEmailValidation = (): TEmail => {
  // Use number instead of boolean so that the value can cover both inputs
  // so they both don't toggle error
  const [isValid, setisValid] = useState<number>(0);
  const [emailOne, setEmailOne] = useState<string>("");
  const [emailTwo, setEmailTwo] = useState<string>("");

  // Removes the error as soon as user starts typing
  // if there is an error in place
  useEffect(() => {
    if (isValid !== 0) setisValid(0);
  }, [emailOne, emailTwo]);

  // Updates either input values from the two inputs on the landing page
  const setEmails = (value: string, inputNr: number) => {
    inputNr == 1 ? setEmailOne(value) : setEmailTwo(value);
  };

  // validates the email
  // if it's not valid email the input error will appear
  // if it is valid vill remove the input value
  const validate = (inputNr: number, email: string): void => {
    var re = /\S+@\S+\.\S+/;
    if (re.test(email)) {
      emailOne ? setEmailOne("") : setEmailTwo("");
      setisValid(0);
    } else {
      setisValid(inputNr);
    }
  };

  return {
    isValid: isValid,
    mailOne: emailOne,
    mailTwo: emailTwo,
    validate: validate,
    setEmails: setEmails,
  };
};

export default useEmailValidation;
