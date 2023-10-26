import React from "react";

function ChatWindow() {
  return (
    <div className="container">
      <div class="flex h-full flex-col bg-gray-100">
        <div class="bg-gradient-to-r from-blue-500 to-purple-500 py-4">
          <h1 class="text-center text-2xl font-bold text-white">Nozi</h1>
        </div>
        <div class="flex-grow overflow-y-auto">
          <div class="flex flex-col space-y-2 p-4">
            {/* <!-- Individual chat message --> */}
            <div class="flex items-center self-end rounded-xl rounded-tr bg-blue-500 py-2 px-3 text-white">
              <p>Ndicela muffins mntase</p>
            </div>
            <div class="flex items-center self-start rounded-xl rounded-tl bg-gray-300 py-2 px-3">
              <p>Ndizibhaka ngomso</p>
            </div>
          </div>
        </div>
        <div class="flex items-center p-4">
          <input
            type="text"
            placeholder="Type your message..."
            class="w-full rounded-lg border border-gray-300 px-4 py-2"
          />
          <button class="ml-2 rounded-lg bg-blue-500 px-4 py-2 text-white">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
