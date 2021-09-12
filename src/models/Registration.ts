import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface RegistrationInstance extends Model {
    id: number;
    name: string;
    surname: string;
    gender: string;
    age: number;
    status: string;
}

export const Registration = sequelize.define<RegistrationInstance>('Registration', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    surname: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'registration',
    timestamps: false
});