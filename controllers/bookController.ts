import { Request, Response } from "express";
const postgre = require('../utils/database');

interface Book {
    name: string;
    price: number;
}

const bookController = {
    getAll: async (req: Request, res: Response) => {
        try {
            const { rows } = await postgre.query("select * from books");
            res.json({ msg: "OK", data: rows });
        } catch (error: any) {
            res.json({ msg: error.message });
        }
    },
    getById: async (req: Request, res: Response) => {
        try {
            const { rows } = await postgre.query("select * from books where book_id = $1", [req.params.id]);

            if (rows[0]) {
                return res.json({ msg: "OK", data: rows });
            }

            res.status(404).json({ msg: "not found" });
        } catch (error: any) {
            res.json({ msg: error.message });
        }
    },
    create: async (req: Request, res: Response) => {
        try {
            const { name, price }: Book = req.body;

            const sql = 'INSERT INTO books(name, price) VALUES($1, $2) RETURNING *';

            const { rows } = await postgre.query(sql, [name, price]);

            res.json({ msg: "OK", data: rows[0] });

        } catch (error: any) {
            res.json({ msg: error.message });
        }
    },
    updateById: async (req: Request, res: Response) => {
        try {
            const { name, price }: Book = req.body;

            const sql = 'UPDATE books set name = $1, price = $2 where book_id = $3 RETURNING *';

            const { rows } = await postgre.query(sql, [name, price, req.params.id]);

            res.json({ msg: "OK", data: rows[0] });

        } catch (error: any) {
            res.json({ msg: error.message });
        }
    },
    deleteById: async (req: Request, res: Response) => {
        try {
            const sql = 'DELETE FROM books where book_id = $1 RETURNING *';

            const { rows } = await postgre.query(sql, [req.params.id]);

            if (rows[0]) {
                return res.json({ msg: "OK", data: rows[0] });
            }

            return res.status(404).json({ msg: "not found" });

        } catch (error: any) {
            res.json({ msg: error.message });
        }
    }
};

export default bookController;
