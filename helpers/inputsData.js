/*
=====================================
INPUTS DATA 
=====================================
*/

export const inputTextInfo = {
  firstName: {
    name: "firstName",
    label: "FIRST NAME*",
    pattern: /^[a-zA-Z]+$/,
    type: "text",
    required: true,
    errorRequired: "First name is required",
    errorPattern: "Please enter a valid first name",
  },
  lastName: {
    name: "lastName",
    label: "LAST NAME*",
    pattern: /^[a-zA-Z]+$/,
    type: "text",
    required: true,
    errorRequired: "Last name is required",
    errorPattern: "Please enter a valid last name",
  },
  email: {
    name: "email",
    label: "EMAIL ADDRESS*",
    pattern:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    type: "email",
    required: true,
    errorRequired: "Email is required",
    errorPattern: "Please enter a valid Email",
  },
  organization: {
    name: "organization",
    label: "ORGANIZATION",
    pattern: "",
    type: "text",
    required: false,
    errorRequired: "",
    errorPattern: "",
  },
};

export const inputBoxCheck = {
  advances: {
    name: "advances",
    label: "ADVANCES*",
    required: true,
    errorMsg: "Advances is required",
  },
  alerts: {
    name: "alerts",
    label: "ALERTS",
    required: false,
    errorMsg: "",
  },
  otherCommunications: {
    name: "otherCommunications",
    label: "OTHERS COMMUNICATIONS",
    required: false,
    errorMsg: "",
  },
  triggerError: {
    name: "triggerError",
    label: "Trigger error",
    required: false,
    errorMsg: "",
  },
};
