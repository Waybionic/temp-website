import React from "react";
import NonStudentMessage from "./NonStudentMessage";
import NonStudentInput from "./NonStudentInput";

type NonStudentProps = {
  typeOfContact: string;
  setClubInfo: React.Dispatch<React.SetStateAction<string>>;
  setBusinessInfo: React.Dispatch<React.SetStateAction<string>>;
  setProfessionInfo: React.Dispatch<React.SetStateAction<string>>;
  setSponsorshipInfo: React.Dispatch<React.SetStateAction<string>>;
  setPartnershipInfo: React.Dispatch<React.SetStateAction<string>>;
  setOtherInfo: React.Dispatch<React.SetStateAction<string>>;
  clubInfo: string;
  businessInfo: string;
  professionInfo: string;
  sponsorshipInfo: string;
  partnershipInfo: string;
  otherInfo: string;
  professorInfo: string;
  setProfessorInfo: React.Dispatch<React.SetStateAction<string>>;
};

const NonStudent = ({
  typeOfContact,
  setClubInfo,
  setBusinessInfo,
  setProfessionInfo,
  setSponsorshipInfo,
  setPartnershipInfo,
  setOtherInfo,
  clubInfo,
  businessInfo,
  professionInfo,
  sponsorshipInfo,
  partnershipInfo,
  otherInfo,
  professorInfo,
  setProfessorInfo
}: NonStudentProps) => {
  const getStateValue = () => {
    switch (typeOfContact) {
      case "Club":
        return clubInfo;
      case "Business":
        return businessInfo;
      case "Industry Professional":
        return professionInfo;
      case "Sponsorship":
        return sponsorshipInfo;
      case "Partnership":
        return partnershipInfo;
      case "Professor":
        return professorInfo;
      default:
        return otherInfo;
    }
  };

  const setStateValue = (value: string) => {
    switch (typeOfContact) {
      case "Club":
        setClubInfo(value);
        break;
      case "Business":
        setBusinessInfo(value);
        break;
      case "Industry Professional":
        setProfessionInfo(value);
        break;
      case "Sponsorship":
        setSponsorshipInfo(value);
        break;
      case "Partnership":
        setPartnershipInfo(value);
        break;
      case "Professor":
        setProfessorInfo(value);
        break;
      default:
        setOtherInfo(value);
    }
  };

  return (
    <div>
      <NonStudentMessage typeOfContact={typeOfContact} />
      <NonStudentInput
        value={getStateValue()}
        setStateValue={setStateValue}
      />
    </div>
  );
};

export default NonStudent;
