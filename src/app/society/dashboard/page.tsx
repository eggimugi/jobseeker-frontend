"use client";
import { ProtectedRoute } from "@/components/protectedRoute";
import { useAuth } from "@/context/authContext";
import Link from "next/link";

export default function SocietyDashboard() {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute allowedRoles={["Society"]}>
      <div className="min-h-screen bg-white px-12 py-12">
        {/* Navbar */}
        <nav className="bg-white shadow-sm px-12 rounded-full">
          <div className="flex justify-between h-16 items-center">
            <Link href="/society/dashboard" className="font-bold text-xl">
              Society<span className="text-orange-600 italic">Page</span>
            </Link>
            <ul className="flex space-x-10 font-medium">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Profile</a>
              </li>
              <li>
                <a href="">Portofolio</a>
              </li>
              <li>
                <a href="">Find Jobs</a>
              </li>
              <li>
                <a href="">MyApplications</a>
              </li>
            </ul>
            <div className="flex items-center space-x-4">
              <p className="border border-black rounded-full px-4 py-2 font-medium">
                Society
              </p>
              <button
                onClick={logout}
                className="bg-black text-white font-semibold px-4 py-2 rounded-full hover:bg-red-700 transition-colors cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        </nav>

        <main className="py-20">
          {/* Header */}
          <header className="text-xl">
            <p>
              <span className="text-orange-600 text-2xl font-black">—</span> Home
            </p>
            <h1 className="text-4xl font-bold mt-2">
              Welcome back,{" "}
              <span className="text-orange-600 italic">{user?.name}!</span>
            </h1>
            <p className="mt-2">Ready to find your next quest? Let’s go!</p>
          </header>

          {/* Quick Stats */}
          <div className="mt-5 text-xl">
            <p className="font-bold">
              Here’s your{" "}
              <span className="text-orange-600 italic">adventure progress</span>{" "}
              so far:
            </p>
            <div className="flex justify-between px-8 py-4 bg-orange-600 mt-5 rounded">
              <ul className="flex gap-12">
                <li className="flex items-center">
                  <span className="font-bold text-white text-4xl">80%</span>
                  <span className="text-white ms-2 leading-5">
                    Portofolio <br /> completed
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-white text-4xl">5</span>
                  <span className="text-white ms-2 leading-5">
                    Applications <br /> Sent
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-white text-4xl">1</span>
                  <span className="text-white ms-2 leading-5">
                    Status <br /> Accepted
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-white text-4xl">3</span>
                  <span className="text-white ms-2 leading-5">
                    Still <br /> Waiting
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-white text-4xl">1</span>
                  <span className="text-white ms-2 leading-5">
                    Not <br /> This Time
                  </span>
                </li>
              </ul>
              <button className="border-2 border-white text-white rounded-full px-4 py-2 font-medium">
                More Details
              </button>
            </div>
          </div>

          {/* Profile */}
          <div className="flex flex-col justify-center items-center mt-20 text-xl">
            {/* Hook */}
            <header className="text-center">
              <p>
                <span className="text-orange-600 font-black">—</span> Profile
              </p>
              <h1 className="text-4xl font-bold mt-2">
                Tell us about yourself,{" "}
                <span className="text-orange-600 italic">don’t be shy!</span>
              </h1>
              <p className="mt-2">Let the world see the amazing you! </p>
            </header>

            {/* Content */}
            <div className="flex w-full mt-15 space-x-8">
              {/* left Side */}
              <div className="flex-2/5 flex justify-center items-center relative">
                <img
                  src="/images/Images1.svg"
                  alt="Images 1"
                  className="h-[95%]"
                />
                <img
                  src="/images/Images1.svg"
                  alt="Images 1"
                  className="absolute w-50 h-30 object-cover top-0 right-10"
                />
                <img
                  src="/images/Images1.svg"
                  alt="Images 1"
                  className="absolute w-50 h-30 object-cover bottom-0 left-10"
                />
              </div>
              {/* Right Side */}
              <div className="flex-3/5 text-base">
                <div className="border rounded-lg w-full h-full p-6">
                  <form className="space-y-6">
                    <div className="flex flex-col">
                      <div className="flex-1 flex flex-row space-x-12">
                        <div className="flex-1">
                          <label htmlFor="name" className="block mb-1">
                            What should we call you?
                          </label>
                          <input
                            id="name"
                            type="text"
                            required
                            className="w-full border-b border-gray-300 bg-transparent outline-none py-1 text-sm"
                            placeholder="Ex. John Doe"
                          />
                        </div>
                        <div className="flex-1">
                          <label htmlFor="phone" className="block mb-1">
                            Your phone number
                          </label>
                          <input
                            id="phone"
                            type="number"
                            required
                            className="w-full border-b border-gray-300 bg-transparent outline-none py-1 text-sm"
                            placeholder="Ex. 085123456789"
                          />
                        </div>
                      </div>
                      <div className="flex-1 mt-8">
                        <label htmlFor="address" className="block mb-1">
                          Where are you right now?
                        </label>
                        <input
                          id="address"
                          type="text"
                          required
                          className="w-full border-b border-gray-300 bg-transparent outline-none py-1 text-sm"
                          placeholder="Ex. St. Danau Ranau, Malang"
                        />
                      </div>
                      <div className="flex-1 flex flex-row space-x-12 mt-8">
                        <div className="flex-1">
                          <label htmlFor="birth" className="block mb-1">
                            Date of birth
                          </label>
                          <input
                            id="birth"
                            type="date"
                            required
                            className="w-full border-b border-gray-300 bg-transparent outline-none py-1 text-sm"
                            placeholder="Ex. 06 Nov 2007"
                          />
                        </div>
                        <div className="flex-1">
                          <label htmlFor="gender" className="block mb-1">
                            Male or Female?
                          </label>
                          <select
                            id="gender"
                            required
                            className="w-full border-b border-gray-300 bg-transparent outline-none py-2 text-sm"
                          >
                            <option value="" disabled hidden>
                              I wanna be a...
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="bg-black text-white font-medium px-4 py-1 rounded cursor-pointer hover:bg-gray-800 transition"
                    >
                      Update My Profile
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Portofolio */}
          <div className="flex flex-col justify-center mt-20 text-xl">
            {/* Hook */}
            <header>
              <p>
                <span className="text-orange-600 font-black">—</span> Portofolio
              </p>
              <h1 className="text-4xl font-bold mt-2">
                Show off your{" "}
                <span className="text-orange-600 italic">awesome skills!</span>
              </h1>
              <p className="mt-2"> Complete your portfolio to increase your chances!</p>
            </header>

            {/* Content */}
            <div className="flex w-full mt-10 space-x-8 text-base">
              {/* left Side */}
              <div className="flex-3/5">
                <div className="border rounded-lg w-full h-full p-6">
                  <form className="space-y-6">
                    <div className="flex flex-col">
                      <div className="flex-1">
                        <label htmlFor="skill" className="block mb-1">
                          What's your skill?
                        </label>
                        <input
                          id="skill"
                          type="text"
                          required
                          className="w-full border-b border-gray-300 bg-transparent outline-none py-1 text-sm"
                          placeholder="Ex. Frontend Developer"
                        />
                      </div>
                      <div className="flex-1 mt-8">
                        <label htmlFor="description" className="block mb-1">
                          Tell companies what makes you’re amazing!
                        </label>
                        <input
                          id="description"
                          type="text"
                          required
                          className="w-full border-b border-gray-300 bg-transparent outline-none py-1 text-sm"
                          placeholder="Ex. I've learned frontend since i was 15 years old..."
                        />
                      </div>

                      <div className="flex-1 mt-8">
                        <label htmlFor="file" className="block mb-1">
                          Upload your Curriculum Vitae!
                        </label>
                        <div className="flex">
                          <input
                            id="file"
                            type="text"
                            required
                            className="w-full border-b border-gray-300 bg-transparent outline-none py-1 text-sm"
                            placeholder="Drag and drop your file right here"
                          />
                          <button className="w-30 border border-black rounded">Choose File</button>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="bg-black text-white font-medium px-4 py-1 rounded cursor-pointer hover:bg-gray-800 transition"
                    >
                      Upload My Portofolio
                    </button>
                  </form>
                </div>
              </div>
              {/* Right Side */}
              <div className="flex-2/5 flex justify-center items-center relative">
                <img
                  src="/images/Images1.svg"
                  alt="Images 1"
                  className="h-[95%]"
                />
                <img
                  src="/images/Images1.svg"
                  alt="Images 1"
                  className="absolute w-50 h-30 object-cover top-0 right-10"
                />
                <img
                  src="/images/Images1.svg"
                  alt="Images 1"
                  className="absolute w-50 h-30 object-cover bottom-0 left-10"
                />
              </div>
            </div>
          </div>

          
        </main>

        {/* <main className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                My Profile
              </h3>
              <p className="text-gray-600">Update your personal information</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Edit Profile
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Portfolio
              </h3>
              <p className="text-gray-600">Manage your skills and portfolio</p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Update Portfolio
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Find Jobs
              </h3>
              <p className="text-gray-600">Browse available job positions</p>
              <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Browse Jobs
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              My Applications
            </h2>
            <p className="text-gray-600">
              You haven't applied to any jobs yet.
            </p>
          </div>
        </main> */}
      </div>
    </ProtectedRoute>
  );
}
