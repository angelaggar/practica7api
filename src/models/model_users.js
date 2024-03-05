const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String, // tipo de entrada num, str, etc
      required: true, // para hacerlo obligatorio
      match: [/^[A-Za-z]+$/, 'Only letters allowed.']
    },
    last_name: {
      type: String, // tipo de entrada num, str, etc
      // required: true, // para hacerlo obligatorio
      match: [/^[A-Za-z]+$/, 'Only letters allowed.'] // con un regex se busca que cumpla con caracteristicas especificas
    },
    email: {
      type: String,
      required: true,
      unique: true, // hace que esta propiedad sea unica en la DB
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid format']
    },
    gender: {
      type: String,
      enum: ['Male', 'Female']
    },
    password: {
      type: String,
      required: true
      // match: [
      //   /^(?=.\d)(?=.[\u0021-\u002b\u003c-\u0040])(?=.[A-Z])(?=.[a-z])\S{8,16}$/
      // ]
    },
    phone: {
      type: String,
      match: [/^[0-9]+$/, 'Invalid character']
    }
  },
  {
    timestamps: true // permite registrar la fecha y hora del registro
  }
)

const userModel = mongoose.model('users', userSchema) // el modelo anterior se convierte en modelo con esta expresion

// el primer parametro es el nombre de la coleccion en mongo y el segundo es el schema creado

module.exports = userModel
