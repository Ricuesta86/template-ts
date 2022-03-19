import { Request, Response } from 'express';

export const getUsuarios = (req:Request, res:Response) => {
    res.status(200).json({
        msg: 'getUsuarios'
    });
};

export const getUsuario = (req: Request, res: Response) => {
    const { id }=req.params;
    res.status(200).json({
        msg: 'getUsuario',
        id
    });
};

export const postUsuario = (req: Request, res: Response) => {
    const body = req.body;
    res.status(200).json({
        msg:'postUsuario',
        body
    });
};

export const putUsuario = (req: Request, res: Response) => {
    const {id} = req.params;
    const body = req.body;
    res.status(200).json({
        msg: 'putUsuario',
        body,
        id
    });
};

export const deleteUsuario = (req: Request, res: Response) => {
    const { id } = req.params;
    res.status(200).json({
        msg: 'getUsuario',
        id,
    });
};