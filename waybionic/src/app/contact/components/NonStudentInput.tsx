import React from 'react'

const NonStudentInput = ({ getStateValue, setStateValue}) => {
  return (
    <>
      <textarea
        id="message"
        value={getStateValue()}
        onChange={(e) => setStateValue(e.target.value)}
        required
        rows={6}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Type your message here..."
      />
    </>
  )
}

export default NonStudentInput
