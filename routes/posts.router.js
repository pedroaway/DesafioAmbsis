const express = require("express");
const router = express.Router();

const empresaController = require("../controller/empresas");
const licencaController = require("../controller/licencas")

router.get("/empresas", empresaController.getAll);
router.post("/empresa/insert", empresaController.create);
router.put("/empresa/update/:id", empresaController.update);
router.delete("/empresa/delete/:id", empresaController.delete);

router.get("/licencas", licencaController.getAll);
router.post("/licenca/insert", licencaController.create);
router.put("/licenca/update/:id", licencaController.update);
router.delete("/licenca/delete/:id", licencaController.delete);

module.exports = router;