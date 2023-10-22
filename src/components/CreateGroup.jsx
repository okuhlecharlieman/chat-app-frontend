import React from "react";

function CreateGroup() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="md:flex">
            <h2 className="text-2xl font-semibold leading-tight">
              Create Group
            </h2>
          </div>

          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <div class="container mx-auto p-4">
                {/* Input field with a placeholder for entering a name */}
                <div class="border border-gray-400 rounded-lg flex mb-4 shadow-lg">
                  <input
                    type="text"
                    placeholder="Enter group name..."
                    class="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent focus:border-green-500 focus:text-green-500"
                  />
                </div>

                {/* Select input with a dropdown icon */}
                <div class="relative mb-4">
                  <select class="block appearance-none font-medium w-full bg-white border border-green-500 focus:border-green-500 p-4 rounded-lg focus:shadow-lg leading-tight outline-none">
                    <option>Choose Privacy</option>
                    <option>Public</option>
                    <option>Private</option>
                  </select>
                  <div class="pointer-events-none absolute top-0 right-0 flex items-center mt-4 mr-4 text-green-500 bg-white">
                    <svg
                      class="fill-current h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>

                {/* Submit button */}
                <button class="bg-green-500 w-full font-medium text-white px-4 py-3 rounded-lg shadow-lg hover:bg-green-400">
                  Submit
                </button>

                <div class="mt-4"></div>

                {/* Cancel button */}
                <button class="w-full font-medium text-green-500 px-4 py-3 rounded-lg border-2 border-green-500 hover:bg-green-400 hover:text-white hover:shadow-xl transition-all duration-500">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateGroup;
