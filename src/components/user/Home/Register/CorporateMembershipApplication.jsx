import Image from 'next/image'
import React from 'react'
import { FaGlobeAsia } from 'react-icons/fa'
import { IoCloudUploadOutline } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

const CorporateMembershipApplication = ({handleSubmit,formData, handleChange,submitForm,isAvailable ,errors,usernameLoading,loading}) => {
  return (
    <div className="bg-white shadow-md border w-full rounded-lg mx-auto p-6 max-w-md sm:max-w-lg lg:max-w-full lg:ml-10">
          <form
            className="grid grid-cols-1 gap-4"
            onSubmit={(e) => handleSubmit(e, submitForm)}
          >
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username}</p>
              )}
              {/* Display username availability status */}
              <div className="lg:ml-1">
                {usernameLoading ? (
                  <p className="text-blue-500 text-sm">
                    Checking availability...
                  </p>
                ) : (
                  isAvailable !== null && (
                    <p
                      className={`text-sm ${
                        isAvailable ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {isAvailable
                        ? "Username is available"
                        : "Username is taken"}
                    </p>
                  )
                )}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="Password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                Name of the Applicant
              </label>
              <input
                type="text"
                name="applicantName"
                placeholder="Name of the Applicant"
                value={formData.applicantName}
                onChange={handleChange}
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
              {errors.applicantName && (
                <p className="text-red-500 text-sm">{errors.applicantName}</p>
              )}
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                name="address"
                placeholder="Enter your address here"
                rows="5"
                value={formData.address}
                onChange={handleChange}
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              ></textarea>
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                State/Province
              </label>
              <input
                type="text"
                placeholder="State/Province"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                Fax
              </label>
              <input
                type="text"
                placeholder="Fax"
                name="fax"
                value={formData.fax}
                onChange={handleChange}
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                Country
              </label>
              <div className="relative w-full lg:w-2/3 mt-1">
                <select
                  className="block w-full px-8 py-2 border border-gray-200 rounded-md shadow-sm appearance-none pr-8 focus:outline-none
                 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  value={formData.country}
                  name="country"
                  onChange={handleChange}
                >
                  <option>United States</option>
                  <option>India</option>
                </select>
                <div className="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
                  <FaGlobeAsia className="text-gray-400" />
                </div>
              </div>
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country}</p>
              )}
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                Telephone
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Telephone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="w-full lg:w-2/3 flex items-center mt-1 border border-gray-200 rounded-md shadow-sm focus-within:ring-red-500 focus-within:border-red-500">
                <span className="px-2 text-gray-500">
                  <MdEmail />
                </span>
                <input
                  type="text"
                  placeholder="@gmail.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 focus:outline-none sm:text-sm"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                website
              </label>
              <input
                type="text"
                name="website"
                placeholder="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                Contact Person
              </label>
              <input
                type="text"
                placeholder="Contact Person"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full sm:w-1/3 text-sm font-medium text-gray-700">
                Nature of business/poduct line:
              </label>
              <input
                type="text"
                placeholder="Nature of business/poduct line:"
                name="natureofbusiness"
                value={formData.natureofbusiness}
                onChange={handleChange}
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full sm:w-1/3 text-sm font-medium text-gray-700">
                Membership applied for
              </label>
              <select
                name="membershipType"
                value={formData.membershipType}
                onChange={handleChange}
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              >
                <option>Membership applied for</option>
                <option>Membership applied for</option>
                {/* Add other countries as needed */}
              </select>
              {errors.membershipType && (
                <p className="text-red-500 text-sm">{errors.membershipType}</p>
              )}
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full sm:w-1/3 text-sm font-medium text-gray-700">
                Name of the bussiness/entity associated with
              </label>
              <input
                type="text"
                placeholder="bussiness"
                name="nameofbussiness"
                value={formData.nameofbussiness}
                onChange={handleChange}
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full sm:w-1/3 text-sm font-medium text-gray-700">
                Address of the business/entity
              </label>
              <textarea
                name="BSaddress"
                value={formData.BSaddress}
                onChange={handleChange}
                placeholder="Enter your address here"
                rows="5"
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              ></textarea>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full sm:w-1/3 text-sm font-medium text-gray-700">
                Registration number of business/entity
              </label>
              <input
                type="text"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
                placeholder="Registration number of business/entity"
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full sm:w-1/3 text-sm font-medium text-gray-700">
                Registration date of business/entity
              </label>
              <input
                type="date"
                name="registrationDate"
                value={formData.registrationDate}
                onChange={handleChange}
                placeholder="10/12/2023"
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full sm:w-1/3 text-sm font-medium text-gray-700">
                Date of commencement of business/entity
              </label>
              <input
                type="date"
                name="commencementDate"
                value={formData.commencementDate}
                onChange={handleChange}
                placeholder="10/12/2023"
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full sm:w-1/3 text-sm font-medium text-gray-700">
                Name of the authorized person representing business/entity
              </label>
              <input
                type="text"
                placeholder="name"
                name="authorizedPerson"
                value={formData.authorizedPerson}
                onChange={handleChange}
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full sm:w-1/3 text-sm font-medium text-gray-700">
                Name of person authorized to attend meetings
              </label>
              <textarea
                name="authorizedMeetingPerson"
                value={formData.authorizedMeetingPerson}
                onChange={handleChange}
                placeholder="name"
                rows="5"
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              ></textarea>
            </div>
            {/* File Upload Field */}
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                Attach identity proof
              </label>
              <div className="w-full lg:w-2/3 mt-1 block px-3 py-3 border-2 border-dashed border-gray-300 rounded-md shadow-sm text-center cursor-pointer">
                <input
                  type="file"
                  id="file-upload"
                  name="identityProof"
                  accept="image/*,application/pdf"
                  onChange={handleChange} // Handle file input change
                  className="hidden"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="flex flex-col items-center">
                    <IoCloudUploadOutline className="w-12 h-12" />
                    <div className="flex space-x-1">
                      <p className="text-red-600">Click to upload</p>
                      <p className="text-gray-500">or drag and drop</p>
                    </div>
                    <p className="text-gray-500 text-xs">
                      PDF, PNG, JPG, or GIF (max. 5MB)
                    </p>
                  </div>
                </label>
                
              </div>
                {errors.identityProof && (
                  <p className="text-red-500 text-sm">{errors.identityProof}</p>
                )}
              {formData.identityProof && (
                   <div className="mt-2 flex justify-between items-center">
                   <span className="text-gray-700">{formData.identityProof.name}</span>
                 </div>
                )}
            </div>
            <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full sm:w-1/3 text-sm font-medium text-gray-700">
                Including Renewal Payment
              </label>
              <div className="w-full sm:w-auto">
                <input
                  type="checkbox"
                  name="hasRenewalPay"
                  value={formData.hasRenewalPay}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-red-500 rounded border-gray-300 focus:ring-red-500"
                />
              </div>
              {errors.hasRenewalPay && (
                <p className="text-red-500 text-sm">{errors.hasRenewalPay}</p>
              )}
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full sm:w-1/3 text-sm font-medium text-gray-700">
                Mode of Payment
              </label>
              <select
                name="payMode"
                value={formData.payMode}
                onChange={handleChange}
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              >
                <option>Select payment mode</option>
                <option value="creditCard">Credit Card</option>
                <option value="bankTransfer">Bank Transfer</option>
                {/* Add other options as needed */}
              </select>
              {errors.payMode && (
                <p className="text-red-500 text-sm">{errors.payMode}</p>
              )}
            </div>

            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                Enter Code
              </label>
              <div className="w-full lg:w-2/3 flex items-center space-x-5">
                <Image
                  src={"/assets/Register/code.png"}
                  alt="code example"
                  width={150}
                  height={40}
                  className="w-20 h-10"
                />
                <input
                  type="text"
                  placeholder="Enter Code"
                  className="w-full mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className="py-3 mt-2 px-4 border border-transparent rounded-full shadow-sm text-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                {loading ? "Registering..." : "Register for Membership"}
              </button>
            </div>
          </form>
        </div>
  )
}

export default CorporateMembershipApplication
