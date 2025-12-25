import React, { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [user, setUser] = useState(null); // For auth info
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Not authenticated");
      return;
    }

    // Fetch profile info
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/v1/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (res.ok && data.status === "success" && data.data) {
          setProfile(data.data);
        } else {
          setProfile(null);
        }
      } catch (err) {
        setProfile(null);
      }
    };

    // Fetch user info
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/v1/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (res.ok && data.status === "success" && data.data) {
          setUser(data.data);
        }
      } catch (err) {
        setUser(null);
      }
    };

    fetchProfile();
    fetchUser();
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-gray-600">{error}</p>
        <a
          href="/profile/edit"
          className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          Edit Profile
        </a>
      </div>
    );
  }

  // If profile exists, show full profile
  if (profile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Profile</h1>
        <div className="bg-white rounded shadow p-6 w-full max-w-md mb-6">
          <div className="flex flex-col items-center mb-4">
            {profile.profilePic ? (
              <img
                src={`http://localhost:5000/uploads/${profile.profilePic}`}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border mb-2"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                <span className="text-gray-400">No Image</span>
              </div>
            )}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Full Name:</span> {profile.fullName}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Email:</span> {profile.email}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Phone:</span> {profile.phone}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Date of Birth:</span> {profile.dob}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Gender:</span> {profile.gender}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Address:</span> {profile.address}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Profession:</span>{" "}
            {profile.profession}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Experience:</span>{" "}
            {profile.experience} years
          </div>
        </div>
        <a
          href="/profile/edit"
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          Edit Profile
        </a>
      </div>
    );
  }

  // If no profile, show only name and email from user info
  if (user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Profile</h1>
        <div className="bg-white rounded shadow p-6 w-full max-w-md mb-6">
          <div className="mb-2">
            <span className="font-semibold">Name:</span> {user.name}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Email:</span> {user.email}
          </div>
        </div>
        <a
          href="/profile/edit"
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          Edit Profile
        </a>
      </div>
    );
  }

  // Loading state
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <p className="text-gray-600">Loading profile...</p>
    </div>
  );
};

export default Profile;
