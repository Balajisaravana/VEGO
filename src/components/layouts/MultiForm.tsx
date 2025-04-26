import React, { useState, useRef, useEffect } from 'react';
import FieldComponent from '../UI/Field';
import StepsIndicator from '../UI/Step';
// import './styles/MultiStepForm.scss';

interface Field {
  label: string;
  helptext?: string;
  value: string;
  type?: string;
  name?: string;
  options?: string[];
  optional?: boolean;
  validations: Validation[];
}

interface Validation {
  message: string;
  test: (value: string) => boolean;
}

interface FieldsType {
  [key: string]: Field;
}

const MultiStepForm: React.FC = () => {
  const [formStarted, setFormStarted] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitSuccess,setSubmitSuccess] = useState<boolean>(false);
  const [submitError,setSubmitError] = useState<boolean>(false);
  const [invalids, setInvalids] = useState<{[key: string]: string | false}>({});

  const formAccessKey = "6c5bb35d-8adf-4d1f-9c16-8de6f52451a2";


  const [fields, setFields] = useState<FieldsType>({
    describe: {
        label: "How did you find us?",
        value: "",
        type: "select",
        name: "describe",
        options: [
          "Im a Agency Power",
          "Social Creator / Influencer",
          "Im a Coach ",
          "Im a Consultant",
          "I'm a VC",
          'Im a Founder',
          "Other",
        ],
        optional: true,
        validations: [],
      },
      name: {
        label: "What is Your Name ",
        helptext: "Howdy Stranger, Let's get acquainted. ",
        value: "",
        validations: [
          {
            message: "Name is required",
            test: (value) => !value.trim(),
          },
          {
            message: "Name must be at least 2 characters",
            test: (value) => value.trim().length < 2,
          },
        ],
      },
      email: {
        label: "Email",
        helptext: "Thank you, now provide your email to contact you. ",
        value: "",
        validations: [
          {
            message: "Must be a valid email address",
            test: (value) => !validateEmail(value),  // ← notice the "!"
          },
          {
            message: "Email is required",
            test: (value) => !value.trim(),
          },
        ],
      },
      contact: {
        label: "Contact",
        helptext: "Contact with Country Code is a required field",
        value: "",
        validations: [
          {
            message: "Contact with Country Code is a required field",
            test: (value) => !value.trim(),
          }
        ],
      },
      socials: {
        label: "Provide your Social Media Details LinkedIn / Facebook / Youtube / Instagram / Others",
        value: "",
        validations: [
          {
            message: "Social is a required field",
            test: (value) => !value.trim(),
          },
        ],
      },
      information : {
        label: "what was your average Monthly Revenue ?",
        value: "",
        type: "select",
        name: "information",
        options: [
         '$0k to $10K',
        '$20k to $30K',
        '$30k to $40K'
        ],
        optional: true,
        validations: [],
      }
      
      
  });

  const steps = [
    ["describe"],
    ['name'],
    ["email"],
    ['contact'],
    ["socials"],
    ["information"],
  ];

  const currentFields = steps[currentStep];
  const totalSteps = steps.length;
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;
  const isInvalid = Object.values(invalids).some(value => value !== false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (formStarted) {
      inputRef.current?.focus();
    }
  }, [formStarted, currentStep]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (!formStarted) {
          setFormStarted(true);
        } else if (!isLastStep && !isInvalid) {
          handleNextStep();
        } else {
          handleSubmit();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [formStarted, isLastStep, isInvalid, currentStep]);

  const handleStartForm = () => {
    setFormStarted(true);
  };

  const handlePreviousStep = () => {
    if (isFirstStep) return;
    setInvalids({});
    setCurrentStep(currentStep - 1);
  };

  // const handleNextStep = () => {
  //   if (isLastStep) return;
  //   validate();
  //   if (isInvalid) return;
  //   setCurrentStep(currentStep + 1);
  // };
  const handleNextStep = () => {
    const newInvalids: { [key: string]: string | false } = {};
    currentFields.forEach((key) => {
      validateField(key, newInvalids);
    });
  
    setInvalids(newInvalids);
  
    const hasInvalid = Object.values(newInvalids).some((value) => value !== false);
    if (hasInvalid) return;
  
    setCurrentStep(currentStep + 1);
  };
  



  const validateField = (fieldKey: string, invalidObj: { [key: string]: string | false } = invalids) => {
    invalidObj[fieldKey] = false;
    const field = fields[fieldKey];
  
    for (const validation of field.validations) {
      const isInvalid = validation.test(field.value);  // ← cleaner naming
      if (isInvalid) {
        invalidObj[fieldKey] = validation.message;
        break;
      }
    }
  };
  

  const handleFieldChange = (fieldKey: string, value: string) => {
    setFields({
      ...fields,
      [fieldKey]: {
        ...fields[fieldKey],
        value: value,
      },
    });

    // Validate field when changed
    const newInvalids = {...invalids};
    validateField(fieldKey, newInvalids);
    setInvalids(newInvalids);
  };

  const handleSubmit = async () => {
    // validate();
    // if (isInvalid) return;
    
    // setSubmitted(true);
    const newInvalids: { [key: string]: string | false } = {};
  steps.flat().forEach((key) => {
    validateField(key, newInvalids);
  });

  setInvalids(newInvalids);

  const hasInvalid = Object.values(newInvalids).some((value) => value !== false);
  if (hasInvalid) return; // Prevent submit if any invalids

  setSubmitted(true);

    
    const object: {[key: string]: string} = {
      access_key: formAccessKey,
      subject: "New submission from multistep form",
    };
    
    for (const key in fields) {
      object[key] = fields[key].value;
    }
    
    console.log("Submitting form..", object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(object),
      });
      
      const result = await response.json();

      if (result.success) {
        console.log(result);
        setSubmitSuccess(true);
      } else {
        console.log(result);
        setSubmitError(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError(true);
    }
  };

  return (
    <div className="multistep-form">
   
      {!formStarted ? (
        <div className="intro-screen">
          <h1>Help us to Understand</h1>
          <p>
           Try Answering the Following Question for Better Understanding for us
          </p>
          <div className="start-button-container">
            <button onClick={handleStartForm} className="start-button">
              Start
            </button>
            <span className="key-hint">
              press <span className="key">Enter ↵</span>
            </span>
          </div>
        </div>
      ) : (
        <div className="form-container">
             <h1>Contact us</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <StepsIndicator stepsCount={totalSteps} currentStep={currentStep} submitted={submitted} />

            {!submitSuccess && !submitError && (
              <>
                {steps[currentStep].map((fieldKey, index) => (
                  <FieldComponent
                    key={fieldKey}
                    field={fields[fieldKey]}
                    fieldNum={currentStep + index + 1}
                    isInvalid={!!invalids[fieldKey]}
                    invalidMessage={invalids[fieldKey] as string}
                    onChange={(value) => handleFieldChange(fieldKey, value)}
                    ref={index === 0 ? inputRef : null}
                  />
                ))}

                <div className="action-buttons">
                  {!isLastStep ? (
                    <button className="next-button" onClick={handleNextStep}>
                      <span className='next-OK'>OK</span>
                      <svg height="13" width="16" fill="white">
                        <path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path>
                      </svg>
                    </button>
                  ) : (
                    <button className="submit-button" onClick={handleSubmit}>
                      <span className='submit-OK'>{!submitted ? "Submit" : "Submitting.."}</span>
                    </button>
                  )}
                  <span className="key-hint">
                    press <span className="key">Enter ↵</span>
                  </span>
                </div>

                <footer className="form-footer">
                  <button
                    disabled={isLastStep}
                    className="nav-button next"
                    onClick={handleNextStep}
                  >
                    <svg height="9" width="14" fill="currentColor">
                      <path d="M12.293.293l1.414 1.414L7 8.414.293 1.707 1.707.293 7 5.586z"></path>
                    </svg>
                  </button>
                  <button
                    disabled={isFirstStep}
                    className="nav-button prev"
                    onClick={handlePreviousStep}
                  >
                    <svg height="9" width="14" fill="currentColor">
                      <path d="M11.996 8.121l1.414-1.414L6.705 0 0 6.707l1.414 1.414 5.291-5.293z"></path>
                    </svg>
                  </button>
                </footer>
              </>
            )}

            {submitted && submitSuccess && (
              <div className="success-message">
                <h3>
                  Hey <strong>{fields.name.value}</strong>, thanks for Interest Team will reach out You Shortly !
                </h3>
              </div>
            )}

            {submitted && submitError && (
              <div className="error-message">
                <h3>
                  Sorry <strong>{fields.name.value}</strong>, Something went wrong. Try again later
                </h3>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
// function validateEmail(email: string) {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(email.trim());
// }

export default MultiStepForm;