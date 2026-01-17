import React from 'react'

const Student = ({yearOfStudy, setYearOfStudy, fieldOfStudy, setFieldOfStudy}) => {
  return (
    <>
      <div>
        <label
          htmlFor="yearOfStudy"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Year Of Study
        </label>
        <select
          id="yearOfStudy"
          value={yearOfStudy}
          onChange={(e) => (setYearOfStudy(e.target.value))}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
        >
          <option value="1st" className="text-gray-700 mb-2">1st Year</option>
          <option value="2nd" className="text-gray-700 mb-2">2nd Year</option>
          <option value="3rd" className="text-gray-700 mb-2">3rd Year</option>
          <option value="+4th" className="text-gray-700 mb-2">+4th Year</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="fieldOfStudy"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Field of Study / Interest
        </label>
        <select
          id="fieldOfStudy"
          value={fieldOfStudy}
          onChange={(e) => (setFieldOfStudy(e.target.value))}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
        >
          <option value="Electrical Engineering" className="text-gray-700 mb-2">Electrical Engineering</option>
          <option value="Software Engineering" className="text-gray-700 mb-2">Software Engineering</option>
          <option value="Biomedical Engineering" className="text-gray-700 mb-2">Biomedical Engineering</option>
          <option value="Mechanical Engineering" className="text-gray-700 mb-2">Mechanical Engineering</option>
          <option value="Computer Science" className="text-gray-700 mb-2">Computer Science</option>
          <option value="Natural Sciences" className="text-gray-700 mb-2">Natural Sciences</option>
          <option value="Business" className="text-gray-700 mb-2">Business</option>
          <option value="Other" className="text-gray-700 mb-2">Other</option>
        </select>
      </div>
    </>
  )
}

export default Student
