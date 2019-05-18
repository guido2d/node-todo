const descripcion = {
  demand: true,
  alias: "d",
  desc: "Descripción de una tarea"
};

const argv = require("yargs")
  .command("crear", "Crea una nueva tarea", {descripcion})
  .command("actualizar", "Actualiza una tarea", {
    descripcion,
    completado: {
      alias: "c",
      default: true
    }
  })
  .command("borrar", "Borrar una tarea", {descripcion})
  .help().argv;

module.exports = {
  argv
};
