const db = require('../config/db')

module.exports = class {
    static async getPage(pagekey){
        let connection = await db.getConnection();
        const rows = await connection.query("SELECT * FROM page WHERE pageKey = ?", [pagekey]);
        connection.end();
        return rows;
    }    
};


