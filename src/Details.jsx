function Details({ show, goBack }) {
  if (!show) return null;

  return (
    <div className="main-container p-6 text-left">

      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={
            show.image
              ? show.image.original
              : "https://via.placeholder.com/400x600?text=No+Image"
          }
          alt={show.name}
          className="w-full md:w-1/3 rounded object-cover"
        />

        <div className="flex-1">
          <h2 className="text-4xl mb-2">{show.name}</h2>

          <p className="mb-4">
            {show.genres?.join(", ")}
          </p>

          <p className="mb-4">
            {show.language}
          </p>

          <div
            className="pt-4"
            dangerouslySetInnerHTML={{ __html: show.summary }}
          />
        </div>
      </div>

      <button
        onClick={goBack}
        className="mt-12 mx-auto block"
      >
        Back to Menu
      </button>

    </div>
  );
}

export default Details;
