const db = require('../config/db')

module.exports = class {
    static async getNavmenu(){
        let connection = await db.getConnection();
        const rows = await connection.query("SELECT label, pagekey FROM navmenu JOIN page On page.pageID=navmenu.pageId ORDER BY menuOrder");
        connection.end();
        return rows;
    };
};