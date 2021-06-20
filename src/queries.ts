const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'quiz_master',
    host: 'localhost',
    database: 'api',
    password: 'quiz144',
    port: 5432,
});

const getModelAnswers = (
    request: { params: { id: string } },
    response: { status: (arg0: number) => { (): any; new (): any; json: { (arg0: any): void; new (): any } } },
) => {
    pool.query("SELECT * FROM modelanswer ORDER BY id ASC", (error: any, results: { rows: any; }) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};

const getQuestions = (
    request: { params: { id: string } },
    response: { status: (arg0: number) => { (): any; new (): any; json: { (arg0: any): void; new (): any } } },
) => {
    pool.query("SELECT * FROM quizquestion ORDER BY id ASC", (error: any, results: { rows: any; }) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};


module.exports = { getModelAnswers, getQuestions };
