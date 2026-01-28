import React from "react";

type NonStudentMessageProps = {
  typeOfContact: string;
};

const messageDictionary: Record<string, string> = {
  "Business": "Please enter your business information and interests",
  "Club": "Please enter your club information and interests",
  "Industry Professional": "Please enter your profession information and interests",
  "Professor": "Please enter your professorship information and interests",
  "Partnership": "Please enter your partnership information and interests",
  "Sponsorship": "Please enter your sponsorship information and interests",
  "Other": "Please enter additional information"
};

const NonStudentMessage = ({ typeOfContact }: NonStudentMessageProps) => {
  return (
    <>
      <label
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {messageDictionary[typeOfContact] || "Please enter additional information"}
      </label>
    </>
  );
};

export default NonStudentMessage;
