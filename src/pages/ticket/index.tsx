import { useState } from 'react'
import Navbar from '../../components/navbar/index'
import Footer from '../../components/footer/index'

import Button from '../../components/ui/button/index'
export default function LotteryTicket() {
  const [name, setName] = useState('')
  const [income, setIncome] = useState('')
  const [noHouse, setNoHouse] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', { name, income, noHouse, agreeTerms })
  }

  return (<>

    <Navbar />
    <div className="max-w-md mx-auto mt-[90px] mb-[30px] p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-xl font-semibold mb-2">Conditions for Participation</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-[5px] mt-1 block w-full rounded-md border-2 border-lightgray shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="income" className="block text-sm font-medium text-gray-700">Annual Income (Rs.)</label>
          <input
            type="number"
            id="income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            required
            className="p-[5px] mt-1 block w-full rounded-md border-2 border-lightgray shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="text-sm text-gray-600 pl-6">
          <ul className="list-disc space-y-1">
            <li>Only individuals who do not own a home anywhere are eligible.</li>
            <li>Only individuals with an annual income below ₹8 lakhs are eligible.</li>
            <li>Ticket holders can withdraw their ticket at any time before the lottery draw and will receive a full refund of their registration fee.</li>
            <li>After the draw, no withdrawals or refunds will be possible.</li>
          </ul>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="noHouse"
            checked={noHouse}
            onChange={(e) => setNoHouse(e.target.checked)}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <label htmlFor="noHouse" className="text-sm text-gray-700">
            I don't have a house anywhere in my name
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="agreeTerms"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <label htmlFor="agreeTerms" className="text-sm text-gray-700">
            I agree to the following terms and conditions:
          </label>
        </div>

        <Button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#f7b245] hover:bg-[#fec05d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f7b245]"
        >
          Buy a ticket
        </Button>
      </form>
    </div>
    <Footer />
  </>

  )
}