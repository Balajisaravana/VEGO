import React, { forwardRef, Ref } from 'react';
// import './styles/FieldComponent.scss';

interface Validation {
  message: string;
  test: (value: string) => boolean;
}

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

interface FieldComponentProps {
  field: Field;
  fieldNum: number;
  isInvalid: boolean;
  invalidMessage: string;
  onChange: (value: string) => void;
}

const FieldComponent = forwardRef((props: FieldComponentProps, ref: Ref<HTMLInputElement>) => {
  const { field, fieldNum, isInvalid, invalidMessage, onChange } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  const handleRadioChange = (value: string) => {
    onChange(value);
  };

  return (
    <div className="field-component">
      <div className="field-wrapper">
        <div className="field-number">
          <span>{fieldNum}</span>
          <svg height="10" width="11" fill="currentColor">
            <path d="M7.586 5L4.293 1.707 5.707.293 10.414 5 5.707 9.707 4.293 8.293z"></path>
            <path d="M8 4v2H0V4z"></path>
          </svg>
        </div>
        <label className="field-label">
          <span>{field.label}</span>
          {!field.optional && <span className="required">*</span>}
        </label>
        
        {field.helptext && <div className="help-text">{field.helptext}</div>}
        
        {field.type === 'select' ? (
          <div className="select-options">
            {field.options?.map((option, index) => (
              <div className="radio-option" key={index}>
                <input
                  type="radio"
                  id={`${field.name}-${index}`}
                  name={field.name}
                  ref={index === 0 ? ref : undefined}
                  checked={field.value === option}
                  onChange={() => handleRadioChange(option)}
                  className="radio-input"
                />
                <label 
                  htmlFor={`${field.name}-${index}`}
                  className={`radio-label ${field.value === option ? 'selected' : ''}`}
                >
                  <span className="option-letter">{String.fromCharCode(97 + index)}</span>
                  <span className="option-text">{option}</span>
                </label>
              </div>
            ))}
          </div>
        ) : (
          <input
            className="field-input"
            ref={ref}
            type="text"
            placeholder="Type your answer here.."
            value={field.value}
            onChange={handleChange}
            
          />
        )}
      </div>
      
      {isInvalid && (
        <div className="error-message">
          <svg height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
            <path clipRule="evenodd"
              d="M16.3361 17.9998L7.00279 18C5.49294 18 4.52754 16.391 5.23806 15.0588L9.90471 6.30882C10.6576 4.89706 12.6812 4.89706 13.4341 6.30881L18.1008 15.0586C18.8113 16.3908 17.8459 17.9998 16.3361 17.9998ZM11.6694 8.50003C12.2217 8.50003 12.6694 8.94774 12.6694 9.50003V11.5C12.6694 12.0523 12.2217 12.5 11.6694 12.5C11.1171 12.5 10.6694 12.0523 10.6694 11.5V9.50003C10.6694 8.94774 11.1171 8.50003 11.6694 8.50003ZM11.6694 16C12.2217 16 12.6694 15.5523 12.6694 15C12.6694 14.4477 12.2217 14 11.6694 14C11.1171 14 10.6694 14.4477 10.6694 15C10.6694 15.5523 11.1171 16 11.6694 16Z"
              fillRule="evenodd">
            </path>
          </svg>
          {invalidMessage}
        </div>
      )}
    </div>
  );
});

export default FieldComponent;