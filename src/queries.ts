const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.DATABASE_USER,
    host:  process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PW,
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
