const pool = require("../database/index.js")

const licencaController = {
    getAll: async (req, res) => {

        try {
            
            const [rows, fiels] = await pool.query("SELECT * FROM LICENCAS");

            res.json({
                data : rows
            })
            
        } catch (error) {
            console.log(error)
            res.json({
                status : "error"
            })
        }
    },
    create: async (req, res) => {
        try {

            const {NUMERO, ORGAO_AMBIENTAL, EMISSAO, VALIDADE, EMPRESA} = req.body
            const sql = "INSERT INTO LICENCAS (NUMERO, ORGAO_AMBIENTAL, EMISSAO, VALIDADE, EMPRESA) VALUES(?, ?, ?, ?, ?);"
            const [rows, fiels] = await pool.query(sql, [NUMERO, ORGAO_AMBIENTAL, EMISSAO, VALIDADE, EMPRESA])

            res.json({
                data : rows
            })
            
        } catch (error) {
            console.log(error)
            res.json({
                status : "error"
            })
        }
    },
    update: async (req, res) => {
        try {

            const {title, content} = req.body
            const { id } = req.params
            
            const sql = "UPDATE LICENCAS SET NUMERO = ?, ORGAO_AMBIENTAL = ?, EMISSAO = ?, VALIDADE = ?, EMPRESA = ? WHERE ID = ?;"
            const [rows, fiels] = await pool.query(sql, [title, content, id])

            res.json({
                data : rows
            })
            
        } catch (error) {
            console.log(error)
            res.json({
                status : "error"
            })
        }
    },
    delete: async (req, res) => {
        try {

            const { id } = req.params
            const [rows, fiels] = await pool.query("DELETE FROM LICENCAS WHERE ID = ?", [id])

            res.json({
                data : rows
            })
            
        } catch (error) {
            console.log(error)
            res.json({
                status : "error"
            })
        }
    }
}

module.exports = licencaController;