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
          <div className="">
            <input className="input py-1.5 my-3" placeholder="Find Users..." />
            <select class="">
              <option>Audiance</option>
              <option>Public</option>
              <option>Private</option>
              <option>Both</option>
            </select>
          </div>
        </div>

        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <div className="m-5">
              {" "}
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
      </div>
    </div>
  );
}

export default AdminAnnouncements;
