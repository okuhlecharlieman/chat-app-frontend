import React from "react";

function AdminAnnouncements() {
  return (
    <div class="container mx-auto px-4 sm:px-8">
      <div class="py-8">
        <div className="md:flex">
          <h2 className="text-2xl font-semibold leading-tight">
            Announcements
          </h2>
          <div className="flex-grow"></div>
        </div>

        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <div className="m-5">
              {" "}
              <div class="bg-gray-100 p-4">
                <div class="max-w-md mx-auto bg-white rounded p-6">
                  <h1 class="text-2xl font-semibold mb-4">
                    Post an Announcement
                  </h1>
                  <form action="#" method="post">
                    <div class="mb-4">
                      <label
                        for="title"
                        class="block text-gray-600 text-sm font-medium mb-2"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        class="w-full px-4 py-2 rounded border focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Enter the announcement title"
                        required
                      />
                    </div>
                    <div class="mb-4">
                      <label
                        for="content"
                        class="block text-gray-600 text-sm font-medium mb-2"
                      >
                        Announcement Content
                      </label>
                      <textarea
                        id="content"
                        name="content"
                        rows="4"
                        class="w-full px-4 py-2 rounded border focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Enter the announcement content"
                        required
                      ></textarea>
                    </div>
                    <div class="mb-4">
                      <button
                        type="submit"
                        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      >
                        Post Announcement
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* new table */}
            <div className="m-5">
              {" "}
              <table class=" min-w-full leading-normal table-width ">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700  tracking-wider">
                      Devin Childs posted
                    </th>

                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Kill them with success
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">
                            {" "}
                            Sept 28, 2019
                          </p>
                        </div>
                      </div>
                    </td>

                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">Active</span>
                      </span>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <button
                        type="button"
                        class="inline-block text-gray-500 hover:text-gray-700"
                      >
                        <svg
                          class="inline-block h-6 w-6 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAnnouncements;
