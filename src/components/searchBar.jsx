import { useState } from "react";
import UserCard from "./UserCard";

const SearchBar = () => {
  const [username, setUsername] = useState("");
  const [userCard, setUserCard] = useState({});
  const [loading, setLoading] = useState(false);
  const [findedUser, setFindedUser] = useState(null);

  const handleUserCard = () => {
    if (!username) return;

    setLoading(true);

    const githubApi = "https://api.github.com/users/";

    const formattedUsername = username.toLowerCase().replace(/\s+/g, "");

    fetch(githubApi + formattedUsername)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Not Found") {
          setLoading(false);
          setUserCard({});
          setFindedUser(false);
        } else {
          const userCard = {
            name: data.name || data.login || "Usuário sem nome",
            avatar_url: data.avatar_url || "",
            bio: data.bio || "Sem biografia disponível",
          };

          setLoading(false);
          setFindedUser(true);
          setUserCard(userCard);
        }
      })
      .catch((err) => {
        console.error(err);

        setLoading(false);
        setUserCard({});
        setFindedUser(false);
      });
  };

  return (
    <div>
      <form
        className="bg-white text-black flex items-center p-2.5 rounded-lg w-1/2 lg:w-1/3 mt-5 mx-auto"
        onSubmit={(ev) => {
          ev.preventDefault();
          handleUserCard();
        }}
      >
        <input
          type="text"
          placeholder="Digite um usuário do GitHub"
          className="p-2 w-1/1 focus:outline-none focus:ring-0 focus:border-none"
          onChange={(ev) => setUsername(ev.target.value)}
          value={username}
          required
        />

        <button
          type="submit"
          className="p-3 m-0 ml-1 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-500  transition-all hover:bg-blue-600"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </form>

      {loading && (
        <div className="flex justify-center items-center mt-5">
          <p>Carregando...</p>
        </div>
      )}

      {!loading && userCard.name && (
        <div>
          <UserCard userCard={userCard} />
        </div>
      )}

      {findedUser === false && (
        <div className="mt-5 bg-red-50 p-3 rounded w-2/3 lg:w-4/6 mx-auto">
          <p className="text-center text-red-500">
            Nenhum perfil foi encontrado com esse nome de usuário
          </p>
          <p className="text-center text-red-500">Tente novamente</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
