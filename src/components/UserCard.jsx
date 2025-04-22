function UserCard({ userCard }) {
  return (
    <div
      className="flex flex-col sm:flex-row items-center gap-5 mt-10 bg-gray-300 p-5 rounded-lg max-w-4xl mx-auto px-4 sm:px-4 md:px-8 lg:px-16 xl:px-24 sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2"
      style={{ maxWidth: "calc(100% - 20px)" }}
    >
      <img
        className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-full border-blue-500 border-3"
        src={userCard.avatar_url}
        alt="User Avatar"
      />
      <div className="flex flex-col items-center sm:items-start justify-center text-center sm:text-left">
        <h2 className="text-xl font-bold text-blue-500 mb-2">
          {userCard.name}
        </h2>
        <p className="text-gray-600">{userCard.bio}</p>
      </div>
    </div>
  );
}

export default UserCard;
