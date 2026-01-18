import React from 'react'
import NonStudentMessage from './NonStudentMessage'
import NonStudentInput from './NonStudentInput'
import emailjs from "@emailjs/browser";

const NonStudent = ({ typeOfContact, setClubInfo, setBusinessInfo, setProfessionInfo, setSponsershipInfo, setPartnershipInfo, setOtherInfo, clubInfo, businessInfo, professionInfo, sponsershipInfo, partnershipInfo, message, setMessage, otherInfo }) => {
  const getStateValue = () => {
    switch(typeOfContact) {
      case "Club":
        return clubInfo
      case "Business":
        return businessInfo
      case "Industry Professional":
        return professionInfo
      case "Sponsorship":
        return sponsershipInfo
      case "Partnership":
        return partnershipInfo
      case "Professor":
        return professionInfo
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
        setSponsershipInfo(value)
        break
      case "Partnership":
        setPartnershipInfo(value)
        break
      case "Professor":
        setProfessionInfo(value)
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
