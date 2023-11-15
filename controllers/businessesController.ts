import { Request, Response } from "express";
const postgre = require('../utils/database');
const table = "businesses";
interface Businesses {
    id: number;
    name: string;
    location?: string;
    latitude?: number;
    longitude?: number;
    term?: string;
    radius?: number;
    categories?: string;
    locale?: string;
    price?: string;
    open_now?: boolean;
    open_at?: number;
    attributes?: string;
    sort_by?: string;
}

const businessesController = {
    getAll: async (req: Request, res: Response) => {
        try {
            const { rows } = await postgre.query(`select * from ${table}`);
            res.json({ msg: "OK", data: rows });
        } catch (error: any) {
            res.json({ msg: error.message });
        }
    },
    getById: async (req: Request, res: Response) => {
        try {
            const { rows } = await postgre.query(`select * from ${table} where id = $1`, [req.params.id]);
            if (rows[0]) {
                return res.json({ msg: "OK", data: rows });
            }

            res.status(404).json({ msg: "not found" });
        } catch (error: any) {
            res.json({ msg: error.message });
        }
    },
    create : async (req: Request, res: Response) => {
        try {
            const { name, location, latitude, longitude, term, radius, categories, locale, price, open_now, open_at, attributes, sort_by }: Businesses = req.body;
            const sql = `INSERT INTO ${table}(name, location, latitude, longitude, term, radius, categories, locale, price, open_now, open_at, attributes, sort_by) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *`;
            const { rows } = await postgre.query(sql, [name, location, latitude, longitude, term, radius, categories, locale, price, open_now, open_at, attributes, sort_by]);
            res.json({ msg: "OK", data: rows[0] });
        } catch (error: any) {
            res.json({ msg: error.message });
        }
    },
    deleteById: async (req: Request, res: Response) => {
        try {
            const sql = `DELETE FROM ${table} where id = $1 RETURNING *`;

            const { rows } = await postgre.query(sql, [req.params.id]);

            if (rows[0]) {
                return res.json({ msg: "OK", data: rows[0] });
            }

            return res.status(404).json({ msg: "not found" });

        } catch (error: any) {
            res.json({ msg: error.message });
        }
    },
    getByProps: async (req: Request, res: Response) => {
        const query = req.query;
        const whereConditions: string[] = [];
        for (const [key, value] of Object.entries(query)) {
            whereConditions.push(`${key} ILIKE '%${value}%'`);
        }
        try {
            const whereClause = whereConditions.join(' AND ');
            const { rows } = await postgre.query(`SELECT * FROM ${table} WHERE ${whereClause}`);
            if (rows[0]) {
                return res.json({ msg: "OK", data: rows });
            }
            res.status(404).json({ msg: "not found" });
        } catch (error: any) {
            res.json({ msg: error.message });
        }
    },
    updateById: async (req: Request, res: Response) => {
        try {
            const { name, location, latitude, longitude, term, radius, categories, locale, price, open_now, open_at, attributes, sort_by }: Businesses = req.body;

            const sql = `UPDATE ${table} set name = $1, location = $2, latitude = $3, longitude = $4, term = $5, radius = $6, categories = $7, locale = $8, price = $9, open_now = $10, open_at = $11, attributes = $12, sort_by = $13 where id = $14 RETURNING *`;

            const { rows } = await postgre.query(sql, [name, location, latitude, longitude, term, radius, categories, locale, price, open_now, open_at, attributes, sort_by, req.params.id]);

            res.json({ msg: "OK", data: rows[0] });

        } catch (error: any) {
            res.json({ msg: error.message });
        }
    },
}

export default businessesController;