import { Request, Response } from "express";

import { Registration } from '../models/Registration';

export const createRegistration = async (req: Request, res: Response) => {
    let { name, surname, gender, age, status } = req.body;

    let newRegistration = await Registration.create({ name, surname, gender, age, status });
    res.json({ id: newRegistration.id, name, surname, gender, age, status });
}

export const getRegistration = async (req: Request, res: Response) => {
    let { id } = req.params;

    let registration = await Registration.findByPk(id);
    if(registration) {
        res.json({ registration });
    } else {
        res.json({ error: 'Cadastro não encontrado' });
    }
}

export const updateRegistration = async (req: Request, res: Response) => {
    let { id } = req.params;
    let { name, surname, gender, age, status } = req.body;

    let registration = await Registration.findByPk(id);
    if(registration) {
        registration.name = name;
        registration.surname = surname;
        registration.gender = gender;
        registration.age = age;
        registration.status = status;
        await registration.save();

        res.json({ registration });
    } else {
        res.json({ error: 'Cadastro não encontrado' });
    }
}

export const deleteRegistration = async (req: Request, res: Response) => {
    let { id } = req.params;
    await Registration.destroy({ where: { id } });
    res.json({});
}