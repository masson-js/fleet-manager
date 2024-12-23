import Image from "next/image";
import {
  LoginButton,
  RegistrationButton,
  TryDemoButton
} from "./buttons";

export default function HomeNavigation() {
  return (
    <div className="flex flex-col w-1/2 items-center bg-gray-100 ">
      <div className="flex gap-10 mt-8">
        <LoginButton />
        <RegistrationButton />
        <TryDemoButton />
      </div>
      <div className="flex flex-col mt-8 w-96">
        <div className="flex flex-col bg-gray-200 my-2 p-4 rounded-2xl hover:bg-gray-300 hover:cursor-pointer">
          <span className="flex flex-row text-lg font-bold text-gray-800 ">
            <Image
              src="/status.png"
              alt="status Icon"
              className="w-6 h-6 mr-2"
              width={24}
              height={24}
            />
            Status Monitoring
          </span>
          <h2 className=" text-sm font-normal text-gray-800 opacity-60">
            Easily check the operational status of your vessels
          </h2>
        </div>
        <div className="flex flex-col bg-gray-200 my-2 p-4 rounded-2xl hover:bg-gray-300 hover:cursor-pointer">
          <span className="flex flex-row text-lg font-bold text-gray-800 ">
            <Image
              src="/fixtures.png"
              alt="fixtures Icon"
              className="w-6 h-6 mr-2"
              width={24}
              height={24}
            />
            Fixtures Management
          </span>
          <h2 className="text-sm  font-normal text-gray-800 opacity-60">
            Efficiently manage charter contracts, monitor obligations, and track
            the performance of chartered vessels
          </h2>
        </div>
        <div className="flex flex-col bg-gray-200 my-2 p-4 rounded-2xl hover:bg-gray-300 hover:cursor-pointer">
          <span className="flex flex-row text-lg font-bold text-gray-800 ">
            <Image
              src="/document.png"
              alt="document Icon"
              className="w-6 h-6 mr-2"
              width={24}
              height={24}
            />
            Insurance Tracking
          </span>
          <h2 className="text-sm  font-normal text-gray-800 opacity-60">
            Monitor insurance coverage and renewal dates to ensure your vessels
            are always adequately protected
          </h2>
        </div>
        <div className="flex flex-col bg-gray-200 my-2 p-4 rounded-2xl hover:bg-gray-300 hover:cursor-pointer">
          <span className="flex flex-row text-lg font-bold text-gray-800 ">
            <Image
              src="/logbook.png"
              alt="logbook Icon"
              className="w-6 h-6 mr-2"
              width={24}
              height={24}
            />
            Logbook Management
          </span>
          <h2 className="text-sm  font-normal text-gray-800 opacity-60">
            Maintain accurate and accessible logbooks for all vessels,
            facilitating compliance and reporting
          </h2>
        </div>
        <div className="flex flex-col bg-gray-200 my-2 p-4 rounded-2xl hover:bg-gray-300 hover:cursor-pointer">
          <span className="flex flex-row text-lg font-bold text-gray-800 ">
            <Image
              src="/map.png"
              alt="map Icon"
              className="w-6 h-6 mr-2"
              width={24}
              height={24}
            />
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
