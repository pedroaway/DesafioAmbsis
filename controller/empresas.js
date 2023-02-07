const pool = require("../database/index.js")

const empresaController = {
    getAll: async (req, res) => {

        try {
            
            const [rows, fiels] = await pool.query("select * from empresas");

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
            const {CNPJ, RAZAO_SOCIAL, CIDADE, ESTADO, BAIRRO, COMPLEMENTO} = req.body
            const sql = "INSERT INTO empresas (CNPJ, RAZAO_SOCIAL, CIDADE, ESTADO, BAIRRO, COMPLEMENTO) VALUES(?, ?, ?, ?, ?, ?);"
            const [rows, fiels] = await pool.query(sql, [CNPJ, RAZAO_SOCIAL, CIDADE, ESTADO, BAIRRO, COMPLEMENTO])

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

            const {CNPJ, RAZAO_SOCIAL, CIDADE, ESTADO, BAIRRO, COMPLEMENTO} = req.body
            const { id } = req.params
            
            const sql = "UPDATE EMPRESAS SET CNPJ = ?, RAZAO_SOCIAL = ?, CIDADE = ?, ESTADO = ?, BAIRRO = ?, COMPLEMENTO = ? where CNPJ = ?;"
            const [rows, fiels] = await pool.query(sql, [CNPJ, RAZAO_SOCIAL, CIDADE, ESTADO, BAIRRO, COMPLEMENTO, id])

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
            const [rows, fiels] = await pool.query("delete from empresas where CNPJ = ?", [id])

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

module.exports = empresaController;