const Pool = require('pg').Pool;
const pool = new Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PW,
    port: 5432,
});
const getModelAnswers = (request, response) => {
    pool.query("SELECT * FROM modelanswer ORDER BY id ASC", (error, results) => {
        if (error) {
            console.log("ERROR: " + error);
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
const getQuestions = (request, response) => {
    pool.query("SELECT * FROM quizquestion ORDER BY id ASC", (error, results) => {
        if (error) {
            console.log("ERROR: " + error);
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
module.exports = { getModelAnswers, getQuestions };
