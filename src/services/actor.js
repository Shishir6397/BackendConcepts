const db = require("../../configuration/sql");
async function getActorsList(request, response) {
  const queryParams = request.query;
  try {
    const actors = await db("SELECT * FROM actor");
    console.log(actors);
    response.json({
      status: "success",
      data: { list: actors },
    });
  } catch (error) {
    console.error("Error retrieving users:", error);
    response.json({
      status : "error",
      message : error?.message
    })
  }
}

const filmsByActorId = async () => {};

module.exports = {
  getActorsList,
  filmsByActorId,
};
