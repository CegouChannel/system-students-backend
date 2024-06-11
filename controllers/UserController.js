import * as UserModel from '../models/UserModel.js'
import {generate, verify} from "password-hash";

export const createUser = (req, res) => {
    const data = req.body
    UserModel.insertUser(data, (err, results) => {
        if(err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const login = async (req, res) => {
    try {
        const data = req.body

        const user = await UserModel.getUserByEmail(data.email)
        if (!user) {
            return res.json({ message: 'Пользователь с таким email не существует!' })
        }

        const isPasswordValid = verify(data.password, user.password)
        if (!isPasswordValid) {
            return res.json({ message: 'Неверная почта или пароль!' })
        }
        const authUser = {
            id: user.id,
            fio: user.fio,
            email: user.email,
            role: user.role,
        }
        return res.json(authUser)
    } catch (error) {
        return res.json({ message: 'Ошибка авторизации' })
    }
};