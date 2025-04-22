function PageTitle() {
return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-10">
            <img
                className="w-20 h-20"
                src="src/assets/github-logo.png"
                alt="GitHub Logo"
            />
            <h1 className="text-center text-5xl">
                Perfil <span className="font-bold">GitHub</span>
            </h1>
    </div>
);
}

export default PageTitle;