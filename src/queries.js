const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'quiz_master',
    host: 'localhost',
    database: 'api',
    password: 'quiz144',
    port: 5432,
});
const getModelAnswers = (request, response) => {
    pool.query("SELECT * FROM modelanswer ORDER BY id ASC", (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
const getQuestions = (request, response) => {
    pool.query("SELECT * FROM quizquestion ORDER BY id ASC", (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
module.exports = { getModelAnswers, getQuestions };
