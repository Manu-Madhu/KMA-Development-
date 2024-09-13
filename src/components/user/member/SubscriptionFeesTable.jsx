import UnderlinedHeading from "../Common/UnderlinedHeading";

function SubscriptionFeesTable() {
    const data = [
      {
        category: "Ordinary Individual Members",
        entranceFee: "3000",
        annualSubscription: "3000",
        oneTimePayment: "Na",
        gst: "1080",
        total: "7080",
        nominees: "1",
      },
      {
        category: "Individual Life Membership [Life time]",
        entranceFee: "3000",
        annualSubscription: "Na",
        oneTimePayment: "30000",
        gst: "5940",
        total: "38940",
        nominees: "1",
      },
      {
        category: 'Individual Life Membership [Life time] (Senior Citizens)',
        entranceFee: '3000',
        annualSubscription: 'Na',
        oneTimePayment: '15000',
        gst: '3240',
        total: '21240',
        nominees: '1',
      },
      {
        category: "Associate Corporate Members",
        entranceFee: "10000",
        annualSubscription: "7500",
        oneTimePayment: "Na",
        gst: "3150",
        total: "20650",
        nominees: "2",
      },
      {
        category: "Corporate Members",
        entranceFee: "20000",
        annualSubscription: "15000",
        oneTimePayment: "Na",
        gst: "6300",
        total: "41300",
        nominees: "4",
      },
      {
        category: "Startup Member",
        entranceFee: "3000",
        annualSubscription: "2000",
        oneTimePayment: "Na",
        gst: "900",
        total: "5900",
        nominees: "2 No Voting Rights",
      },
      {
        category: "Student Members - 2 years (all inclusive)",
        entranceFee: "1500",
        annualSubscription: "Na",
        oneTimePayment: "Na",
        gst: "Na",
        total: "1500",
        nominees: "1",
      },
    ];
  
    return (
      <div className="max-w-screen-xl p-3 pt-10 mx-auto">
        <div className="mb-10">
        <UnderlinedHeading text={"Subscription Fees"}/>
        </div>
        <p className="my-10 ">
          The present rates of entrance fee and annual subscription are as under.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left bg-white border-collapse border border-gray-300">
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="px-4 py-2 border border-gray-300">Category of Membership</th>
                <th className="px-4 py-2 border border-gray-300">Entrance Fee</th>
                <th className="px-4 py-2 border border-gray-300">Annual Subscription</th>
                <th className="px-4 py-2 border border-gray-300">One time payment</th>
                <th className="px-4 py-2 border border-gray-300">GST</th>
                <th className="px-4 py-2 border border-gray-300">Total</th>
                <th className="px-6 py-2 border border-gray-300">No Of Nominees</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="text-left">
                  <td className="px-4 py-2 border border-gray-300">{row.category}</td>
                  <td className="px-4 py-2 border border-gray-300">{row.entranceFee}</td>
                  <td className="px-4 py-2 border border-gray-300">{row.annualSubscription}</td>
                  <td className="px-4 py-2 border border-gray-300">{row.oneTimePayment}</td>
                  <td className="px-4 py-2 border border-gray-300">{row.gst}</td>
                  <td className="px-4 py-2 border border-gray-300">{row.total}</td>
                  <td className="px-4 py-2 border border-gray-300">{row.nominees}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default SubscriptionFeesTable;
  