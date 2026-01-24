import React from 'react'
import NonStudentMessage from './NonStudentMessage'
import NonStudentInput from './NonStudentInput'
import emailjs from "@emailjs/browser";

const NonStudent = ({ typeOfContact, setClubInfo, setBusinessInfo, setProfessionInfo, setSponsorshipInfo, setPartnershipInfo, setOtherInfo, clubInfo, businessInfo, professionInfo, sponsorshipInfo, partnershipInfo, otherInfo, professorInfo, setProfessorInfo }) => {
  const getStateValue = () => {
    switch(typeOfContact) {
      case "Club":
        return clubInfo
      case "Business":
        return businessInfo
      case "Industry Professional":
        return professionInfo
      case "Sponsorship":
        return sponsorshipInfo
      case "Partnership":
        return partnershipInfo
      case "Professor":
        return professorInfo
      default:
        return otherInfo
    }
  }

  const setStateValue = (value: string) => {
    switch(typeOfContact) {
      case "Club":
        setClubInfo(value)
        break
      case "Business":
        setBusinessInfo(value)
        break
      case "Industry Professional":
        setProfessionInfo(value)
        break
      case "Sponsorship":
        setSponsorshipInfo(value)
        break
      case "Partnership":
        setPartnershipInfo(value)
        break
      case "Professor":
        setProfessorInfo(value)
        break
      default:
        setOtherInfo(value)
    } 
  }

  if (typeOfContact && typeOfContact !== "Student") {
    return (
      <>
        <div>
          <NonStudentMessage typeOfContact={typeOfContact} />
          <NonStudentInput getStateValue={getStateValue} setStateValue={setStateValue} />
        </div>
      </>
    )
  }

  return null
}

export default NonStudent