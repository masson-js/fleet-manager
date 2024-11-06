


import { LoginButton, RegistrationButton, TryDemoButton, TryUserButton } from "./buttons";

export default  function HomeNavigation() {

 

  return (
    <div className="flex flex-col w-1/2 items-center bg-gray-100 min-h-screen">
      <div className="flex gap-10 mt-8">
        <LoginButton/>
        <RegistrationButton/>
        <TryDemoButton/>
        <TryUserButton/>
      </div>
      <div className="flex flex-col mt-8 w-96">
        <div className="flex flex-col bg-gray-200 my-2 p-4 rounded-2xl">
          <span className="text-lg font-bold text-gray-800 ">
            Status Monitoring
          </span>
          <h2 className=" text-sm font-normal text-gray-800 opacity-60">
            Easily check the operational status of your vessels
          </h2>
        </div>
        <div className="flex flex-col bg-gray-200 my-2 p-4 rounded-2xl">
          <span className="text-lg font-bold text-gray-800 ">
            Fixtures Management
          </span>
          <h2 className="text-sm  font-normal text-gray-800 opacity-60">
            Efficiently manage charter contracts, monitor obligations, and track
            the performance of chartered vessels
          </h2>
        </div>
        <div className="flex flex-col bg-gray-200 my-2 p-4 rounded-2xl">
          <span className="text-lg font-bold text-gray-800 ">
            Insurance Tracking
          </span>
          <h2 className="text-sm  font-normal text-gray-800 opacity-60">
            Monitor insurance coverage and renewal dates to ensure your vessels
            are always adequately protected
          </h2>
        </div>
        <div className="flex flex-col bg-gray-200 my-2 p-4 rounded-2xl">
          <span className="text-lg font-bold text-gray-800 ">
            Logbook Management
          </span>
          <h2 className="text-sm  font-normal text-gray-800 opacity-60">
            Maintain accurate and accessible logbooks for all vessels,
            facilitating compliance and reporting
          </h2>
        </div>
        <div className="flex flex-col bg-gray-200 my-2 p-4 rounded-2xl">
          <span className="text-lg font-bold text-gray-800 ">
            Interactive Map
          </span>
          <h2 className="text-sm  font-normal text-gray-800 opacity-60">
            Visualize your fleet's positions on an interactive map
          </h2>
        </div>
      </div>
    </div>
  );
}
